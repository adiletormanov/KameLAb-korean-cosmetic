import React from 'react';
import OrderMain from './OrderMain/OrderMain';
import OrderPay from './OrderPay/OrderPay';

const Order = () => {

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <OrderMain />
      <OrderPay/>
    </div>
  );
};

export default Order;
