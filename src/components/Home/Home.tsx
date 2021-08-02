import { FC } from "react";
import "./Home.scss";
import tshirts from "../../assets/shirts.jpg";
import hats from "../../assets/hats.jpg";
import cups from "../../assets/cups.jpg";

export const Home: FC = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <div className="Home__hero__img"></div>
        <span>Let us help bring your Imagination to Reality.</span>
      </div>
      <div className="Home__About Home__section" id="About">
        <span className="Home__About__header Home__section__header">
          About us
        </span>
        <span className="Home__About__subheader Home__section__subheader">
          We are a small, hometown, home based business. We offer quality prints
          and decals for whatever your project needs. We are a Family and Friend
          oriented business. We know how stressful it can be to search for hours
          on end, Looking for those special gifts for those special people in
          your life. Let us help make it easy for you. Just give us a call and
          we will not only put a smile on your face, but we will put an awesome
          gift in your hands. We also offer Bulk pricing for ALL those special
          people in your life
        </span>
      </div>
      <div className="Home__techniques Home__section" id="Techniques">
        <span className="Home__techniques__header Home__section__header">
          What do we do?
        </span>
        <span className="Home__techniques__subheader Home__section__subheader">
          We offer the following techniques for our products
        </span>
        <div className="Home__techniques__list Home__section__list">
          <div className="Home__techniques__list__item Home__section__list__item recommended">
            <div className="Home__techniques__list__item__header">
              <i className="fas fa-angle-double-right color-primary-blue"></i>
              <span>Sublimation</span>
            </div>
            <span className="Home__techniques__list__item__content">
              Specifically designed for use with polyester materials to dye the
              product
            </span>
          </div>
          <div className="Home__techniques__list__item Home__section__list__item">
            <div className="Home__techniques__list__item__header">
              <i className="fas fa-angle-double-right color-primary-blue"></i>
              <span>Heat Transfer Vinyl (HTV)</span>
            </div>
            <span className="Home__techniques__list__item__content">
              Best for T-shirts and Hats
            </span>
          </div>
          <div className="Home__techniques__list__item Home__section__list__item">
            <div className="Home__techniques__list__item__header">
              <i className="fas fa-angle-double-right color-primary-blue"></i>
              <span>Vinyl</span>
            </div>
            <span className="Home__techniques__list__item__content">
              Can be either removable or permanent. Great for decals and
              stickers
            </span>
          </div>
          <div className="Home__techniques__list__item Home__section__list__item">
            <div className="Home__techniques__list__item__header">
              <i className="fas fa-angle-double-right color-primary-blue"></i>
              <span>Iron-on</span>
            </div>
            <span className="Home__techniques__list__item__content">
              Easy to apply to any fabric project needs
            </span>
          </div>
        </div>
        {/* <button className="Home__section__cta Home__techniques__cta">
          Learn more
        </button> */}
      </div>
      <div className="Home__services Home__section" id="Services">
        <span className="Home__services__header Home__section__header">
          Services
        </span>
        <span className="Home__services__subheader Home__section__subheader">
          Hart’s Holler Graphics provides quality services, Including but not
          limited to the following
        </span>
        <div className="Home__services__list Home__section__list">
          <div className="Home__services__list__item Home__section__list__item HomeMaterialListItem">
            <span className="Home__services__list__item__header">
              Custom T-shirts
            </span>
            <div className="Home__services__list__item__content">
              <div className="Home__services__list__item__content__prices">
                <span>T-shirts starting at $16.50</span>
              </div>

              <img src={tshirts} alt="T-shirts" />
            </div>
          </div>
          <div className="Home__services__list__item Home__section__list__item HomeMaterialListItem">
            <span className="Home__services__list__item__header">Hats</span>
            <div className="Home__services__list__item__content">
              <div className="Home__services__list__item__content__prices">
                <span>Hats starting at $12.00</span>
              </div>

              <img src={hats} alt="Hats" />
            </div>
          </div>
          <div className="Home__services__list__item Home__section__list__item HomeMaterialListItem">
            <span className="Home__services__list__item__header">
              Cups, Tumblers and Koozies
            </span>
            <div className="Home__services__list__item__content">
              <div className="Home__services__list__item__content__prices">
                <span>Cups $10.00 Sublimation or Vinyl decals</span>
                <span>Tumblers $12.00 Sublimation or Vinyl decals</span>
              </div>
              <img src={cups} alt="Hats" />
            </div>
          </div>
          <div className="Home__services__list__item Home__section__list__item HomeMaterialListItem">
            <span className="Home__services__list__item__header">
              Decals & Stickers
            </span>
            <div className="Home__services__list__item__content">
              <div className="Home__services__list__item__content__prices">
                <span>Decals and Stickers starting at $5.00</span>
              </div>
              <img src={hats} alt="Hats" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Home__section Home__pricing">
        <div className="Home__section__header Home__pricing__header">
          Pricing
        </div>
        <div className="Home__section__list Home__pricing__list">
          <div className="Home__section__list__item Home__pricing__list__item">
            T-shirts starting at $16.50
          </div>
          <div className="Home__section__list__item Home__pricing__list__item">
            Hats starting at $12.00
          </div>
          <div className="Home__section__list__item Home__pricing__list__item">
            Cups $10.00 Sublimation or Vinyl decals
          </div>
          <div className="Home__section__list__item Home__pricing__list__item">
            Tumblers $12.00 Sublimation or Vinyl decals
          </div>
          <div className="Home__section__list__item Home__pricing__list__item">
            Decals and Stickers starting at $5.00
          </div>
        </div>
      </div> */}
    </div>
  );
};
