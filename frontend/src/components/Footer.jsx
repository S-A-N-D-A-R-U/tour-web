import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaPinterest,
    FaTripadvisor,
    FaInstagram,
} from 'react-icons/fa';
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const links = {
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  tours: [
    { label: "Cultural Tours", href: "#" },
    { label: "Adventure Tours", href: "#" },
    { label: "Wildlife Tours", href: "#" },
    { label: "Beach Holidays", href: "#" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Travel Insurance", href: "#" },
  ],
};

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/TranquilSrilankaTours", label: "Facebook", colors: "text-blue-600 hover:text-blue-700" },
  { icon: FaTwitter, href: "#", label: "Twitter", colors:"text-blue-400 hover:text-blue-500" },
  { icon: FaInstagram, href: "https://www.instagram.com/tranquil_srilanka/", label: "Instagram", colors: "text-red-600 hover:text-red-700"},
  { icon: FaYoutube, href: "https://www.youtube.com/@tranquilsrilanka", label: "YouTube", colors: "text-red-600 hover:text-red-700"},
  { icon: FaPinterest, href: "https://www.pinterest.com/tranquilsl", label: "Pinterest" , colors: "text-red-500 hover:text-red-600" },
  { icon: FaTripadvisor, href: "#", label: "TripAdvisor" ,colors:"text-green-600 hover:text-green-700"},
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Tranquil Sri Lanka</h2>
              <p className="text-gray-300 max-w-md">
                Experience the beauty and serenity of Sri Lanka with our
                carefully curated tours and authentic local experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                <span>No 60, Polgolla Watta, Polgolla, Kandy, Sri Lanka</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>+94 77 979 7597</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>tranquilsrilanka@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label, colors }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={` ${colors} transition-colors `}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 text-white capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Tranquil Sri Lanka. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;