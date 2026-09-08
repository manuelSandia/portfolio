import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';
import NotFound from './404';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}