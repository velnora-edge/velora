
import React from "react";

import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import FeaturedProducts from "../Components/FeaturedProducts";
import NewArrivals from "../Components/NewArrivals";
import Testimonials from "../Components/Testimonials"
import VeloraEdit from "../Components/VeloraEdit";
import TrendingNow from "../Components/TrendingNow";
import WhyVelora from "../Components/WhyVelora";
import Newsletter from "../Components/Newsletter";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <Categories />
      <FeaturedProducts />

      {/* New Arrivals */}
      <NewArrivals />
<Testimonials />
      {/* Velora Edit */}
      <VeloraEdit />

      {/* Trending Products */}
      <TrendingNow />

      {/* Why Velora */}
      <WhyVelora />

      {/* Newsletter */}
      <Newsletter />
      <FAQ />
    </>
  );
};

export default Home;