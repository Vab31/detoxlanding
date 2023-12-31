import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '', issue: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    axios.post('https://mindfullness-57i6.vercel.app/api/contacts', newContact)
      .then(response => {
        setContacts([...contacts, response.data]);
        setNewContact({ name: '', email: '', mobile: '', issue: '' });
      })
      .catch(error => console.error(error));
    navigate('/join');
  };

  return (
    <div className="mx-auto my-8 container">
      <h1 className="text-3xl font-bold mb-4">MINDFUL WELLNESS FREE BOOTCAMP FOR 1 MONTH</h1>

      <div className="mt-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
          className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
          className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={newContact.mobile}
          onChange={handleInputChange}
          className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="issue"
          placeholder="Issue"
          value={newContact.issue}
          onChange={handleInputChange}
          className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleAddContact}
        >
         Saved
        </button>
      </div>
    </div>
  );
}

export default Form;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Form() {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '', issue: '' });

//   useEffect(() => {
//     axios.get('/api/contacts')
//       .then(response => setContacts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleInputChange = (e) => {
//     setNewContact({ ...newContact, [e.target.name]: e.target.value });
//   };

//   const handleAddContact = () => {
//     axios.post('/api/contacts', newContact)
//       .then(response => {
//         setContacts([...contacts, response.data]);
//         setNewContact({ name: '', email: '', mobile: '', issue: '' });
//       })
//       .catch(error => console.error(error));
//   };

//   const handleUpdateContact = (id) => {
//     axios.put(`/api/contacts/${id}`, newContact)
//       .then(response => {
//         setContacts(contacts.map(contact => (contact._id === id ? response.data : contact)));
//         setNewContact({ name: '', email: '', mobile: '', issue: '' });
//       })
//       .catch(error => console.error(error));
//   };

//   const handleDeleteContact = (id) => {
//     axios.delete(`/api/contacts/${id}`)
//       .then(() => setContacts(contacts.filter(contact => contact._id !== id)))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <h1 className="text-3xl font-bold mb-4">MERN CRUD App</h1>
//       <ul className="mb-4">
//         {contacts.map(contact => (
//           <li key={contact._id} className="mb-2 p-2 border border-gray-300 rounded">
//             <span className="mr-2 inline-block">{contact.name}</span>
//             <span className="mr-2 inline-block">{contact.email}</span>
//             <span className="mr-2 inline-block">{contact.mobile}</span>
//             <span className="mr-2 inline-block">{contact.issue}</span>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={() => handleUpdateContact(contact._id)}
//             >
//               Update
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleDeleteContact(contact._id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div className="flex flex-wrap items-center">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newContact.name}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={newContact.email}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile"
//           value={newContact.mobile}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="issue"
//           placeholder="Issue"
//           value={newContact.issue}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddContact}
//         >
//           Add Contact
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Form;
