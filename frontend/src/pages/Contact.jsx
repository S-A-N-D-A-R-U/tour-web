import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeInput, setActiveInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Visit Our Office",
      description: "123 Temple Road, Colombo 03, Sri Lanka",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Email Us",
      description: "info@srilankatours.com\nsupport@srilankatours.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Call Us",
      description: "+94 11 2345678\n+94 77 8901234",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1588258524675-c61945a0555b)',
            transform: 'translateZ(0) scale(1.2)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 backdrop-blur-sm"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-6 px-4">
            <div className="inline-block">
              <span className="bg-blue-500/20 text-blue-100 text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Contact Us
              <span className="block text-2xl md:text-3xl mt-2 font-normal text-blue-200 opacity-90">
                Let's Create Your Dream Journey Together
              </span>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 text-blue-50 transform translate-y-1" viewBox="0 0 1440 74" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to Start Your Adventure?</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our travel experts are ready to craft the perfect Sri Lankan experience tailored just for you. 
              Share your dreams with us, and let's make them a reality.
            </p>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-[1px] rounded-2xl">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-6 text-gray-900">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Personalized itineraries crafted by local experts",
                    "24/7 dedicated support throughout your journey",
                    "Authentic experiences off the beaten path",
                    "Best price guarantee for unforgettable memories"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'name', label: 'Your Name', type: 'text' },
                { name: 'email', label: 'Email Address', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setActiveInput(field.name)}
                    onBlur={() => setActiveInput('')}
                    className={`peer w-full px-4 py-3 border-2 rounded-xl bg-gray-50 outline-none transition-all duration-300
                      ${activeInput === field.name ? 'border-blue-500' : 'border-gray-200'}
                      focus:border-blue-500 focus:bg-white`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor={field.name}
                    className={`absolute left-3 text-gray-500 transition-all duration-300
                      peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-500
                      peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm
                      ${activeInput === field.name ? '-translate-y-7 text-sm text-blue-500' : 'top-3'}`}
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <div className="md:col-span-2 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveInput('message')}
                  onBlur={() => setActiveInput('')}
                  rows={6}
                  className={`peer w-full px-4 py-3 border-2 rounded-xl bg-gray-50 outline-none transition-all duration-300
                    ${activeInput === 'message' ? 'border-blue-500' : 'border-gray-200'}
                    focus:border-blue-500 focus:bg-white`}
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-3 text-gray-500 transition-all duration-300
                    peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-500
                    peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm
                    ${activeInput === 'message' ? '-translate-y-7 text-sm text-blue-500' : 'top-3'}`}
                >
                  Your Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl
                font-semibold hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[500px] w-full relative overflow-hidden rounded-t-[3rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162573094!2d79.7861641181711!3d6.921833528820317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1656289541797!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;