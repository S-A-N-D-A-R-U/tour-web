import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRight, Calendar, Users, MessageSquare, Mail, Phone, User, CreditCard, MapPin, Clock, Star } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const TourBooking = () => {
  const { id } = useParams();
  const location = useLocation();
  const tour = location.state?.tour || {
    title: "7-Day Cultural Heritage Tour",
    price: 899,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1586185118245-89b519c7c364",
    rating: 4.9,
    reviews: 128,
    location: "Cultural Triangle"
  };

 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    adults: 1,
    children: [{ age: '' }],
    specialRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    console.log("New Phone Value:", value);
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleChildAgeChange = (index, value) => {
    const newChildren = [...formData.children];
    newChildren[index] = { age: value };
    setFormData(prev => ({
      ...prev,
      children: newChildren
    }));
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [...prev.children, { age: '' }]
    }));
  };

  const removeChild = (index) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Tour Image */}
      <div className="relative h-[90px]">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold font-display">Complete Your Booking</h2>
                <p className="text-white/80 mt-2">Fill in your details to secure your adventure</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <PhoneInput
                        country={'lk'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        enableSearch={true}
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: false
                        }}
                        containerClass="w-full"
                        inputClass="w-full pl-12 pr-4 py-6 rounded-lg border border-gray-200 bg-gray-50  focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        buttonClass="!border-gray-200 !bg-white hover:!bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Tour Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Arrival Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="arrivalDate"
                          required
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Departure Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="departureDate"
                          required
                          value={formData.departureDate}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Adults *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="adults"
                          value={formData.adults}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-shadow"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} Adult{i !== 0 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Children Section */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-medium text-gray-700">
                        Children (Under 12 years)
                      </label>
                      <button
                        type="button"
                        onClick={addChild}
                        className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1"
                      >
                        <Users className="w-4 h-4" />
                        Add Child
                      </button>
                    </div>
                    <div className="space-y-4">
                      {formData.children.map((child, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex-1">
                            <select
                              value={child.age}
                              onChange={(e) => handleChildAgeChange(index, e.target.value)}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            >
                              <option value="">Select Age</option>
                              {[...Array(12)].map((_, i) => (
                                <option key={i} value={i}>{i} year{i !== 1 ? 's' : ''} old</option>
                              ))}
                            </select>
                          </div>
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => removeChild(index)}
                              className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    Special Requirements
                  </h3>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any dietary requirements, accessibility needs, or questions?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Confirm and Pay
                </button>
              </form>
            </div>
          </div>

          {/* Tour Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
              {/* Tour Image */}
              <div className="relative h-48">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{tour.rating}</span>
                      <span className="text-white/80">({tour.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>
                      {formData.adults} Adult{formData.adults !== 1 ? 's' : ''}
                      {formData.children.length > 0 && ` + ${formData.children.length} Children`}
                    </span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Tour Price per Person</span>
                    <span className="font-semibold">${tour.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Number of Adults</span>
                    <span className="font-semibold">× {formData.adults}</span>
                  </div>
                  {formData.children.length > 0 && (
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Children Discount</span>
                      <span className="text-green-600">-$200</span>
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total Price</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">
                          ${tour.price * formData.adults}
                        </span>
                        <p className="text-sm text-gray-500">All taxes included</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;