import { Outlet, Link } from "react-router-dom";
import RadioButton from "../components/RadioButton";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <RadioButton as={Link} to="/" style={{
                backgroundColor: '#4caf50',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                }}
            >Home</RadioButton>
            {/* <Link to="/about">About</Link> */}
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Project</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>


      <Outlet />
    </>
  )
};

export default Layout;