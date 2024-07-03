import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    // 2. useNavigate(): locate or change the location of user
    // ex. if user login and needs to redirect
    // or user got access-denied from a page
    // or remove user from pages programmatically
    // = w/ no waiting for click
    navigate("/about");
  };

  return (
    <h1>
      <ul>
        <li>
          {/* Ways to locate to other pages */}
          {/* 1. Link: needs to click */}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </h1>
  );
}

export default Header;
