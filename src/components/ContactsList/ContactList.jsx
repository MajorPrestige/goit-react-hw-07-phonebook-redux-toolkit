import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  deleteCheckedContacts,
} from 'redux/contacts/items/items-actions';
import {
  toggleCheckedContact,
  clearCheckedContacts,
} from 'redux/contacts/itemsChecked/itemsChecked-actions';
import s from './ContactList.module.css';
import { getFilteredContacts } from 'redux/contacts/items/items-selectors';

const ContactLists = () => {
  const contacts = useSelector(getFilteredContacts);
  const contactsToDelete = useSelector(({ contacts }) => contacts.itemsChecked);

  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = e => {
    const contactId = e.target.name;
    dispatch(toggleCheckedContact(contactId));
  };

  const handleDeleteAllClick = () => {
    const contactsAfterDeletion = contacts.filter(
      ({ id }) => !contactsToDelete.includes(id)
    );

    dispatch(deleteCheckedContacts(contactsAfterDeletion));
    dispatch(clearCheckedContacts([]));
  };

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
      {contacts.length !== 0 && (
        <button
          className={s.btn}
          onClick={handleDeleteAllClick}
          type="button"
          disabled={contactsToDelete.length === 0 ? true : false}
        >
          Delete checked
        </button>
      )}
    </ul>
  );
};

export default ContactLists;
