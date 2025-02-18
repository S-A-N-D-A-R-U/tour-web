import React, { useState, useEffect } from "react";
import { Globe, ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpened]);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const handleTourClick = (type) => {
    navigate(`/tours?type=${type}`);
    setIsDropdownOpen(false);
    if (menuOpened) setMenuOpened(false);
  };

  return (
    <nav className={`bg-white w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex">
        {/* Logo Section */}
        <div className="w-[200px] border-r border-gray-100">
          <Link to="/" className="block p-1">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="border-b border-gray-100">
            <div className="flex justify-end items-center h-8 px-4 space-x-4 text-sm">
              <a href="mailto:tranquilsrilanka@gmail.com" 
                 className="flex items-center gap-1 hover:text-blue-600 whitespace-nowrap">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">tranquilsrilanka@gmail.com</span>
              </a>
              <a href="tel:+94779797597" 
                 className="flex items-center gap-1 hover:text-blue-600 whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+94 77 979 7597</span>
              </a>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="px-4 flex items-center justify-between h-12">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  Tours <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-white shadow-lg py-2 transition-all duration-200"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button 
                      onClick={() => handleTourClick('round')} 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Round Tour
                    </button>
                    <button 
                      onClick={() => handleTourClick('day')} 
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Day Tour
                    </button>
                  </div>
                )}
              </div>
              <Link to="#" className="text-gray-700 hover:text-blue-600">Seat in Coach</Link>
              <Link to="/thingstodo" className="text-gray-700 hover:text-blue-600">Things to Do</Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600">Offers</Link>
              <Link to="/transfer" className="text-gray-700 hover:text-blue-600">Transfer</Link>
              <Link to="/tavel-guide" className="text-gray-700 hover:text-blue-600">Travel Guide</Link>
            </div>

            <Link 
              to="/contact-us" 
              className="hidden lg:block bg-[#003366] px-5 py-1.5 text-white rounded-md hover:bg-[#004080] transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md ml-auto"
              aria-label="Toggle menu"
            >
              {menuOpened ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpened ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-white transform transition-transform duration-300 ease-in-out ${
            menuOpened ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button for mobile menu */}
          <button 
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-600" />
          </button>

          <div className="p-4 pt-16 overflow-y-auto h-full">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</Link>
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md flex items-center justify-between"
                >
                  Tours
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <button 
                      onClick={() => handleTourClick('round')} 
                      className="block w-full p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      Round Tour
                    </button>
                    <button 
                      onClick={() => handleTourClick('day')} 
                      className="block w-full p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      Day Tour
                    </button>
                  </div>
                )}
              </div>
              <Link to="#" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Seat in Coach</Link>
              <Link to="/thingstodo" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Things to Do</Link>
              <Link to="#" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Offers</Link>
              <Link to="/transfer" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Transfer</Link>
              <Link to="/tavel-guide" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Travel Guide</Link>
              <Link 
                to="/contact-us" 
                className="bg-[#003366] px-5 py-2 text-white rounded-md hover:bg-[#004080] text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;