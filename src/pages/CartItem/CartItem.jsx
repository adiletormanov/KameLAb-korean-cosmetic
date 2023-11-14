import React from 'react';
import { useParams } from 'react-router-dom';
import CartItemMain from './CartItemMain/CartItemMain';
import CartItemSame from './CartItemSame/CartItemSame';
// import {CustomContext} from '../../utils/context'
// import {setProduct} from '../../redux/slices/sameProductsSlice'
// import api from '../../utils/api';

const CartItem = () => {


  // const {setProduct } = React.useContext(CustomContext);
	// const params = useParams();

  // React.useEffect(() => {
	// 	window.scrollTo(0, 0);
  //   api(`products/${params.id}`).then((res) => setProduct(res.data));
  // }, []);

  return (
    <div className="main">

      <CartItemMain />
      <CartItemSame />

    </div>
  );
};

export default CartItem;
