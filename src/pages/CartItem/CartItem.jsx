import React from 'react';
import { useParams } from 'react-router-dom';
import CartItemsMain from './CartItemMain/CartItemMain';
import CartItemsSame from './CartItemSame/CartItemSame';
import {CustomContext} from '../../utils/context'
import api from '../../utils/api';

const CartItem = () => {
  const {setProduct } = React.useContext(CustomContext);
	const params = useParams();

  React.useEffect(() => {
		window.scrollTo(0, 0);
    api(`products/${params.id}`).then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="main">

      <CartItemsMain />
      <CartItemsSame />

    </div>
  );
};

export default CartItem;
