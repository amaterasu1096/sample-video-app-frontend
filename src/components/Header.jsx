import { Link } from 'react-router-dom'
import { authentication } from '../services/api';
import { toast } from 'react-toastify'

export default function Header() {
  const isAuthenticated = !!localStorage.getItem('token');
  const userEmail = localStorage.getItem('email')

  const handleSubmit = async(e) => {
    const email =  e.target.elements.email.value
    const password =  e.target.elements.password.value
    e.preventDefault();

    try {
      const data = await authentication(email, password);
      localStorage.setItem('email', data.data.email)
      localStorage.setItem('token', data.data.token)
      toast(`Welcome ${data.data.email}`)

      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch (e) {
      toast(e.response.data.error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    toast('Logged out')

    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <header>
      <Link to="/">
        <h1>Funny Movies</h1>
      </Link>
      {
        isAuthenticated ? 
        <div>
          <span>Welcome { userEmail }</span>
          <Link to="/share"><button>Share a movie</button></Link>
          <button onClick={handleLogout}>Logout</button>
        </div> :
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" name='email'/>
          <input type="password" placeholder="password" name='password' />
          <button type="submit">Login / Register</button>
        </form> 
      }
    </header>
  );
}
