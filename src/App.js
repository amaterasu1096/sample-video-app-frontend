import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ShareVideo from './pages/ShareVideo'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<ShareVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
