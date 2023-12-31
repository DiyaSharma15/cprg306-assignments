import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-white rounded-lg shadow-md p-4 mb-4 w-72"
      onClick={() => onSelect(name)}
    >
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-black-500">Quantity: {quantity}</p>
      <p className="text-black-500">Category: {category}</p>
    </li>
  );
}