import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="https://mern-demo-server2.vercel.app/">
          <h1>NextGen GYM To-Do List</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar