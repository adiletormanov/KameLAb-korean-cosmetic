import React from 'react';

import { CustomContext } from '../../../utils/context';
import CartBlock from './CartBlock/CartBlock';

const CartMain = () => {
  const { carts } = React.useContext(CustomContext);




  return (
    <div className="cart">
      <div className="container">
        <div className="cart__container">
          <div className="cart__top">
            <h2 className="cart__top-title">Корзина</h2>
            <div className="cart__top-left">
              <h3 className="cart__top-left-title">Количество</h3>
              <h3 className="cart__top-left-title">Цена</h3>
            </div>
          </div>
          {carts.map((el) => (
            <React.Fragment key={el.id}>
              <CartBlock el={el} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartMain;
