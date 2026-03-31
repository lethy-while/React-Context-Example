import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts }) => {
  return contacts.map((contact) => (
    <ContactItem name={contact.name} key={contact.name} />
  ));
};
