import React from "react";
import "./App.css";
import ContactList from "./Contacct";

function App() {
  const contactsData = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
  ];
  return (
    <div className="App">
      <ContactList contacts={contactsData} />
    </div>
  );
}

export default App;
