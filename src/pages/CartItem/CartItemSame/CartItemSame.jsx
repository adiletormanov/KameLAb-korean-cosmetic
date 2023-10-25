import React from 'react';
import { CustomContext } from '../../../utils/context';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';

const CartItemsSame = () => {
  const { shop, product, getSameProducts } = React.useContext(CustomContext);

  React.useEffect(() => {
    getSameProducts();
  }, []);

  return (
    <div className="cartitems">
      <div className="container">
        <div className="cartitems__block">
          <h2 className="cartitems__title">Похожие товары</h2>

          <div className="cartitems__row">
            {shop
              .filter((el) => {
                return el.brand === product.brand || el.id !== product.id;
              })
              .map((item) => (
                <Card item={item} key={item.id}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsSame;
