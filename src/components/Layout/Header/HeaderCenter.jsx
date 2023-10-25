import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../../utils/context';

import logo from '../../../assets/img/logo.png';
import cartimg from '../../../assets/img/cartimg.png';
import favorites2 from '../../../assets/img/heart.png';
import phoneimg from '../../../assets/img/phoneimg.png';
import whatsupimg from '../../../assets/img/whatsupimg.png';
import fullCart from '../../../assets/img/fullCart.png';
import searchImg from '../../../assets/img/search.png';
import clearInput from '../../../assets/img/btn-remove.svg';

const HeaderCenter = () => {
  const { search, setSearch } = React.useContext(CustomContext);

  const location = useLocation();

  const navigate = useNavigate();

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearch('');
    inputRef.current.focus();
  };

  React.useEffect(() => {
    if (location.pathname !== '/catalog') {
      setSearch('');
    }
  }, [location.pathname]);

  return (
    <div className="header__middle">
      <Link to={'/'} className="header__middle-logo">
        <img className="header__logo-img" src={logo} alt="" />
      </Link>
      <div className="header__search">
        <input
          ref={inputRef}
          type="text"
          className="header__search-input"
          placeholder="Поиск товара"
          onChange={(e) => {
            if (location.pathname !== '/catalog') {
              navigate('/catalog');
            }
            setSearch(e.target.value);
          }}
        />

        {search ? (
          <img
            onClick={onClickClear}
            className="header__search-img"
            src={clearInput}
            alt=""
          />
        ) : (
          <img
            onClick={onClickClear}
            className="header__search-img"
            src={searchImg}
            alt=""
          />
        )}
      </div>

      <div className="header__lang">
        <Link to={'/favorites'} className="header__cart-img">
          <img width={40} src={favorites2} alt="" />
        </Link>

        <Link to={'/cart'} className="header__cart-img">
          <img src={fullCart} alt="" />
        </Link>
      </div>

      <div className="header__contacts">
        <a href="" className="header__contacts-call">
          <img src={phoneimg} alt="" />
        </a>
        <a href="" className="header__contacts-whatsup">
          <img src={whatsupimg} alt="" />
        </a>
      </div>
    </div>
  );
};

export default HeaderCenter;
