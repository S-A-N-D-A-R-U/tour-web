const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["round", "day"], required: true },
    category: { type: [String], required: true },
    description: { type: String, required: true },
    overview: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    locations: { type: [String], required: true },
    destinations: { type: [String], required: true },
    
    isOfferAvailable: { type: Boolean, default: false },
    offerPercentage: { type: Number, default: 0 },
    offerPrice: { type: Number, default: null },
    isPopular: { type: Boolean, default: false },

    highlights: { type: [String], required: true },
    includes: { type: [String], required: true },
    excludes: { type: [String], required: true },

    itinerary: [
      {
        day: { type: Number, required: true },
        route: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String },
        activities: { type: [String], required: true },
      }
    ],

  mapImage: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);
