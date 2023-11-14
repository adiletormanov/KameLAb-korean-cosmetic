import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNewProducts } from '../../../redux/slices/newProductsSlice';

import { setShowNews } from '../../../redux/slices/newProductsSlice';

import Card from '../../../components/Card/Card';
import Skeleton from '../../../components/Skeleton/Skeleton';

const NewProducts = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsSlice.news);
  const status = useSelector((state) => state.newsSlice.status);
  const showNews = useSelector((state) => state.newsSlice.showNews);

  React.useEffect(() => {
    dispatch(getNewProducts());
  }, []);

  return (
    <div className="newproducts">
      <div className="container">
        <div className="newproducts__block">
          <h2 id="new" className="newproducts__title">
            Новинки
          </h2>

          <div className="newproducts__row">
            {status === 'rejected'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : news
                  .filter((el, idx) => {
                    return showNews === false ? idx < 6 : idx < showNews * 12;
                  })

                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Card item={item} />
                    </React.Fragment>
                  ))}
          </div>
          <div className="newproducts__see">
            <button
              onClick={() => dispatch(setShowNews(!showNews))}
              className="newproducts__see-all"
            >
              {showNews === false ? 'Показать все акции' : 'Свернить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
