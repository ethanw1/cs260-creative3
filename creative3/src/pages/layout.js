import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pass">Moving Pics Pass</Link>
        </li>
        <li>
          <Link to="/theaters">Big Screens</Link>
        </li>
        <li>
          <Link to="/featured">Featured Moving Pic</Link>
        </li>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;