import React from 'react';

const categories = [
  "Today's Deals",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
];

export function Categories() {
  return (
    <nav className="bg-[#232f3e] text-white py-2 px-4">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          {categories.map((category) => (
            <li key={category}>
              <button className="hover:border-white border border-transparent px-2 py-1">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}