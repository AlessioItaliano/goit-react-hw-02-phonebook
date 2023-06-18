const ContactList = ({ filteredContacts }) => {
  //   console.log(contactsBook);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          {/* <button type="button" onClick={() => onClick(contact.id)}>
            Delete
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
