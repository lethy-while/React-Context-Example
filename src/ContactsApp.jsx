import './App.css';
import React from 'react';
import { ContactsSection } from './components/ContactsSection';

const family = [
  {
    name: 'Finn the Human'
  },
  {
    name: 'Jake the Dog'
  }
];

const friends = [
  {
    name: 'Marceline'
  },
  {
    name: 'Princess Bubblegum'
  }
];

const App = () => {
  const theme = 'light';

  return (
    <div>
      <h1>Contacts</h1>
      <ContactsSection contacts={family} name="Family" theme={theme} />
      <ContactsSection contacts={friends} name="Friends" theme={theme} />
    </div>
  );
};

export default App;
