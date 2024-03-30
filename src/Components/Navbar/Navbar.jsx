import "./Navbar.css";
import logo from "../../Images/travel-bag.png"; // Adjust the path as per your folder structure
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleJoinUsButton = () => {
    navigate("/api/auth/");
  };

  const handleRegisterButton = () => {
    navigate("/api/auth/register");
  };

  return (
    <header>
      <div className="user-ac">
        <div className="rightside">
          <button className="user-ac-btn help-btn">
            <p className="text">Help</p>
          </button>
          <span>|</span>
          <button className="user-ac-btn join-btn" onClick={handleJoinUsButton}>
            <p className="text">Log In</p>
          </button>
          <span>|</span>
          <button className="user-ac-btn sign-btn" onClick={handleRegisterButton}>
            <p className="text">Sign Up</p>
          </button>
        </div>
      </div>
      <nav className="navbar">
        <div className="left-nav">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo img" />
            </a>
          </div>
        </div>

        <ul className="nav-center ">
          <li className="bellota-text-bold">New Hotels</li>
          <li className="bellota-text-bold">Camp</li>
          <li className="bellota-text-bold">Resort</li>
          <li className="bellota-text-bold">Room</li>
        </ul>
        <div className="right-nav">
          <div className="search-navbar ">
            <input type="text" placeholder="Search" />
            <button className="btn-icon">
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div>
            <button className="btn-icon">
              <i className="bi bi-heart"></i>
            </button>
            <button className="btn-icon">
              <i className="bi bi-list"></i>
            </button>
            {/* <button className="btn-icon burger">
            <i className="bi bi-list"></i>
          </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
