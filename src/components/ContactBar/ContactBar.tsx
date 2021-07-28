import { FC } from "react";
import "./ContactBar.scss";

export const ContactBar: FC = () => {
  return (
    <div className="ContactBar">
      <div className="ContactBar__item ContactBar__phone">
        <i className="fa fa-phone"></i>
        <span>(870) 405-3822</span>
      </div>
      <div className="ContactBar__item ContactBar__email">
        <i className="fa fa-envelope"></i>
        <span>blhart89@outlook.com</span>
      </div>
    </div>
  );
};
