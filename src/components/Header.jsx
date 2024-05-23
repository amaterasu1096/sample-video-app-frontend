import { Link } from 'react-router-dom'

export default function ShareVideo() {
  return (
    <div>
      <Link to="/share">Share</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
