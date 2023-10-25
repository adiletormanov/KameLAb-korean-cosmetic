import React from 'react';
import Card from '../../../components/Card/Card';
import { CustomContext } from '../../../utils/context';
import Skeleton from '../../../components/Skeleton/Skeleton';

const NewProducts = () => {
  const { news, getNewProducts, skeleton } = React.useContext(CustomContext);

  React.useEffect(() => {
    getNewProducts();
  }, []);

  return (
    <div className="newproducts">
      <div className="container">
        <div className="newproducts__block">
          <h2 id="new" className="newproducts__title">Новинки</h2>

          <div className="newproducts__row">


            {skeleton
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : news.map((item) => (
              <React.Fragment key={item.id}>
                <Card item={item} />
              </React.Fragment>
            ))}


          </div>
          <div className="newproducts__see">
            <button className="newproducts__see-all">
              Показать все новинки
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
