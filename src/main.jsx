import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<App />}
        />
      </Routes>
  </BrowserRouter>
);

