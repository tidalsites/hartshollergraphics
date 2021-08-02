import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
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
  );
};
