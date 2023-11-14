import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../../utils/context';

import logo from '../../../assets/img/logo.png';
import favorites2 from '../../../assets/img/heart.png';
import phoneimg from '../../../assets/img/phoneimg.png';
import whatsupimg from '../../../assets/img/whatsupimg.png';
import fullCart from '../../../assets/img/fullCart.png';
import searchImg from '../../../assets/img/search.png';
import clearInput from '../../../assets/img/btn-remove.svg';

import { useSelector, useDispatch } from 'react-redux';
import { setSearch, setValue } from '../../../redux/slices/catalogSlice';
import debounce from 'lodash.debounce';

const HeaderCenter = () => {

	const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = React.useRef();
	// const [value, setValue] = React.useState(''); // локальный стейт для контролируемого инпута

  const value = useSelector((state) => state.catalogSlice.value);
  const search = useSelector((state) => state.catalogSlice.search);

  const onClickClear = () => {
    dispatch(setSearch(''));
		dispatch(setValue(''));
    inputRef.current.focus();
  };

	const updateSearchValue = React.useCallback(
    // сохранили ссылку на функцию
    debounce((str) => {
      // сделали функцию отложенной
      dispatch(setSearch(str));
    }, 350),
    [],
  );

	const inputChange = (e) => {
		if (location.pathname !== '/catalog') {
			navigate('/catalog');
		}
		dispatch(setSearch(e.target.value));
		updateSearchValue(e.target.value);
	}

  React.useEffect(() => {
    if (location.pathname !== '/catalog') {
      dispatch(setSearch(''));
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
					// value={value}
          className="header__search-input"
          placeholder="Поиск товара"
          onChange={inputChange}
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
