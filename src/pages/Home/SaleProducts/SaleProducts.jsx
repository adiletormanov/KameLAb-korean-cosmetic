import React from 'react';

import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/context';
import Skeleton from '../../../components/Skeleton/Skeleton';

const SaleProducts = () => {
  const { sales, getSaleProducts, show, setShow, skeleton } =
    React.useContext(CustomContext);

  React.useEffect(() => {
    getSaleProducts();
  }, []);

  return (
    <div className="saleproducts">
      <div className="container">
        <div className="saleproducts__block">
          <h2 className="saleproducts__title">Акции</h2>

          <div className="saleproducts__row">
            {skeleton
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              :

							sales
                  .filter((el, idx) => {
                    return show === false ? idx < 6 : idx < show * 12;
                  })

                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Card item={item} />
                    </React.Fragment>
                  ))}
          </div>

          <div className="saleproducts__see">
            <button
              onClick={() => setShow(!show)}
              className="saleproducts__see-all"
            >
              {show === false ? 'Показать все акции' : 'Свернить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
