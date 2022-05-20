const router = require("express").Router();
let Appointment = require("../models/Appointment");

// http://localhost:8070/appointment/add

router.route("/add").post((req, res)=>{

    const photographer = req.body.photographer;
    const eventType = req.body.eventType;
    const customerName = req.body.customerName;
    const customerContactNo = req.body.customerContactNo;
    const customerEmail = req.body.customerEmail;
    const date = req.body.date;

    const newAppointment = new Appointment({
        photographer,
        eventType,
        customerName,
        customerContactNo,
        customerEmail,
        date
    })
// Error handling
    newAppointment.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/get").get((req, res)=>{

    Appointment.find().then((appointments)=>{
        res.json(appointments)
    }).catch((err)=>{
        console.log(err);
    })

})

// : should use to fetch the ID from URL
// can also use POST instead of PUT
//using asyncawait function
router.route('/update/:id').post((req, res) => {
    Appointment.findById(req.params.id)
      .then(appointment => {
        appointment.photographer = req.body.photographer;
        appointment.eventType = req.body.eventType;
        appointment.customerName = req.body.customerName;
        appointment.customerContactNo = req.body.customerContactNo;
        appointment.customerEmail = req.body.customerEmail;
        appointment.date = req.body.date;
  
        appointment.save()
          .then(() => res.json('Appointment updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route("/delete/:id").delete(async(req, res) => {
    let appointmentID = req.params.id;
    
    await Appointment.findByIdAndDelete(appointmentID).then(() => {
        res.status(200).send({status: "Data deleted"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting data", error: err.meaasge}); 
    })
})

// get single appointment
//router.route("/get/:id").get(async(req, res) =>{
//    let appointmentID = req.params.id;
//    const appointment = await Appointment.findById(appointmentID).then((appointment) => {
 //       res.status(200).send({status: "Single data fetched", appointment});
   // }).catch((err) => {
     //   console.log(err.message);
       // res.status(500).send({status: "Error with getting single data", error: err.meaasge});
    //})
//})

router.route('/get/:id').get((req, res) => {
    Appointment.findById(req.params.id)
      .then(appointment => res.json(appointment))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;