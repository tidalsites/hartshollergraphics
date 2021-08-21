import { FC } from "react";
import "./Home.scss";
import tshirts from "../../assets/shirts.jpg";
import hats from "../../assets/hats.jpg";
import cups from "../../assets/cups.jpg";
import Tumbler from "../../assets/tumbler.jpg";
import colorChart from "../../assets/color-chart.jpg";
import stickers from "../../assets/stickers.jpg";
import screenPrinting from "../../assets/screen-printing.jpg";

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
          <div className="Home__techniques__list__item Home__section__list__item">
            <div className="Home__techniques__list__item__header">
              <i className="fas fa-angle-double-right color-primary-blue"></i>
              <span>Screen Printing</span>
            </div>
            <span className="Home__techniques__list__item__content">
              Great option for posters and framed designs
            </span>
          </div>
        </div>
        <div className="Home__techniques__colors">
          <span>Take a peek at the color options for Heat Transfer Vinyl</span>
          <div className="Home__techniques__colors__bullets">
            <span>&bull;</span>
            <span>&bull;</span>
            <span>&bull;</span>
          </div>
          <img src={colorChart} alt="Color chart" />
        </div>
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
              <img src={cups} alt="Collection of hats on a rack outside" />
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
              <img
                src={stickers}
                alt="Multiple decorative stickers on windows"
              />
            </div>
          </div>
          <div className="Home__services__list__item Home__section__list__item HomeMaterialListItem">
            <span className="Home__services__list__item__header">Screens</span>
            <div className="Home__services__list__item__content">
              <div className="Home__services__list__item__content__prices">
                <span>Prints starting at $5.00</span>
              </div>
              <img
                src={screenPrinting}
                alt="Picture frame with custom deer logo and text saying 'CREATE YOUR VISION CUSTOMIZE YOUR WORLD'"
              />
            </div>
          </div>
        </div>
        <div className="Home__services__showcase">
          <div className="Home__services__showcase__img">
            <span>Sublimation</span>
            <img src={Tumbler} alt="Tumbler with cammo deer design" />
          </div>
          <div className="Home__services__showcase__content">
            <p>
              Sublimation is perfect for polyester and polyester-blend clothing.
              Shirts, pants, hoodies, socks. But it is also great for
              hard-surface items such as tumblers and coffee mugs. Throw your
              own design on your favorite household items. If you're wondering
              whether or not you can throw a design on something in your house,
              just give us a call or send us an email!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
