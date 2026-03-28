import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts, theme }) => {
  return contacts.map((contact) => (
    <ContactItem name={contact.name} key={contact.name} theme={theme} />
  ));
};
