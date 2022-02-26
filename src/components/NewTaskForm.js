import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({text: "", category: "Code"});

  function handleFormChange(e) {
    //update form data state with text or category depending
    //console.log(e.target.name,e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text: formData.text, category: formData.category});
  }

  const categoryOptions = categories.map((cat) => {
    return <option key={cat}>{cat}</option>;
  })

  return (
    <form className="new-task-form" onSubmit={(e) => handleFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => handleFormChange(e)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleFormChange(e)}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
