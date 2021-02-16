import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={3238882}
            title="TCL 32 Inch 3-Series 720p Roku Smart TV - 32S335"
            price={148.34}
            image="https://m.media-amazon.com/images/I/61ficuy07aL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id={43438882}
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={279.98}
            image="https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={84938493842}
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.98}
            image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL.jpg"
            rating={4}
          />
          <Product
            id={3238893202}
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={39.99}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={83234452}
            title="SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch - SDSQXAO-128G-GNCZN"
            price={25.5}
            image="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={389249234866}
            title="Samsung QN75Q900RBFXZA Flat 75-Inch QLED 8K Q900 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
            price={3999.94}
            image="https://images-na.ssl-images-amazon.com/images/I/9113rIxCA5L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
