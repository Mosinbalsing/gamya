import { FacebookIcon, InstagramIcon, MessageCircle } from "lucide-react";

const SocialIcons = ({ className }) => (
  <div className={`flex space-x-4 ${className}`}>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-[#A63C15]">
      <InstagramIcon className="h-5 w-5" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-[#A63C15]">
      <FacebookIcon className="h-5 w-5" />
    </a>
    <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-[#A63C15]">
      <MessageCircle className="h-5 w-5" />
    </a>
  </div>
);

export default function Footer() {
    return (
      <footer className="bg-[#e8d5b0] text-[#7d5a45] px-4 md:px-8 lg:px-16 pt-8 pb-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src="/assets/Images/logo/gamya.png" alt="Gamya Collections" className="h-24" />
        </div>
  
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8">
          {/* Newsletter Section */}
          <div> 
            <h3 className="text-xl font-medium mb-4">Newsletter</h3>
            <p className="mb-4">Be the first to know about sales, new product launches and exclusive offers!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white border border-[#7d5a45] p-2 w-full"
              />
              <button className="bg-[#a67c52] text-white p-2 px-4 rounded">→</button>
            </div>
          </div>
  
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Locate Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
  
          {/* Policy Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Policy</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shipping and Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Grievances
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Offer T&C
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
  
          {/* Support Details Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Support Details</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Phone/Whatsapp</p>
                <p>+91 91377 42517</p>
              </div>
              <div>
                <p className="font-medium">Contact us at</p>
                <p>Support@Gamya.com</p>
              </div>
              <div>
                <p className="font-medium">Call & Chat Support</p>
                <p>Mon - Sat (10 AM - 7 PM)</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-[#7d5a45] my-6"></div>
  
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <SocialIcons />
  
          {/* Copyright */}
          <div className="text-center mb-4 md:mb-0">
            <p>Copyright © 2025 Gamya Collections.</p>
          </div>
  
          {/* Payment Methods */}
          {/* <div className="flex gap-2">
            <img src="/mastercard.png" alt="Mastercard" className="h-8 bg-[#8b4513] p-1 rounded" />
            <img src="/visa.png" alt="Visa" className="h-8 bg-[#8b4513] p-1 rounded" />
            <img src="/rupay.png" alt="RuPay" className="h-8 bg-[#8b4513] p-1 rounded" />
            <img src="/paypal.png" alt="PayPal" className="h-8 bg-[#8b4513] p-1 rounded" />
            <img src="/gpay.png" alt="GPay" className="h-8 bg-[#8b4513] p-1 rounded" />
          </div> */}
        </div>
      </footer>
    )
  }
  
  