import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../utils/api';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import CatalogAside from './CatalogAside/CatalogAside';
import { CustomContext } from '../../utils/context';
import Skeleton from '../../components/Skeleton/Skeleton';

const Catalog = () => {
  const {
    search,
    favorites,
    favoritesHandler,
    carts,
    cartsHandler,
    items,
    skeleton,
    getAllItems,
    page,
    setPage,
    sort,
    category,
  } = React.useContext(CustomContext);

  // console.log(new Array(Math.ceil(items.length / 6)));

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getAllItems();
  }, [sort, category]);

  return (
    <>
      <div className="catalog">
        <CatalogAside />
        <div className="catalog__container">
          <div className="catalog__row">
            {skeleton
              ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
              : items
                  .filter((el, idx) => {
                    return page === 1
                      ? idx < 6
                      : idx < page * 6 && idx > page * 6 - 7;
                  })
                  .filter((obj) => {
                    if (
                      obj.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <div className="catalog__card">
                        <span
                          className="catalog__card-heart"
                          onClick={() => favoritesHandler(item)}
                        >
                          {favorites.some((el) => el.id === item.id) ? (
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
                          />
                        </Link>
                        <p className="catalog__card-title">{item.title}</p>
                        <p className="catalog__card-price">{item.price} р.</p>

                        <div onClick={() => cartsHandler(item)}>
                          {carts.some((cartItem) => cartItem.id === item.id) ? (
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
                    </React.Fragment>
                  ))}
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="catalog__pagination">
          {new Array(Math.ceil(items.length / 6))
            .fill(null)
            .map((item, idx) => (
              <li
                onClick={() => setPage(idx + 1)}
                key={idx}
                className={`catalog__page ${page === idx + 1 ? 'active' : ''}`}
              >
                {idx + 1}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Catalog;
