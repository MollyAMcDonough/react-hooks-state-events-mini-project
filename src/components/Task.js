import React from "react";

function Task({category, text, onDelete}) {
  /*
  function subCheck(delCat, delText) {
    console.log(delCat,delText)
    //onDelete("DELETE",e.target.parentElement)
  }
  */
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(text)}>X</button>
    </div>
  );
}

export default Task;
