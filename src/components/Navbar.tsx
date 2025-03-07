import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-pink-500">MYNTRA</h1>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link to="/men" className="text-gray-700 hover:text-pink-500">MEN</Link>
                <Link to="/women" className="text-gray-700 hover:text-pink-500">WOMEN</Link>
                <Link to="/kids" className="text-gray-700 hover:text-pink-500">KIDS</Link>
                <Link to="/home" className="text-gray-700 hover:text-pink-500">HOME & LIVING</Link>
                <Link to="/beauty" className="text-gray-700 hover:text-pink-500">BEAUTY</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <div className="relative">
              <Heart className="w-5 h-5 text-gray-500" />
            </div>
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-500" />
            </div>
            <div className="relative">
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;