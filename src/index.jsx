import { createRoot } from 'react-dom/client';
import App from './ContactsApp';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);