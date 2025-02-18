const Tour = require("../models/Tour");

//  Get all tours (only necessary fields for listing)
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({}, "title type category image duration price rating locations destinations isOfferAvailable offerPrice offerPercentage");
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single tour by ID (with full details)
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ message: "Tour not found" });
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Create a new tour
exports.createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  Update a tour
exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTour) return res.status(404).json({ message: "Tour not found" });
    res.status(200).json(updatedTour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);
    if (!deletedTour) return res.status(404).json({ message: "Tour not found" });
    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
