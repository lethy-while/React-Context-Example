import { ContactsList } from './ContactsList';
import { ThemeSwitcher } from './ThemeSwitcher.js';

export const ContactsSection = ({ contacts, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ThemeSwitcher />
      <ContactsList contacts={contacts} />
    </div>
  );
};

