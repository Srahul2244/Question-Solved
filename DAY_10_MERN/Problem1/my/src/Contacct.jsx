import React, { useState } from 'react';

const ContactList = ({ contacts }) => {
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    name === 'newContactName' ? setNewContactName(value) : setNewContactEmail(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newContactName.trim() === '' || newContactEmail.trim() === '') {
      alert('Please provide both name and email.');
      return;
    }

    const newContact = {
      id: Date.now(), // Generate a unique id for the new contact
      name: newContactName,
      email: newContactEmail
    };

    setNewContactName('');
    setNewContactEmail('');

    // Use the functional form of setState to update contacts array
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const [contacts, setContacts] = useState(contacts);

  return (
    <div>
      <h2>Contact List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="newContactName"
            value={newContactName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="newContactEmail"
            value={newContactEmail}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
