import React from 'react'
import { Link } from 'react-router-dom'


const HeaderBottom = () => {
	return (

		<nav className="header__bottom">
		<Link
			to={'/catalog'}
			className="header__bottom-links active"
			>Каталог</Link>
		<a href="#new" className="header__bottom-links">Новинки</a>
		<a href="#hit" className="header__bottom-links">Хиты продаж</a>
		<Link to={'/certificate'}
			className="header__bottom-links"
			>Подарочные <br />
			сертификаты</Link>
	</nav>

	)
}

export default HeaderBottom
