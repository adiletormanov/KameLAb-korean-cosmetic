import React from 'react'

const OrderPay = () => {
	return (

		<div className="orderpay">
		<div className="order__container">
			<h3 className="orderpay__title">
				Способ доставки <span className="orderpay__title-star">*</span>
			</h3>

			<div className="orderpay__info">
				<div className="orderpay__infoblock">
					<button className="orderpay__info-btn">
						Курьером до двери
						<span>100 р.<i className="fa-solid fa-plus"></i></span>
					</button>

					<div className="orderpay__block">
						<div className="orderpay__door-title">
							<p>Доступно для городов Бавлы и Альметьевск</p>
						</div>

						<button className="orderpay__door-btn2">
							Город <span><i className="fa-solid fa-plus"></i></span>
						</button>
						<div className="orderpay__door-btns">
							<button id="id" className="orderpay__door-btn-city active">
								Бавлы
							</button>
							<button id="id" className="orderpay__door-btn-city active">
								Альметьевск
							</button>
						</div>

						<input
							type="text"
							className="orderpay__door-adress"
							placeholder="Адрес *"
						/>

						<div className="orderpay__radio">
							<h3 className="orderpay__radio-title">
								Способ оплаты
								<span className="orderpay__radio-title-star">*</span>
							</h3>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата онлайн"
									name="tech"
								/>Оплата онлайн
							</p>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата при получении"
									name="tech"
								/>Оплата при получении
							</p>
						</div>
					</div>
				</div>

				<div className="orderpay__infoblock">
					<button className="orderpay__info-btn">
						Пункт выдачи
						<span>350 р.<i className="fa-solid fa-plus"></i></span>
					</button>

					<div className="orderpay__block">
						<div className="orderpay__sdek-title">
							<img
								src="/src/img/mappp.png"
								alt=""
								className="orderpay__sdek-map"
							/>
							<a className="orderpay__sdek-adress" href=""
								>Выберите пункт выдачи</a>
						</div>

						<div className="orderpay__radio">
							<h3 className="orderpay__radio-title">
								Способ оплаты
								<span className="orderpay__radio-title-star">*</span>
							</h3>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата онлайн"
									name="tech"
								/>Оплата онлайн
							</p>
						</div>
					</div>
				</div>

				<div className="orderpay__infoblock">
					<button className="orderpay__info-btn">
						Почта России
						<span>300 р.<i className="fa-solid fa-plus"></i></span>
					</button>

					<div className="orderpay__block">
						<div className="orderpay__post-title">
							<input
								type="text"
								className="orderpay__door-adress"
								placeholder="Город *"
							/>

							<input
								type="text"
								className="orderpay__door-adress"
								placeholder="Индекс *"
							/>

							<input
								type="text"
								className="orderpay__door-adress"
								placeholder="Адрес *"
							/>
						</div>

						<div className="orderpay__radio">
							<h3 className="orderpay__radio-title">
								Способ оплаты
								<span className="orderpay__radio-title-star">*</span>
							</h3>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата онлайн"
									name="tech"
								/>Оплата онлайн
							</p>
						</div>
					</div>
				</div>

				<div className="orderpay__infoblock">
					<button className="orderpay__info-btn">
						Самовывоз <span>0 р.<i className="fa-solid fa-plus"></i></span>
					</button>

					<div className="orderpay__block">
						<button className="orderpay__door-btn2">
							Город <span><i className="fa-solid fa-plus"></i></span>
						</button>
						<div className="orderpay__door-btns">
							<button className="orderpay__door-btn-city active">
								Бавлы
							</button>
							<button className="orderpay__door-btn-city active">
								Альметьевск
							</button>
						</div>

						<input
							type="text"
							className="orderpay__door-adress"
							placeholder="Адрес *"
						/>

						<div className="orderpay__radio">
							<h3 className="orderpay__radio-title">
								Способ оплаты
								<span className="orderpay__radio-title-star">*</span>
							</h3>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата онлайн"
									name="tech"
								/>Оплата онлайн
							</p>

							<p className="orderpay__radio-choice">
								<input
									style={{cursor: 'pointer'}}
									type="radio"
									value="Оплата при получении"
									name="tech"
								/>Оплата при получении
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default OrderPay
