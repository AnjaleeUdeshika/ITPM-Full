const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  Banner_ID: {
    type: String,
    required: true,
  },
  Banner_Name: {
    type: String,
    required: true,
  },
  Banner_Description: {
    type: String,
    required: true,
  },
  Banner_Image: {
    type: String,
    required: true,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
