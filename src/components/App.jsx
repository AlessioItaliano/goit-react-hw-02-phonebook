import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContact from 'components/addContact';
import Section from 'components/section';
import ContactList from 'components/contactList';
import ContactsFilter from './contactsFilter/ContactsFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChangeName = e => {
    const value = e.target.value;
    this.setState({
      name: value,
    });
  };

  handleChangeNumber = e => {
    const value = e.target.value;
    this.setState({
      number: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const form = e.currentTarget;

    if (name) {
      const newContact = { id: nanoid(), name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
    form.reset();
  };

  filterSerchContacts = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value.toLowerCase() });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <AddContact
            handleSubmit={this.handleSubmit}
            handleChangeName={this.handleChangeName}
            handleChangeNumber={this.handleChangeNumber}
          ></AddContact>
        </Section>
        <Section title="Contacts">
          <ContactsFilter
            filterSerchContacts={this.filterSerchContacts}
          ></ContactsFilter>
          <ContactList filteredContacts={filteredContacts}></ContactList>
        </Section>
      </>
    );
  }
}

export default App;
