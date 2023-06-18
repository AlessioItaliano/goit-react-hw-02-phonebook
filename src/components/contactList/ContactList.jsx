const ContactList = ({ contactsBook }) => {
  //   console.log(contactsBook);
  return (
    <ul>
      {contactsBook.map(contact => (
        <li key={contact.name}>
          {contact.name}:{contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
