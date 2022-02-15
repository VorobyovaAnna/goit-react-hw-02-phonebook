import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts: { id, name, number }, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
