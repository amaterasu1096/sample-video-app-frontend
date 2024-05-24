import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import CableApp from './cable';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ShareVideo from './pages/ShareVideo'
import Header from './components/Header'

function App() {
  const userEmail = localStorage.getItem('email')

  useEffect(() => {
    const subscription = CableApp.cable.subscriptions.create(
      { channel: 'VideoNotificationChannel' },
      {
        received: (data) => {
          const { title, email } = data
          if (userEmail === email) return

          const NewVideo = () => (
            <div>
              <h2> {title} </h2>
              <p>Shared by: {email}</p>
            </div>
          )
          toast(<NewVideo />)
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<ShareVideo />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
