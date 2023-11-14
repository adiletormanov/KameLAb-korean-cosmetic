import React from 'react';
import Card from '../../../components/Card/Card';
import {getSameProducts} from '../../../redux/slices/sameProductsSlice'
import {useDispatch, useSelector,} from 'react-redux';

const CartItemsSame = () => {
  // const { shop, product, getSameProducts } = React.useContext(CustomContext);

	const dispatch = useDispatch();


	const same = useSelector((state) => state.sameProductsSlice.same);
const product =useSelector((state) => state.sameProductsSlice.product);

  React.useEffect(() => {
    dispatch(getSameProducts());
  }, []);

  return (
    <div className="cartitems">
      <div className="container">
        <div className="cartitems__block">
          <h2 className="cartitems__title">Похожие товары</h2>

          <div className="cartitems__row">
            {same
              .filter((el) => {
                return el.brand === product.brand && el.id !== product.id;
              })
              .map((item) => (
                <Card item={item} key={item.id}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsSame;
