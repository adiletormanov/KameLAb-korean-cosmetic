import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {Link,  useNavigate } from 'react-router-dom';

import {
  addFavorites,
  delFromFavorites,
} from '../../../redux/slices/favoritesSlice';
import { addCarts, delFromCarts } from '../../../redux/slices/cartSlice';
import { setProduct } from '../../../redux/slices/sameProductsSlice';

const CatalogRow = ({item}) => {


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

							<div className="catalog__card">
								<span
									className="catalog__card-heart"
									onClick={favoritesClick}
								>
									{isItemInFavorites ? (
										<AiFillHeart color={'red'} />
									) : (
										<AiOutlineHeart />
									)}
								</span>
								<Link to={`/cartItem/${item.id}`}>
									<img
										src={item.image}
										alt=""
										className="catalog__img"

										onClick={handleClick}
									/>
								</Link>
								<p className="catalog__card-title">{item.title}</p>
								<p className="catalog__card-price">{item.price} р.</p>

								<div onClick={cartsClick}>
									{isItemInCarts ? (
										<button className="catalog__card-btn active">
											В корзине
										</button>
									) : (
										<button className="catalog__card-btn">
											В корзину
										</button>
									)}
								</div>
							</div>

	)
}

export default CatalogRow
