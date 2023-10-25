import React from 'react';
import { CustomContext } from '../../../utils/context';
const CartBottom = () => {
  const { carts } = React.useContext(CustomContext);

  return (
    <div className="cartbottom">
      <div className="container">
        <div className="cardbottom__block">
          <div className="cartbottom__left">
            <h3 className="cartbottom__left-title">Промокод</h3>
            <input
              type="text"
              className="cartbottom__left-input"
              placeholder="Введите промокод или сертификат"
            />
          </div>

          {
            <div className="cartbottom__right">
              <h3 className="cartbottom__right-title">Стоимость</h3>

              <ul className="cartbottom__right-about">
                <li className="cartbottom__right-item">
                  Товаров на
                  <span className="value">
                    {carts.reduce((acc, rec) => acc + rec.price * rec.count, 0)}
                    р.
                  </span>
                </li>
                <li className="cartbottom__right-item">
                  Доставка<span className="value">100 р.</span>
                </li>
                <li className="cartbottom__right-item">
                  Итого
                  <span className="value">
                    {carts.reduce(
                      (acc, rec) => acc + rec.price * rec.count + 100,
                      0,
                    )}
                    р.
                  </span>
                </li>
              </ul>
              <button className="cartbottom__right-btn">
                Оформитить заказ
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
