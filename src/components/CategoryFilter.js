import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {

  return (
    <div className="categories">
      <h5>Category Filter</h5>
      <div>
        <button
          key="All"
          className={selectedCategory === "All" ? "selected" : ""}
          onClick={() => onCategoryChange("All")}
        >
          ALL
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;