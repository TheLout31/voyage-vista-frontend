import "./Navbar.css";
import logo from "../../Images/travel-bag.png"; // Adjust the path as per your folder structure

export const Navbar = () => {
  return (
    <header>
      <div className="user-ac">
        <div className="rightside">
          <button className="user-ac-btn help-btn">
            <p className="text">Help</p>
          </button>
          <span>|</span>
          <button className="user-ac-btn join-btn">
            <p className="text">Join Us</p>
          </button>
          <span>|</span>
          <button className="user-ac-btn sign-btn">
            <p className="text">Sign In</p>
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
          <li className="text">New Releases</li>
          <li className="text">Men</li>
          <li className="text">Women</li>
          <li className="text">Kids</li>
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
