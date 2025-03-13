import { Link } from "react-router-dom";

export default function Header({ children }) {
  return (
    <>
      <div id="main-header-loading"></div>
      <header id="main-header">
        <Link id="header-title" to="/">
          <h1>React Events</h1>
        </Link>
        <nav>{children}</nav>
      </header>
    </>
  );
}
