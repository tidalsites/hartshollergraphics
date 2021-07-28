import { FC } from "react";
import "./Home.scss";
import tshirts from "../../assets/tshirts.png";
import { MaterialListItem } from "./MaterialListItem/MaterialListItem";

export const Home: FC = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <span>Turn your favorite personal items into works of art!</span>
      </div>
      <div className="Home__services Home__section">
        <span className="Home__services__header Home__section__header">
          What do we do?
        </span>
        <span className="Home__services__subheader Home__section__subheader">
          Harts Holler Graphics provides the following services
        </span>
        <div className="Home__services__list Home__section__list">
          <div className="Home__services__list__item Home__section__list__item recommended">
            <i className="fas fa-angle-double-right color-primary-blue"></i>
            <span>Sublimation</span>
          </div>
          <div className="Home__services__list__item Home__section__list__item">
            <i className="fas fa-angle-double-right color-primary-blue"></i>
            <span>Heat Transfer</span>
          </div>
          <div className="Home__services__list__item Home__section__list__item">
            <i className="fas fa-angle-double-right color-primary-blue"></i>
            <span>Iron-on Transfer</span>
          </div>
        </div>
      </div>
      <div className="Home__materials Home__section">
        <span className="Home__materials__header Home__section__header">
          What materials can we use?
        </span>
        <span className="Home__services__subheader Home__section__subheader">
          Here is a list of items we can modify
        </span>
        <div className="Home__materials__list Home__section__list">
          <MaterialListItem
            header="T-shirts"
            sublimation={true}
            heatTransfer={true}
            ironOn={true}
          />
          <MaterialListItem
            header="Pants"
            sublimation={true}
            heatTransfer={true}
            ironOn={true}
          />
          <MaterialListItem
            header="Cups"
            sublimation={true}
            heatTransfer={true}
            ironOn={false}
          />
          <MaterialListItem
            header="Shoes"
            sublimation={true}
            heatTransfer={true}
            ironOn={true}
          />
          <MaterialListItem
            header="Wood"
            sublimation={true}
            heatTransfer={false}
            ironOn={false}
          />
        </div>
      </div>
    </div>
  );
};
