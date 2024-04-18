import React, { useState, useRef } from "react";
import { useTheme } from "./ThemeContext";

const UserForm = () => {
  const { theme } = useTheme();
  const [name, setName] = useState("");

  // Ref for uncontrolled input
  const emailRef = useRef();

  // Validation state
  const [nameError, setNameError] = useState("");

  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError("Name must be at least 3 characters long.");
    } else {
      setNameError("");
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form
      style={{ background: theme.background, color: theme.color }}
      onSubmit={handleSubmit}
    >
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
