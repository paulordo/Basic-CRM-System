import { createRoot } from 'react-dom/client';
import App from './app'
import AuthProvider from './app/context/auth';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <AuthProvider>
        <App/>
        </AuthProvider>
    );
}