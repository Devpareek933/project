import React from 'react';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#131921] text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">amazon</h1>
          <button className="flex items-center space-x-1 hover:border-white border border-transparent p-1">
            <Menu size={20} />
            <span>All</span>
          </button>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] px-6 rounded-r-md">
              <Search className="text-black" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="flex flex-col hover:border-white border border-transparent p-1">
            <span className="text-xs">Hello, Sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </button>

          <button className="flex flex-col hover:border-white border border-transparent p-1">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </button>

          <button className="flex items-center hover:border-white border border-transparent p-1">
            <ShoppingCart size={24} />
            <span className="font-bold">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}