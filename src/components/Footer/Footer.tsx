import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__inner">
        <ul>
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
      <div className="Footer__copyright">
        <span>&copy; 2021 Harts Holler Graphics, LLC</span>
      </div>
    </div>
  );
};
