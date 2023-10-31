"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async (ingredient) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (response.ok) {
          const data = await response.json();
          setMeals(data.meals);
        } else {
          console.error("Failed to fetch meal ideas");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}