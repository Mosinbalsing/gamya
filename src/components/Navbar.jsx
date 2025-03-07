import React, { useState } from "react";
import { ChevronDown, Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Necklaces", path: "/necklaces" },
  { title: "Earrings", path: "/earrings" },
  { title: "Bangels", path: "/bangels" },
  { title: "Anklets", path: "/anklets" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav className="bg-[#FFF8E9] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-900">
              <img src="assets/Images/logo/logo.png" alt="Logo" className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="text-gray-900 hover:text-gray-600">
                {item.title}
              </Link>
            ))}
          </div>

          {/* Social Icons (Visible only on Laptops & Desktops) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

          {/* Hamburger Menu (Visible on Tablets & Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className="text-gray-900 hover:text-gray-600 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile & Tablets */}
      <div className={`fixed inset-0 z-40 flex lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeSidebar}></div>

        {/* Sidebar */}
        <div className={`relative w-64 bg-white shadow-md transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          {/* Close Button */}
          <button onClick={closeSidebar} className="absolute top-4 right-4 text-gray-900 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>

          {/* Sidebar Menu */}
          <div className="mt-12 px-4">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} onClick={closeSidebar} className="block py-2 text-gray-900 hover:text-gray-600">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;