import { createRoot } from 'react-dom/client';

import App from './containers/App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);