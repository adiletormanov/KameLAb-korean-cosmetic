import React from 'react';
import {CustomContext} from '../../../utils/context'

const CartItemsMain = () => {

	const { product, carts, cartsHandler } = React.useContext(CustomContext);

  if ('id' in product) {
    return (
      <div className="cartitem">
        <div className="cartitem__container">
          <div className="cartitem__image">
            <img className="cartitem__image-img" src={product.image} alt="" />
          </div>
          <div className="cartitem__about">
            <h2 className="cartitem__about-title">{product.title}</h2>
            <p className="cartitem__about-price">{product.price} р.</p>

						<div onClick={() => cartsHandler(product)}>
        {carts.some((cartItem) => cartItem.id === product.id) ? (
          <button className="cartitem__about-btn active">В корзине</button>
        ) : (
          <button className="cartitem__about-btn">В корзину</button>
        )}
      </div>
            <p className="cartitem__about-describe">Описание</p>
            <p className="cartitem__about-subscribe">
              Увлажняющая сыворотка Trimay Amino Peptide Ampoule оказывает
              мощное антивозрастное действие благодаря высокой концентрации
              омолаживающих активов, которые уменьшают глубину морщин и заломов,
              подтягивают овал лица, уплотняют и придают упругость.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }
};

export default CartItemsMain;
