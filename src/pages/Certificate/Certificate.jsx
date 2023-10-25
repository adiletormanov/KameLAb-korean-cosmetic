import React from 'react';
import img from '../../assets/img/certificate.png';

const Certificate = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="certificate">
        <div className="certificate__container">
          <h2 className="certificate__title">Подарочный сертификат</h2>
          <p className="certificate__subtitle">
            Сумма сертификата кратна 500 рублям. Если вы хотите сертификат
            номиналом <br />
            1000Р, добавьте в корзину 2 сертификата. На 3000Р — 6 сертификатов.
          </p>

          <div className="certificate__block">
            <img src={img} alt="" className="certificate__left-img" />

            <div className="certificate__right">
              <div className="certificate__right-count">
                <h3 className="certificate__right-count-title">Количество</h3>

                <div className="quantity_inner">
                  <button
                    onClick={() => setCount(count - 1)}
                    type="button"
                    className="cart__block-minus"
                  >
                    -
                  </button>
                  <span className="cart__block-count"> {count} </span>
                  <button
                    onClick={() => setCount(count + 1)}
                    type="button"
                    className="cart__block-plus"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="certificate__right-sendtop">
                <h3 className="certificate__right-sendtop-title">
                  Кому отравить
                </h3>

                <ul className="certificate__right-sendtop-navs">
                  <li>Себе</li>
                  <li>Другому человеку</li>
                </ul>

                <input
                  type="text"
                  className="certificate__right-sendtop-input"
                  placeholder="Введите имя"
                />
              </div>

              <div className="certificate__right-sendbottom">
                <h3 className="certificate__right-sendbottom-title">
                  Куда отравить
                </h3>

                <ul className="certificate__right-sendbottom-navs">
                  <li>E-mail</li>
                  <li>Sms</li>
                </ul>

                <input
                  type="text"
                  className="certificate__right-sendbottom-input"
                  placeholder="Выберите способ"
                />
              </div>

              <div className="certificate__right-wish">
                <h3 className="certificate__right-wish-title">Пожелание</h3>

                <textarea
                  type="text"
                  className="certificate__right-wish-input"
                  placeholder="Введите пожелание на сертификат"
                ></textarea>
              </div>
              <div className="certificate__right-btn">
                <button className="certificate__right-button">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
