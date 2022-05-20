const router = require("express").Router();
const User = require("../models/User")
const JsonWebToken = require('jsonwebtoken')
const Bcrypt = require('bcryptjs')
var fs = require('fs');
var path = require('path');
var multer = require('multer');

const SECRET_JWT_CODE = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MTk4Mjc3NCwiaWF0IjoxNjUxOTgyNzc0fQ.cqTcxUoDib-6NWsLN-yVmJSBFwkngnvc2xxgQ_d-GE4'

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

//router for add a new user
router.post("/user", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const password = req.body.password;

    const newUser = new User({
        name,
        email,
        mobile,
        address,
        password:Bcrypt.hashSync(password,10)
    })



    try {
        let response = await newUser.save();
        if (response)
            return res.status(201).send({ message: "New User Added" });
    } catch (err) {
        console.log('ERR',err);
        console.log("error while saving");
        return res.status(500).send({ status: "Internal Server Error" });
    }
});

//route for login
router.post("/user/login", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    if (email) {
        try {
            await User.findOne({ email: email }).then((user) => {
                if(!user){
                    return res.status(200).send({ code: 401, status: "user does not exist" });
                }else{
                    if(!Bcrypt.compareSync(password,user.password)){
                        return res.status(200).send({ code: 401, status: "wrong password" });
                    }else{
                        const token = JsonWebToken.sign({id:user._id,name:user.name,email:user.email},SECRET_JWT_CODE)
                        return res.status(200).send({ code: 200, status: "success", id:user._id, name:user.name, token:token });
                    }
                }
                
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

//router for retrieve and send all the user records
router.get("/user/:Id", async (req, res) => {
    const _id = req.params.Id;
    try {
        const response = await User.findOne({ _id: _id });
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//router for update a user
router.put("/user/update/:Id", async (req, res) => {
    const _id = req.params.Id;
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const password = req.body.password;
    const type = req.body.type;
    const events = req.body.events;


    const payload = {
        name,
        email,
        mobile,
        address,
        password:Bcrypt.hashSync(password,10),
        type,
        events
    }



    if (_id) {
        try {
            await User.findOneAndUpdate({ _id: _id }, payload).then(() => {
                return res.status(200).send({ status: "User Successfully updated!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

//router for delete a user
router.delete("/user/:Id", async (req, res) => {
    const _id = req.params.Id;

    if (_id) {
        try {
            await User.deleteOne({ _id: _id }).then(() => {
                return res.status(200).send({ status: "User Successfully deleted!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

module.exports = router;