import { createRoot } from 'react-dom/client';
import App from './ContactsApp';
import { ThemeArea } from './context/ThemeContext.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<ThemeArea initialTheme="light">
		<App />
	</ThemeArea>
);