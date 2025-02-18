import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Hotel, DollarSign, Car, HelpCircle } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PlanTour = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+94',
    arrivalDate: '',
    departureDate: '',
    adults: '2',
    children: '',
    interests: [],
    accommodation: [],
    budget: '',
    additionalServices: [],
    specificRequests: '',
    dietaryRestrictions: ''
  });

  const totalSteps = 2;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1); // Move to the next step
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  };

  const interests = [
    'Nature & Scenic Beauty',
    'History & Culture',
    'Beach & Relaxation',
    'Adventure & Outdoor Activities',
    'Wildlife Safaris',
    'Wellness & Spa',
    'Local Food & Cuisine',
    'Festivals & Local Traditions',
    'Hiking & Trekking',
    'Water Sports'
  ];

  const accommodationTypes = [
    'Villas',
    'Standard Hotels',
    '2-star Hotels',
    '3-star Hotels',
    '4-star Hotels',
    '5-star Hotels',
    'Home Stays'
  ];

  const budgetRanges = [
    '$500 - $1000',
    '$1000 - $2000',
    '$2000 - $3000',
    '$3000+'
  ];

  const additionalServices = [
    'Private Chauffeur',
    'Guided Tours',
    'Airport Transfers',
    'Spa/Wellness Packages',
    'Special Occasion Arrangements'
  ];

  const faqs = [
    {
      question: 'How does the tour planning work?',
      answer: 'Our expert travel consultants will review your preferences and create a personalized itinerary within 24-48 hours. You can then review and request any adjustments.'
    },
    {
      question: 'How soon will I get my itinerary?',
      answer: 'You will receive your custom itinerary within 24-48 hours of submitting your request.'
    },
    {
      question: 'Can I customize my itinerary later?',
      answer: 'Yes! Once you receive your initial itinerary, you can request any adjustments to better suit your preferences.'
    }
  ];

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="flex gap-2">
                <PhoneInput
                        country={'lk'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        containerClass="w-full"
                        inputClass="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                        buttonClass="!border-gray-200 !bg-white hover:!bg-gray-50"
                      />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Travel Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Adults</label>
                <div className="relative">
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Children & Ages</label>
                <input
                  type="text"
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 (5 and 8 years old)"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Travel Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((interest) => (
                <label key={interest} className="flex items-center space-x-3 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleMultiSelect('interests', interest)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
            <h3 className="text-xl font-semibold">Accommodation Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accommodationTypes.map((type) => (
                <label key={type} className="flex items-center space-x-3 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.accommodation.includes(type)}
                    onChange={() => handleMultiSelect('accommodation', type)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
            <h3 className="text-xl font-semibold">Budget Per Person</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetRanges.map((range) => (
                <label key={range} className="flex items-center space-x-3 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="budget"
                    value={range}
                    checked={formData.budget === range}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{range}</span>
                </label>
              ))}
            </div>
            <h3 className="text-xl font-semibold">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServices.map((service) => (
                <label key={service} className="flex items-center space-x-3 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.additionalServices.includes(service)}
                    onChange={() => handleMultiSelect('additionalServices', service)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            <h3 className="text-xl font-semibold">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific locations or experiences you would like to include / Dietary restrictions or special needs
                </label>
                <textarea
                  name="specificRequests"
                  value={formData.specificRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Review & Submit</h3>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h4 className="font-medium text-gray-900">Personal Information</h4>
              <p className="text-gray-600">
                {formData.firstName} {formData.lastName}<br />
                {formData.email}<br />
                {formData.countryCode} {formData.phone}
              </p>
              
              <h4 className="font-medium text-gray-900 mt-6">Travel Details</h4>
              <p className="text-gray-600">
                Arrival: {formData.arrivalDate}<br />
                Departure: {formData.departureDate}<br />
                Group: {formData.adults} adults, {formData.children}
              </p>

              <h4 className="font-medium text-gray-900 mt-6">Selected Interests</h4>
              <div className="flex flex-wrap gap-2">
                {formData.interests.map(interest => (
                  <span key={interest} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>

              <h4 className="font-medium text-gray-900 mt-6">Budget Range</h4>
              <p className="text-gray-600">{formData.budget}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plan Your Dream Sri Lankan Adventure
            </h1>
            <p className="text-md text-blue-100">
              Tell us your preferences, and our expert travel consultants will craft your perfect itinerary
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto -mt-20 relative z-10 bg-white rounded-xl shadow-xl p-8 mb-20">
        
        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={() => handleNext()}
                className="ml-auto flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Review
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanTour;