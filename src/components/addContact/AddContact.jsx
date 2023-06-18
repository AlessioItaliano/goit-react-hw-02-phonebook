import PropTypes from 'prop-types';
import {
  AddContactForm,
  AddContactFormLabel,
  AddContactFormInput,
  AddContactFormBtn,
} from './AddContact.styled';

const AddContact = ({ handleSubmit, handleChangeName, handleChangeNumber }) => {
  return (
    <AddContactForm onSubmit={handleSubmit}>
      <AddContactFormLabel>Name</AddContactFormLabel>
      <AddContactFormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
      />
      <AddContactFormLabel>Number</AddContactFormLabel>
      <AddContactFormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
      />
      <AddContactFormBtn type="submit">Add contact</AddContactFormBtn>
    </AddContactForm>
  );
};

AddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNumber: PropTypes.func.isRequired,
};

export default AddContact;
