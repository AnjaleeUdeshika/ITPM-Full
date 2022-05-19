const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({

    albumId: {
        type : String,
        required: true //backend validation
    },

    category: {
        type : String,
        //required: true //backend validation
    },

    groomName: {
        type : String,
        required: true //backend validation
    },
    
    brideName: {
        type : String,
        required: true //backend validation
    },

    phone: {
        type : Number,
        required: true //backend validation
    },
    
    tool: {
        type : String,
        required: true //backend validation
    },
    
    date: {
        type : Date,
        required: true //backend validation
    },
    
    description: {
        type : String,
        //required: true //backend validation
    },
    
    coverImg: {
        // data: Buffer,
        type: String,
        //required: true //backend validation
    },
    
    img:
    {
        // data: Buffer,
        type: String
    }
    
})

const Album = mongoose.model("Album" , AlbumSchema);

module.exports = Album;