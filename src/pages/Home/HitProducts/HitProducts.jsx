import React from 'react';
import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/context';
import Skeleton from '../../../components/Skeleton/Skeleton';

const HitProducts = () => {
  const { hits, getHitProducts, skeleton } = React.useContext(CustomContext);

  React.useEffect(() => {
    getHitProducts();
  }, []);

  return (
    <div className="hitproducts">
      <div className="container">
        <div className="hitproducts__block">
          <h2 id="hit" className="hitproducts__title">
            Хиты продаж
          </h2>

          <div className="hitproducts__row">
            {skeleton
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : hits.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item={item} />
                  </React.Fragment>
                ))}
          </div>

          <div className="hitproducts__see">
            <button className="hitproducts__see-all">Показать все хиты</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitProducts;
