import "./App.css";

import "./bootstrap.min.css";
import "./reset.css";
import "./responsive.css";
import "./slick.css";
import "./style.css";
import { useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";

// import logo from "./logo.svg";
import { Link } from "react-router-dom";



const sliderImages = [
  {
     url: "images/tocabe_hand_logo.png",
  },
  {
     url: "images/tocabe_hand_logo.png",
  },
  {
     url: "images/tocabe_hand_logo.png",
  },
];

function Home() {

  return (
    <header id="header">
      <div className="header__inner">
        <div className="container">
          <div className="header__row">
            <div className="main__logo">
              <Link to="/">
                <img src="images/tocabe_logo.svg" alt=""></img>
              </Link>
            </div>

            <div className="header__center">
              <ul className="header__menu">
                <li>
                  <Link className="gradient-text" to="/about">
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link className="gradient-text" to="/contact">
                    OUR STORY
                  </Link>
                </li>
                <li>
                  <Link className="gradient-text" to="/about">
                    PARTNERS
                  </Link>
                </li>
                <li>
                  <Link className="gradient-text" to="/about/contact_us">
                    About/Contact_us
                  </Link>
                </li>
                <li>
                  <Link className="gradient-text" to="/about/form">
                    About/Form
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__righ">
              <div className="h-search-btn">
                <Link className="gradient-text" to="/about">
                  <img src="images/search_icon.svg" alt=""></img>
                </Link>
              </div>
              <div className="h-shopping-btn">
                <Link className="gradient-text" to="/about">
                  <img src="images/shopping_bag_icon.svg" alt=""></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const HomeContent = () => {

  const [imageNum, setImageNum] = useState(1);


  return (
    <>
      <Home />
      <div id="container">
        {/* section 1 */}
        <section className="hm-banner-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner-inner-contain">
                  <h1>Eat Healthy, Wholesome & Nutritious</h1>
                  <p>
                    Accessibility to high quality, healthy native and indigenous
                    ingredients is extremely limited based on location. Tocabe’s
                    Online Pantry is simplifying the supply chain and making
                    regional shopping local by giving you access to native and
                    indigenous ingredients with just the{" "}
                    <strong>click of a button</strong>.
                  </p>
                  <div className="banner-btn">
                    <a className="ui-btn" href="/contact">
                      EXPLORE MARKET
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section class="hm-ingredient-section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section__title">
                  <h2>
                    <span>Shop our ingredients,</span> then cook & create
                    amazing healthly dishes
                  </h2>
                  <p>
                    Accessibility to high quality, healthy native and indigenous
                    ingredients is extremely limited based on location. Tocabe’s
                    Online Pantry is simplifying the supply chain and making
                    regional shopping local by giving you access to native and
                    indigenous ingredients with just the{" "}
                    <strong>click of a button.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="ingredient__box">
                  <div class="ingredient__img">
                    <div class="ingredient__img--inner">
                      <img src="images/essential-pantry.png" alt="" />
                    </div>
                  </div>
                  <div class="ingredient__col">
                    <div class="ingredient__contain">
                      <h3>Essential Pantry Items</h3>
                      <p>
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.
                        Fabio me exige, sin tapujos, que añada cerveza al
                        whisky. Jovencillo emponzoñado de whisky, ¡qué figurota
                        exhibes! La cigüeña tocaba cada vez mejor el saxofón y
                        el búho pedía kiwi y queso. El jefe buscó el éxtasis en
                        un imprevisto baño de whisky y gozó como un duque.
                        Exhíbanse politiquillos zafios, con orejas kilométricas
                        y uñas de.
                      </p>
                      <div class="shop-btn">
                        <a href="#">
                          <img src="images/icon_shop_basket.svg" alt="" />
                          <span>Shop Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ingredient__box">
                  <div class="ingredient__img">
                    <div class="ingredient__img--inner">
                      <img src="images/butcher-shop.png" alt="" />
                    </div>
                  </div>
                  <div class="ingredient__col">
                    <div class="ingredient__contain">
                      <h3>Butcher Shop</h3>
                      <p>
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.
                        Fabio me exige, sin tapujos, que añada cerveza al
                        whisky. Jovencillo emponzoñado de whisky, ¡qué figurota
                        exhibes! La cigüeña tocaba cada vez mejor el saxofón y
                        el búho pedía kiwi y queso. El jefe buscó el éxtasis en
                        un imprevisto baño de whisky y gozó como un duque.
                        Exhíbanse politiquillos zafios, con orejas kilométricas
                        y uñas de.
                      </p>
                      <div class="shop-btn">
                        <a href="#">
                          <img src="images/icon_shop_basket.svg" alt="" />
                          <span>Shop Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ingredient__box">
                  <div class="ingredient__img">
                    <div class="ingredient__img--inner">
                      <img src="images/prepared-meals.png" alt="" />
                    </div>
                  </div>
                  <div class="ingredient__col">
                    <div class="ingredient__contain">
                      <h3>
                        Prepared Meals <span class="icon-coming-soon"></span>
                      </h3>
                      <p>
                        Quiere la boca exhausta vid, kiwi, piña y fugaz jamón.
                        Fabio me exige, sin tapujos, que añada cerveza al
                        whisky. Jovencillo emponzoñado de whisky, ¡qué figurota
                        exhibes! La cigüeña tocaba cada vez mejor el saxofón y
                        el búho pedía kiwi y queso. El jefe buscó el éxtasis en
                        un imprevisto baño de whisky y gozó como un duque.
                        Exhíbanse politiquillos zafios, con orejas kilométricas
                        y uñas de.
                      </p>
                      <div class="shop-btn">
                        <a href="#">
                          <img src="images/icon_shop_basket.svg" alt="" />
                          <span>Coming Soon</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="hm-high-quality-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6 high-quality-left">
                <h2>
                  Always High Quality Ingredients, Localy Sourced and Fresh
                </h2>
                <div class="high-quality-left-box">
                  <div class="high-quality-left-col">
                    <img src="images/icon_non_gmo.svg" alt="" />
                    <span>Non-GMO</span>
                  </div>
                  <div class="high-quality-left-col">
                    <img src="images/icon_natural.svg" alt="" />
                    <span>Natural</span>
                  </div>
                  <div class="high-quality-left-col">
                    <img src="images/icon_indigenous.svg" alt="" />
                    <span>Indigenous</span>
                  </div>
                  <div class="high-quality-left-col">
                    <img src="images/icon_organic.png" alt="" />
                    <span>Organic</span>
                  </div>
                  <div class="high-quality-left-col">
                    <img src="images/icon_gluten_free.svg" alt="" />
                    <span>Gluten free</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 high-quality-right">
                <div class="high-quality-right-box">
                  <h3>
                    We make Regional, Local when ever possible{" "}
                    <img src="images/icon_star.svg" alt="" />{" "}
                  </h3>
                  <a href="#">LEARN MORE</a>
                </div>
                <div class="high-quality-right-img">
                  <img src="images/made_produced_logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="hm-pantry-section">
          <div class="pantry-section--inner">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="pantry-section--title">
                    <h2>Indigenous Pantry</h2>
                    <p>Native and Indigenous Grown Food to your door step</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div class="pantry-section--box">
                    <div class="pantry-section--col">
                      <div class="pantry-section--contain">
                        <h3>Butcher Shop</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                        <div class="shop-btn">
                          <a href="#">
                            <img
                              src="images/icon_shop_basket_white.svg"
                              alt=""
                            />
                            <span>Shop Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="pantry-section--col">
                      <div class="pantry-section--contain">
                        <h3>Butcher Shop</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                        <div class="shop-btn">
                          <a href="#">
                            <img
                              src="images/icon_shop_basket_white.svg"
                              alt=""
                            />
                            <span>Shop Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="pantry-section--col">
                      <div class="pantry-section--contain">
                        <h3>Butcher Shop</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                        <div class="shop-btn">
                          <a href="#">
                            <img
                              src="images/icon_shop_basket_white.svg"
                              alt=""
                            />
                            <span>Shop Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 4 */}
        <section class="hm-testimonial-section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="slider testimonial-carousel">
                  <div>
                    <div class="testimonial-content">
                      <div class="testimonial-img">
                        <img src="images/tocabe_hand_logo.png" alt="" />
                      </div>
                      <div class="testimonial-info">
                        <p>
                          Accessibility to high quality, healthy native and
                          indigenous ingredients is extremely limited based on
                          location. Tocabe’s Online Pantry is simplifying the
                          supply chain and making regional shopping local by
                          giving you access to native and indigenous ingredients
                          with just the click of a button.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="testimonial-content">
                      <div class="testimonial-img">
                        <img src="images/tocabe_hand_logo.png" alt="" />
                      </div>
                      <div class="testimonial-info">
                        <p>
                          Accessibility to high quality, healthy native and
                          indigenous ingredients is extremely limited based on
                          location. Tocabe’s Online Pantry is simplifying the
                          supply chain and making regional shopping local by
                          giving you access to native and indigenous ingredients
                          with just the click of a button.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="testimonial-content">
                      <div class="testimonial-img">
                        <img src="images/tocabe_hand_logo.png" alt="" />
                      </div>
                      <div class="testimonial-info">
                        <p>
                          Accessibility to high quality, healthy native and
                          indigenous ingredients is extremely limited based on
                          location. Tocabe’s Online Pantry is simplifying the
                          supply chain and making regional shopping local by
                          giving you access to native and indigenous ingredients
                          with just the click of a button.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="testimonial-content">
                      <div class="testimonial-img">
                        <img src="images/tocabe_hand_logo.png" alt="" />
                      </div>
                      <div class="testimonial-info">
                        <p>
                          Accessibility to high quality, healthy native and
                          indigenous ingredients is extremely limited based on
                          location. Tocabe’s Online Pantry is simplifying the
                          supply chain and making regional shopping local by
                          giving you access to native and indigenous ingredients
                          with just the click of a button.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="testimonial-content">
                      <div class="testimonial-img">
                        <img src="images/tocabe_hand_logo.png" alt="" />
                      </div>
                      <div class="testimonial-info">
                        <p>
                          Accessibility to high quality, healthy native and
                          indigenous ingredients is extremely limited based on
                          location. Tocabe’s Online Pantry is simplifying the
                          supply chain and making regional shopping local by
                          giving you access to native and indigenous ingredients
                          with just the click of a button.
                        </p>
                      </div>
                    </div>
                  </div>

                  <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
