"use client";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const cleanUpItemName = (name) => {
    return name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
  }

  const handleItemSelect = (itemName) => {
    const cleanedItemName = cleanUpItemName(itemName);
    setSelectedItemName(cleanedItemName);
  }

  const handleSubmit = (newItem) => {
  }

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1>Shopping List</h1>
        <NewItem onAddItem={handleSubmit} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}