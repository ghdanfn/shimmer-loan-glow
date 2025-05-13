
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

document.documentElement.dir = 'rtl';
document.documentElement.lang = 'fa';

createRoot(document.getElementById("root")!).render(<App />);
