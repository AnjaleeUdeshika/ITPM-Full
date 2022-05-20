const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    photographer : {
        type : String,
        required : true
    },
    eventType : {
        type : String,
        required : true
    },
    customerName : {
        type : String,
        required : true
    },
    customerContactNo : {
        type : String,
        required : true
    },
    customerEmail : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }

})

const Appointment = mongoose.model("appointments",appointmentSchema); // this appointments always create as plural and shows in lower letters

module.exports = Appointment;