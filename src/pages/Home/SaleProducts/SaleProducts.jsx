import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getSaleProducts } from '../../../redux/slices/saleProductsSlice';

import { setShowSales } from '../../../redux/slices/saleProductsSlice';

import Card from '../../../components/Card/Card';
import Skeleton from '../../../components/Skeleton/Skeleton';

const SaleProducts = () => {
  const dispatch = useDispatch();

  const sales = useSelector((state) => state.saleSlice.sales);
  const status = useSelector((state) => state.saleSlice.status);
  const showSales = useSelector((state) => state.saleSlice.showSales);

  React.useEffect(() => {
    dispatch(getSaleProducts());
  }, []);

  return (
    <div className="saleproducts">
      <div className="container">
        <div className="saleproducts__block">
          <h2 className="saleproducts__title">Акции</h2>

          <div className="saleproducts__row">
            {status === 'rejected'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : sales
                  .filter((el, idx) => {
                    return showSales === false ? idx < 6 : idx < showSales * 12;
                  })

                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Card item={item} />
                    </React.Fragment>
                  ))}
          </div>

          <div className="saleproducts__see">
            <button
              onClick={() => dispatch(setShowSales(!showSales))}
              className="saleproducts__see-all"
            >
              {showSales === false ? 'Показать все акции' : 'Свернить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
