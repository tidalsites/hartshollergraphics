import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";

export const Navbar: FC = () => {
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__inner">
          <div className="Navbar__inner__logo">
            <img src={logo} alt="Harts Holler Graphics, LLC" />
          </div>
          <div className="Navbar__inner__links">
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Techniques</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li> */}
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Techniques">Techniques</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="NavbarMobile">
        <div className="NavbarMobile__inner">
          <div className="NavbarMobile__inner__logo">
            <img src={logo} alt="Harts Holler Graphics, LLC" />
          </div>
          <div className="NavbarMobile__inner__dropdownMenu">
            <i
              onClick={() => setDropdownActivated(!dropdownActivated)}
              className="fa fa-bars"
            ></i>
          </div>
          {dropdownActivated ? (
            <div className="NavbarMobile__inner__links">
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/info">Info</a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};
