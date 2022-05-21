const router = require("express").Router();
const { route } = require("express/lib/application");
let Banner = require("../models/Banner");

//////////////Insert Banner/////////////////

/*router.route("/add").post((req, res) => {
  //const Banner_Image = req.body.Banner_Image;
  const Banner_ID = req.body.Banner_ID;
  const Banner_Name = req.body.Banner_Name;
  const Banner_Description = req.body.Banner_Description;

  const newBanner = new Banner({
    //Banner_Image,
    Banner_ID,
    Banner_Name,
    Banner_Description,
  });

  newBanner
    .save()
    .then(() => {
      res.json("Banner Added");
    })
    .catch((err) => {
      console.log(err);
    });
});*/

//Add banner

router.post("/add", (req, res) => {
  let newBanner = new Banner(req.body);

  newBanner.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Banner Addedd Successfully",
    });
  });
});

//////////////Retrieve Banner/////////////////

/*router.route("/").get((req, res) => {
  Banner.find()
    .then((banner) => {
      res.json(banner);
    })
    .catch((err) => {
      console.log(err);
    });
});*/

router.get("/", (req, res) => {
  Banner.find().exec((err, Banner) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingBanners: Banner,
    });
  });
});

//////////////Update Banner/////////////////

router.route("/update/:id").put(async (req, res) => {
  //wait for the promise
  let banner_id = req.params.id;
  const { Banner_Name, Banner_Description } = req.body;

  const updateBanner = {
    //Banner_Image,
    Banner_Name,
    Banner_Description,
  };

  const update = await Banner.findByIdAndUpdate(banner_id, updateBanner)
    .then(() => {
      res.status(200).send({ status: "Banner updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating banner", error: err.message });
    });
});

//////////////Delete Banner/////////////////

router.route("/delete/:id").delete(async (req, res) => {
  let banner_id = req.params.id;

  await Banner.findByIdAndDelete(banner_id)
    .then(() => {
      res.status(200).send({ status: "Banner deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with deleting banner", error: err.message });
    });
});

//////////////Retrive only one banner/////////////////
//http://localhost:8070/banner/get/6235500a031aae9b6194ef64

router.route("/get/:id").get(async (req, res) => {
  let banner_id = req.params.id;
  const banner = await Banner.findById(banner_id)
    .then((banner) => {
      res.status(200).send({ status: "Banner fetched", banner });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Banner", error: err.message });
    });
});

/*router.get("get/:id", (req, res) => {
  let banner_id = req.params.id;
  Banner.findById(banner_id, (err, Banner) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
      Banner,
    });
  });
});*/

module.exports = router;
