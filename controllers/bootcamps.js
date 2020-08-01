const Bootcamp = require('../models/Bootcamp');

/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

/**
 * @desc Get single bootcamps
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = async (req, res, next) => {
  try {
    const ID = req.params.id;
    const bootcamp = await Bootcamp.findById(ID);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

/**
 * @desc Create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Private
 */
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

/**
 * @desc Update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
exports.updateBootcamp = async (req, res, next) => {
  try {
    const ID = req.params.id;
    const bootcamp = await Bootcamp.findByIdAndUpdate(ID, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

/**
 * @desc Delete bootcamp
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const ID = req.params.id;
    const bootcamp = await Bootcamp.findByIdAndDelete(ID);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
