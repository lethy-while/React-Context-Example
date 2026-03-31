import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';

export const ContactItem = ({ name }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      {name}
    </div>
  );
};
