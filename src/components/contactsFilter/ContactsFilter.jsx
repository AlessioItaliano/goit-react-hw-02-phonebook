const ContactsFilter = ({ filterSerchContacts }) => {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" onChange={filterSerchContacts} />
    </label>
  );
};

export default ContactsFilter;
