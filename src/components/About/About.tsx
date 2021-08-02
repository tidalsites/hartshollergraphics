import { FC } from "react";
import "./About.scss";

export const About: FC = () => {
  return (
    <div className="About">
      <span className="About__header">
        A little bit about Harts Holler Graphics...
      </span>
      <span className="About__content">
        We are a small, hometown, home based business. We offer quality prints
        and decals for whatever your project needs. We are a Family and Friend
        oriented business. We know how stressful it can be to search for hours
        on end, Looking for those special gifts for those special people in your
        life. Let us help make it easy for you. Just give us a call and we will
        not only put a smile on your face, but we will put an awesome gift in
        your hands. We also offer Bulk pricing for ALL those special people in
        your life
      </span>
    </div>
  );
};
