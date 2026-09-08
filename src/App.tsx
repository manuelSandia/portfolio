import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';
import NotFound from './404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal para el portafolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Ruta comodín (*) para capturar cualquier URL inexistente y mostrar la 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}