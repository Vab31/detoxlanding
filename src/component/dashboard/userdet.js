// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Userdet() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '', issue: '' });

  useEffect(() => {
    axios.get('https://mindfullness-57i6.vercel.app/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdateContact = (id) => {
    axios.put(`https://mindfullness-57i6.vercel.app/api/contacts/${id}`, newContact)
      .then(response => {
        setContacts(contacts.map(contact => (contact._id === id ? response.data : contact)));
        setNewContact({ name: '', email: '', mobile: '', issue: '' });
      })
      .catch(error => console.error(error));
  };

  const handleDeleteContact = (id) => {
    axios.delete(`https://mindfullness-57i6.vercel.app/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
     <h1 className="text-2xl font-bold mb-6 mt-4">Details</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id} className="mb-4 p-4 border border-gray-300 rounded flex items-center justify-between">
            <div>
              <span className="mr-2 font-bold">{contact.name}</span>
              <span className="mr-2 text-gray-600">{contact.email}</span>
              <span className="mr-2 text-gray-600">{contact.mobile}</span>
              <span className="mr-2 text-gray-600">{contact.issue}</span>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleUpdateContact(contact._id)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteContact(contact._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
