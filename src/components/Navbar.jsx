import React from "react";
import { useState } from "react";
import { ChevronDown, Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Navigation data
const navItems = [
  {
    title: "Home",
    path: "/",
    hasDropdown: false,
    dropdownItems: [
      { title: "Home 1", path: "/home-1" },
      { title: "Home 2", path: "/home-2" },
      { title: "Home 3", path: "/home-3" },
    ],
  },
  {
    title: "About",
    path: "/about",
    hasDropdown: false,
  },
  {
    title: "Necklaces",
    path: "/necklaces",
    hasDropdown: false,
  },
  {
    title: "Earrings",
    path: "/earrings",
    hasDropdown: false,
  },
  {
    title: "Bangels",
    path: "/bangels",
    hasDropdown: false,
  },
  {
    title: "Anklets",
    path: "/anklets",
    hasDropdown: false,
  },
  {
    title: "Contact",
    path: "/contact",
    hasDropdown: false,
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#FFF8E9] shadow-sm sticky top-0  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-900">
              <img src="assets/Images/logo/logo.png" alt="" srcset=""  className="h-16"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:flex-1 md:justify-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center text-gray-900 px-2 py-2 text-sm font-medium hover:text-gray-600 focus:outline-none"
                  onClick={() => item.hasDropdown && toggleDropdown(index)}
                >
                  <Link to={item.path}>
                  {item.title}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition-transform ease-in-out duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Logo */}
          <div className="px-4 pt-6 pb-4 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Floda
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <div className="px-2 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                    onClick={() => item.hasDropdown && toggleMobileDropdown(index)}
                  >
                    <Link to={item.path}>
                    <span>{item.title}</span>
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeMobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeMobileDropdown === index && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Icons in Mobile Sidebar */}
          <div className="px-4 py-6 flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;