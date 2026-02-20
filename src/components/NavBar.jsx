import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2">
      <Link to="/">Today</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/golf">Golf</Link>
      <Link to="/stay">Stay</Link>
    </nav>
  )
}

