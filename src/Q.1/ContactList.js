import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {contact.name}
            </div>
            <div>
              <strong>Email:</strong> {contact.email}
            </div>
            <div>
              <strong>Phone Number:</strong> {contact.phone}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
