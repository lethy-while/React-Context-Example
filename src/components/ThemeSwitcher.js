import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Theme is currently: {theme}
    </button>
  );
};