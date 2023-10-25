import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CustomContext } from '../../utils/context';

const Card = ({ item }) => {
  const { favorites, favoritesHandler, carts, cartsHandler } =
    React.useContext(CustomContext);

  return (
    <div className="saleproducts__card">
      <span
        className="saleproducts__card-heart"
        onClick={() => favoritesHandler(item)}
      >
        {favorites.some((el) => el.id === item.id) ? (
          <AiFillHeart color={'red'} />
        ) : (
          <AiOutlineHeart />
        )}
      </span>
      <Link to={`/cartItem/${item.id}`}>
        <img src={item?.image} alt="" className="saleproducts__img" />
      </Link>
      <p className="saleproducts__card-title">{item?.title}</p>
      <div className="saleproducts__card-price-btn">
        <p className="saleproducts__card-price">{item?.price} р.</p>

        <div onClick={() => cartsHandler(item)}>
          {carts.some((cartItem) => cartItem.id === item.id) ? (
            <button className="saleproducts__card-btn active">В корзине</button>
          ) : (
            <button className="saleproducts__card-btn">В корзину</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
