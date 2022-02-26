import React, {useState} from "react";

function CategoryFilter({categories, selected, handleButtonClick}) {
  function subButtonClick(e) {
    e.target.className="selected"
    handleButtonClick(e.target.textContent);
  }

  const categoryButtons = categories.map((cat) => {
    if (cat===selected) {
      return <button className="selected" onClick={()=>handleButtonClick(cat)} key={cat}>{cat}</button>
    }
    return <button onClick={()=>handleButtonClick(cat)} key={cat}>{cat}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
