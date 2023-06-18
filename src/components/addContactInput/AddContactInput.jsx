// import { nanoid } from 'nanoid';
// import { Component } from 'react';

const AddContactInput = ({
  handleSubmit,
  loginInputId,
  handleChangeName,
  handleChangeNumber,
}) => {
  //   const { name } = options;
  //   loginInputId = nanoid();

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     // const { name, id } = this.state;
  //     const newContsctName = form.elements.name.value;
  //     //   this.setState({ inputValue: newContsctName });
  //     console.log(newContsctName);
  //     // console.log(this.loginInputId);
  //     form.reset();
  //   };

  //   handleChange = e => {
  //     this.setState({ login: e.target.value });
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginInputId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={loginInputId}
        onChange={handleChangeName}
      />
      <label htmlFor={loginInputId}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={loginInputId}
        onChange={handleChangeNumber}
      />
      <button type="submit">Add contacts</button>
    </form>
  );
};

export default AddContactInput;
