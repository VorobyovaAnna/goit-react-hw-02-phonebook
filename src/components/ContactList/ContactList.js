import React from 'react';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} onDeleteContact={onDeleteContact} contacts={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
