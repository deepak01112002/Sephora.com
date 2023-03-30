import React from "react";

const Home = () => {
  return (
    <div>
      <div className="slide-container">
        <div>
          <img
            src="https://www.sephora.com/contentimages/2023-fragrance-q2-site-home-page-rwd-hero-banner-US-2973-image-only-1000x750.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>CHANEL Fragrances</h3>
            <h5>Discover how these bestselling scents make you feel.</h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.sephora.com/contentimages/2023-03-25-slotting-just-arrived-v2-standard-site-rwd-home-page-hero-banner-4-product-english-US-CA_01.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>This Just In</h3>
            <h5>The latest beauty from the hottest brands.</h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.sephora.com/contentimages/2023-3-23-gxve-eye-story-site-desktop-mobile-home-page-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>NEW GXVE BY GWEN STEFANI</h3>
            <h5>
              Rock iconic eye looks with pigement-packed formulas that won't
              flake.
            </h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
        <div>
          <img
            className="weird"
            src="https://www.sephora.com/contentimages/2023-03-18-slotting-clean-site-rwd-home-page-hero-banner-4-product-english-us-ca-handoff_01.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>Trending Clean Makeup</h3>
            <h5>Picks you'll love, minus ingredients you might not.</h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.sephora.com/contentimages/2023-fragrance-q1-site-home-page-hero-banner-newness-US-CAN-2833-release-1000x750-image-only.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>Just-Dropped Scents</h3>
            <h5>Discover how fragnance make you feel.</h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.sephora.com/contentimages/2023-03-10-slotting-just-arrived-v4-standard-site-responsive-home-page-hero-banner-US_01.jpg?imwidth=545"
            alt=""
          />
          <div className="slide-text-box">
            <h3>The Latest Lineup</h3>
            <h5>New beauty from the hottest brands.</h5>
            <p>SHOP NOW ⮞</p>
          </div>
        </div>
      </div>
      <div className="just-dropped">
        <div className="just-dropped-text">
          <h5>Just Dropped</h5>
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
