import React from 'react';
import CartBottom from './CartBottom/CartBottom';
import { CustomContext } from '../../utils/context';
import CartBlock from './CartBlock/CartBlock';

const Cart = () => {
  const { carts } = React.useContext(CustomContext);

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

  if (carts.length) {
    return (
      <div class="main">
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


            <CartBottom />


          </div>
        </div>
      </div>
    );
  } else {
    return <h2 className="favorites__empty">Корзина пустая</h2>;
  }
};

export default Cart;
