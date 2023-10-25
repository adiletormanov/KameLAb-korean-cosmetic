import React from 'react';
import { CustomContext } from '../../../utils/context';

const CartBlock = ({ el }) => {
  const { cartCountPlus, cartCountMinus, delCart } =
    React.useContext(CustomContext);

		const deleteItem = () => {
			if (window.confirm('Вы уверены?')) {
				(delCart(el.id));
		}
	}

  return (
    <div className="cart__block">
      <div className="cart__block-left">
        <img src={el.image} alt="" className="cart__img" />
        <p className="cart__block-describe">{el.title}</p>
      </div>

      <div className="cart__block-right">
        <div className="quantity_inner">
          <button
            type="button"
            className="cart__block-minus"
            onClick={() => cartCountMinus(el.id)}
          >
            -
          </button>
          <span className="cart__block-count"> {el.count} </span>
          <button
            type="button"
            className="cart__block-plus"
            onClick={() => cartCountPlus(el.id)}
          >
            +
          </button>
        </div>

        <p className="cart__block-price">{el.price} р.</p>
      </div>

      <button onClick={deleteItem} className="cart__block-remove">
        Удалить товар
      </button>
    </div>
  );
};

export default CartBlock;
