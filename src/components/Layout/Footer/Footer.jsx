import React from 'react';
import { Link } from 'react-router-dom';
import vk from '../../../assets/img/vk2.png'
import whatsup2 from '../../../assets/img/whatsup2.png'
import end from '../../../assets/img/end.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__block">
          <nav className="footer__left">
            <Link to={'catalog'} className="footer__left-nav">
              Каталог
            </Link>
            <a href="" className="footer__left-nav">
              Новинки
            </a>
            <a href="" className="footer__left-nav">
              Распродажи
            </a>
            <Link to={'/certificate'} className="footer__left-nav">
              Подарочные сертификаты
            </Link>
          </nav>
          <div className="footer__middle">
            <Link to={'/delivery'} className="footer__middle-nav">
              Доставка и оплата
            </Link>
            <Link to={'/faq'} className="footer__middle-nav">
              Вопрос-ответ
            </Link>
            <Link to={'/contacts'} className="footer__middle-nav">
              Контакты
            </Link>
          </div>
          <div className="footer__right">
            <a href="tel:+32324234324" className="footer__right-nav">
              +7 (999) 131-32-49
            </a>
            <a href="" className="footer__right-nav">
              <img src={vk} alt="" />
            </a>
            <a href="" className="footer__right-nav">
              <img src={whatsup2} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__end">
          <img src={end} alt="" className="footer__end-img" />
          <p className="footer__end-text">Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
