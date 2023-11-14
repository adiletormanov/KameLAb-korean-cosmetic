import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  delFromCarts,
  cartCountMinus,
  cartCountPlus,
} from '../../../redux/slices/cartSlice';







const CartBlock = ({ el }) => {
  const dispatch = useDispatch();

	const carts = useSelector((state) => state.cartSlice.carts);

  const deleteItem = () => {
    if (window.confirm('Вы уверены?')) {
      dispatch(delFromCarts(el.id));
    }
  };


	console.log(el.count);






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
            onClick={()=> dispatch(
							cartCountMinus(el))}
          >
            -
          </button>
          <span className="cart__block-count"> {el.count} </span>
          <button
            type="button"
            className="cart__block-plus"
            onClick={()=> dispatch(
      cartCountPlus(el))}
          >
            +
          </button>
        </div>

        <p className="cart__block-price">{el.price * el.count} р.</p>
      </div>

      <button onClick={deleteItem} className="cart__block-remove">
        Удалить товар
      </button>
    </div>
  );
};

export default CartBlock;
