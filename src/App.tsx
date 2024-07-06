import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import ComicPage from './pages/comic';

const App: React.FC = () => (
  <Router basename={""}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/comic" element={<ComicPage />} />
    </Routes>
  </Router>
);

export default App;