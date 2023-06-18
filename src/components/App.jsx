import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactInput from 'components/addContactInput';
import Section from 'components/section';
import ContactList from 'components/contactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  // handleChange = e => {
  //   this.setState({
  //     name: e.target.value,
  //     number: e.target.value
  //   });
  //   console.log(this.state);
  // };

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
      const newContact = { name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
    // console.log(this.state);
    form.reset();
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContactInput
            loginInputId={this.loginInputId}
            handleSubmit={this.handleSubmit}
            handleChangeName={this.handleChangeName}
            handleChangeNumber={this.handleChangeNumber}
          ></AddContactInput>
        </Section>
        <Section title="Contacts">
          <ContactList contactsBook={this.state.contacts}></ContactList>
        </Section>
      </>
    );
  }
}

export default App;
