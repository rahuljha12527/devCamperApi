const Bootcamp=require('../models/Bootcamp');

//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

//@desc  Get all bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamps ${req.params.id}` });
};

//@desc  Create a new bootcamp
//@route POST /api/v1/bootcamps
//@access Private
module.exports.createBootcamp = (req, res, next) => {
  console.log("ans",req); //this 
  res.status(200).json({ success: true, msg: "Create new  bootcamps" });
};

//@desc  Update  bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id}` });
};

//@desc  Delete  bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps ${req.params.id}` });
};
