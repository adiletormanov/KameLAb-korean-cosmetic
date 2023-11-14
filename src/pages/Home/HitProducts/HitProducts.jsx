import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getHitProducts } from '../../../redux/slices/hitProductsSlice';

import { setShowHits } from '../../../redux/slices/hitProductsSlice';

import Card from '../../../components/Card/Card';
import Skeleton from '../../../components/Skeleton/Skeleton';

const HitProducts = () => {
  const dispatch = useDispatch();

  const hits = useSelector((state) => state.hitsSlice.hits);
  const status = useSelector((state) => state.hitsSlice.status);
  const showHits = useSelector((state) => state.hitsSlice.showHits);

  React.useEffect(() => {
    dispatch(getHitProducts())
  }, []);

  return (
    <div className="hitproducts">
      <div className="container">
        <div className="hitproducts__block">
          <h2 id="hit" className="hitproducts__title">
            Хиты продаж
          </h2>

          <div className="hitproducts__row">
            {status === 'rejected'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : hits
                  .filter((el, idx) => {
                    return showHits === false ? idx < 6 : idx < showHits * 12;
                  })

                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Card item={item} />
                    </React.Fragment>
                  ))}
          </div>

          <div className="hitproducts__see">
            <button
              onClick={() => dispatch(setShowHits(!showHits))}
              className="hitproducts__see-all"
            >
              {showHits === false ? 'Показать все акции' : 'Свернить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitProducts;
