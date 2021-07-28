import { FC } from "react";
import "./MaterialListItem.scss";

interface IMaterialListItemProps {
  header: string;
  sublimation: boolean;
  heatTransfer: boolean;
  ironOn: boolean;
}

export const MaterialListItem: FC<IMaterialListItemProps> = ({
  header,
  sublimation,
  heatTransfer,
  ironOn,
}) => {
  return (
    <div className="Home__materials__list__item Home__section__list__item HomeMaterialListItem">
      <span className="Home__materials__list__item__header">{header}</span>
      <div className="Home__section__list__item__services Home__materials__list__item__services">
        <div className="Home__section__list__item__services__group Home__materials__list__item__services__group">
          <span>Sublimation</span>
          <i className={sublimation ? "fa fa-check" : "fa fa-times"}></i>
        </div>
        <div className="Home__section__list__item__services__group Home__materials__list__item__services__group">
          <span>Heat Transfer</span>
          <i className={heatTransfer ? "fa fa-check" : "fa fa-times"}></i>
        </div>
        <div className="Home__section__list__item__services__group Home__materials__list__item__services__group">
          <span>Iron-on</span>
          <i className={ironOn ? "fa fa-check" : "fa fa-times"}></i>
        </div>
      </div>
    </div>
  );
};
