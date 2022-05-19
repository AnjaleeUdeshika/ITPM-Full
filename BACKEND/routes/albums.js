const router = require("express").Router();
const { update } = require("../models/Album");
let Album = require("../models/Album");

//add album
//http://localhost:8090/album/add

router.route("/add").post((req,res) => {

    const albumId = req.body.albumId;
    const category = req.body.category;
    const groomName = req.body.groomName;
    const brideName = req.body.brideName;
    const phone = Number(req.body.phone);
    const tool = req.body.tool;
    const date = Date(req.body.date);
    const description = req.body.description;
    const coverImg = req.body.coverImg;
    const img = req.body.img;
    
    const newAlbum = new Album({
        albumId,
        category,
        groomName,
        brideName,
        phone,
        tool,
        date,
        description,
        coverImg,
        img
    }) 

    newAlbum.save().then(() => {
        res.json("Album Added")
    }).catch((err) => {
        console.log(err);
    })
})


//route
//http://localhost:8090/album/
//retrieve album
router.route("/").get((req, res) =>{
    Album.find().then((albums) => {
        res.json(albums)
    }).catch((err) => {
        console.log(err)
    })
})

//update album
//http://localhost:8090/album/update
router.route("/update/:id").put(async (req, res) => {
    let itemId = req.params.id;
    const { albumId, category, groomName, brideName, phone, tool, date, description, coverImg,img } = req.body;

    const updateAlbum = {
        albumId,
        category,
        groomName,
        brideName,
        phone,
        tool,
        date,
        description,
        coverImg,
        img
    }

    const update = await Album.findByIdAndUpdate(itemId, updateAlbum)
    .then(() => {
        res.status(200).send({status: "Album updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"})
    })

})


//delete album
router.route("/delete/:id").delete(async(req, res) => {
    let albumId = req.params.id;

    await Album.findByIdAndDelete(albumId)
    .then(() => {
        res.status(200).send({status: "Album Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with delete album", error: err.message});
    })
})

//retreve data of one album
router.route("/get/:id").get(async(req, res) => {
    let itemId = req.params.id;
    await Album.findById(itemId)
    .then((album) => {
        res.status(200).send({status: "Album fetched", album})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status:"Error withfetch album", error: err.message})
    })
})

module.exports = router;