import React from 'react';
import { Link } from 'react-router-dom';




const HeaderTop = () => {
  return (
    <div className="header__top">
      <Link to={'/delivery'} className="header__top-nav" >
        Доставка и оплата
      </Link>
      <Link to={'/faq'} className="header__top-nav" >
        Вопрос-ответ
      </Link>
      <Link to={'/contacts'} className="header__top-nav" >
        Контакты
      </Link>
    </div>
  );
};

export default HeaderTop;
