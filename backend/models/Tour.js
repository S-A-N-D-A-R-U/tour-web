const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["round", "day"], required: true },
    category: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    maxPeople: { type: Number, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    locations: { type: [String], required: true },
    destinations: { type: [String], required: true },
    
    isOfferAvailable: { type: Boolean, default: false },
    offerPercentage: { type: Number, default: 0 },
    offerPrice: { type: Number, default: null },

    ratings: {
      avgRating: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 }
    },

    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        userName: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        date: { type: Date, default: Date.now }
      }
    ],

    highlights: { type: [String], required: true },
    includes: { type: [String], required: true },
    excludes: { type: [String], required: true },

    itinerary: [
      {
        day: { type: Number, required: true },
        route: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String },
        activities: { type: [String], required: true }
      }
    ],

    customizable: { type: Boolean, default: false },
    additionalServices: { type: [String], default: [] },
    relatedTours: { type: [mongoose.Schema.Types.ObjectId], ref: "Tour" },

    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tour", tourSchema);
