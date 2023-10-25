import React from 'react';
import SaleProducts from './SaleProducts/SaleProducts';
import NewProducts from './NewProducts/NewProducts';
import Popular from './Popular/Popular';
import HitProducts from './HitProducts/HitProducts';
import About from './About/About';
import Brands from './Brands/Brands';

const Home = () => {

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <SaleProducts />
      <NewProducts />
      <Popular />
      <HitProducts />
      <About />
      <Brands />
    </div>
  );
};

export default Home;
