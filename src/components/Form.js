import React, { useState } from "react";

function Form() {
  // Manage State for our inputs
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  //console.log(formData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <form>
      <input
        id="firstName"
        type="text"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        id="lastName"
        type="text"
        onChange={handleChange}
        value={formData.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
