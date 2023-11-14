import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CustomContext } from '../../utils/context';

import { useSelector, useDispatch } from 'react-redux';
import {
  addFavorites,
  delFromFavorites,
} from '../../redux/slices/favoritesSlice';
import { addCarts, delFromCarts } from '../../redux/slices/cartSlice';
import { setProduct } from '../../redux/slices/sameProductsSlice';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favoritesSlice.favorites);
  const isItemInFavorites = favorites.some((el) => el.id === item.id);

  const carts = useSelector((state) => state.cartSlice.carts);
  const isItemInCarts = carts.some((el) => el.id === item.id);

  const favoritesClick = (e) => {
    e.stopPropagation();
    if (isItemInFavorites) {
      dispatch(delFromFavorites(item.id));
    } else {
      dispatch(addFavorites(item));
    }
  };

  const cartsClick = (e) => {
    e.stopPropagation();
    if (isItemInCarts) {
      dispatch(delFromCarts(item.id));
    } else {
      dispatch(addCarts(item));
    }
  };

  const handleClick = () => {
    dispatch(setProduct(item));
    navigate(`/cartItem/${item.id}`);
  };

  return (
    <div className="saleproducts__card">
      <span className="saleproducts__card-heart" onClick={favoritesClick}>
        {isItemInFavorites ? <AiFillHeart color={'red'} /> : <AiOutlineHeart />}
      </span>

      <img
        src={item?.image}
        alt=""
        className="saleproducts__img"
        onClick={handleClick}
      />

      <p className="saleproducts__card-title">{item?.title}</p>
      <div className="saleproducts__card-price-btn">
        <p className="saleproducts__card-price">{item?.price} р.</p>

        <div onClick={cartsClick}>
          {isItemInCarts ? (
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
