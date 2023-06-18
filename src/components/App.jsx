import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContact from 'components/addContact';
import ContactList from 'components/contactList';
import ContactsFilter from './contactsFilter/ContactsFilter';

import { Title } from './App.styled';

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
    const newContact = { id: nanoid(), name: name, number: number };
    const form = e.currentTarget;

    this.state.contacts.find(contact => contact.name === name)
      ? window.alert(`${name} is alredy in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        });

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

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <AddContact
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeNumber={this.handleChangeNumber}
        ></AddContact>
        <Title>Contacts</Title>
        <ContactsFilter
          filterSerchContacts={this.filterSerchContacts}
        ></ContactsFilter>
        <ContactList
          filteredContacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </>
    );
  }
}

export default App;
