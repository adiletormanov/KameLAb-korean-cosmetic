import React from 'react'
import { Link } from 'react-router-dom'

const Delivery = () => {

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);


	return (
		<div className="main">
		<div className="delivery">
			<div className="delivery_container">
				<h2 className="delivery__title">Доставки и оплата</h2>
				<h3 className="delivery__text">Способы доставки и оплаты</h3>

				<div className="delivery__block">
					<Link
						to={'/order'}
						style={{background: '#e5fbe7'}}
						className="delivery__block-item"
					>
						<div className="delivery__block-item-title">Пункт выдачи СДЭК</div>
						<div className="delivery__block-item-price">
							<img src="/src/img/priceicon.png" alt="" />
							<p>Бесплатно при заказе от 3000 р.</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/days.png" alt="" />
							<p>1-3 рабочих дня</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/pay.png" alt="" />
							<p>Оплата онлайн</p>
						</div>
					</Link>
					<Link
						to={'/order'}
						style={{background: '#d7f1f4'}}
						className="delivery__block-item"
					>
						<div className="delivery__block-item-title">Почта России</div>
						<div className="delivery__block-item-price">
							<img src="/src/img/priceicon.png" alt="" />
							<p>Бесплатно при заказе от 3000 р.</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/days.png" alt="" />
							<p>10-13 рабочих дня</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/pay.png" alt="" />
							<p>Оплата онлайн</p>
						</div>
					</Link>
					<Link
						to={'/order'}
						style={{background: '#ebe5fb'}}
						className="delivery__block-item"
					>
						<div className="delivery__block-item-title">Самовывоз</div>
						<div className="delivery__block-item-price">
							<img src="/src/img/priceicon.png" alt="" />
							<p>0 р.</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/days.png" alt="" />
							<p>1-2 рабочих дня</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/pay.png" alt="" />
							<p>Оплата онлайн</p>
						</div>
					</Link>
					<Link
						to={'/order'}
						style= {{background: '#fbeae5'}}
						className="delivery__block-item"
					>
						<div className="delivery__block-item-title">Курьером до двери</div>
						<div className="delivery__block-item-price">
							<img src="/src/img/priceicon.png" alt="" />
							<p>Бесплатно при заказе от 1000 р.</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/days.png" alt="" />
							<p>1-3 рабочих дня</p>
						</div>

						<div className="delivery__block-item-price">
							<img src="/src/img/pay.png" alt="" />
							<p>Оплата онлайн</p>
						</div>
					</Link>
				</div>

				<h4 className="delivery__adress-title">
					Самовывоз производится по адресам:
				</h4>

				<div className="delivery__adress">
					<img
						src="/src/img/map.png"
						alt=""
						className="delivery__adress-img"
					/>
					<p className="delivery__adress-text">г. Бавлы Пионерская 15</p>
				</div>
				<div className="delivery__adress">
					<img
						src="/src/img/map.png"
						alt=""
						className="delivery__adress-img"
					/>
					<p className="delivery__adress-text">г. Альметьевск, Джалиля 32</p>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Delivery
