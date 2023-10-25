import React from 'react';

const OrderMain = () => {
  return (
    <div className="order">
      <div className="order__container">
        <h2 className="order__title">Оформление заказа</h2>

        <div className="order__block">
          <div className="order__date">
            <h3 className="order__date-title">Ваши данные</h3>

            <input
              type="text"
              className="order__date-name"
              placeholder="ФИО *"
            />
            <input
              type="text"
              className="order__date-phone"
              placeholder="Телефон *"
            />
            <input
              type="text"
              className="order__date-email"
              placeholder="E-mail *"
            />
            <textarea
              className="order__date-review"
              placeholder="Комментарий"
            ></textarea>
          </div>

          <div className="order__your">
            <h3 className="order__your-title">Ваш заказ</h3>

            <ul className="order__your-about">
              <li className="order__your-about-item">
                Товаров на<span className="value">2700 р.</span>
              </li>
              <li className="order__your-about-item">
                Доставка<span className="value">100 р.</span>
              </li>
              <li className="order__your-about-item">
                Итого<span className="value">2800 р.</span>
              </li>
            </ul>
            <div className='order__your-button'>
              <button className="order__your-btn">Оформитить заказ</button>
            </div>
          </div>
        </div>

        <p className="order__info">
          Наберите товаров еще на <span> 300</span> рублей для бесплатной
          доставки!
        </p>
      </div>
    </div>
  );
};

export default OrderMain;
