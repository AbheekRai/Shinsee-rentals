
import { Film, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold gradient-text">Shinsee</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your premium destination for movie rentals. Stream the latest blockbusters and classic films in stunning quality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Movies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Movies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Action</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Comedy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Drama</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Sci-Fi</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Supported Devices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Account</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Shinsee. All rights reserved. Made with ❤️ for movie lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
