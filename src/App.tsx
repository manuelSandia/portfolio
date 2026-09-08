import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';
import NotFound from './404';

export default function App() {
  return (
    // Usa import.meta.env.BASE_URL para sincronizar con la propiedad base de vite.config.ts
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}