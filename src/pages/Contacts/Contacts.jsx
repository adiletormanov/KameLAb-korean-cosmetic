import React from 'react'

const Contacts = () => {

	React.useEffect(() => {
		window.scrollTo(0, 0);
  }, []);

	return (

		<div className="main">
		<div className="contacts">
			<div className="contacts__container">
				<h2 className="contacts__container-title">Контактные данные</h2>

				<input
					type="text"
					className="contacts__container-input"
					placeholder="Остались вопросы? Напишите нам в любую социальную сеть и мы с удовольствием ответим!"
				/>

				<div className="contacts__container-contacts">
					<img
						src="/src/img/phoneimg.png"
						alt=""
						className="contacts__container-contacts-tell"
					/>
					<a
						href="tel:+7 (999) 131-32-49"
						className="contacts__container-contacts-phone"
						>+7 (999) 131-32-49</a>
				</div>
				<div className="contacts__container-email">
					<img
						src="/src/img/email.png"
						alt=""
						className="contacts__container-email-img"
					/>
					<a
						href="mailto:Camellab@gmail.com"
						className="contacts__container-email-email"
						>Camellab@gmail.com</a>
				</div>

				<h3 className="contacts__container-socialtext">Наши социальные сети</h3>

				<div className="contacts__container-socials">
					<a
						href="https://wa.me/4957777777?text=Привет!"
						className="contacts__container-socials-whatsup"
						><img src="/src/img/whatsupimg.png" alt=""
					/></a>
					<a href="vk.me/agvento" className="contacts__container-socials-vk"
						><img src="/src/img/vkimg.png" alt=""
					/></a>
				</div>

				<h3 className="contacts__container-storetext">Магазины</h3>

				<div className="contacts__container-store">
					<img
						src="/src/img/map.png"
						alt=""
						className="contacts__container-store-img"
					/>
					<p className="contacts__container-store-adress">
						г. Бавлы Пионерская 15
					</p>
				</div>
				<div className="contacts__container-store">
					<img
						src="/src/img/map.png"
						alt=""
						className="contacts__container-store-img"
					/>
					<p className="contacts__container-store-adress">
						г. Бавлы Пионерская 15
					</p>
				</div>

				<div className="contacts__container-ip">
					<p>Реквизиты</p>
					<p>ИП Масленкова Анастасия Александровна</p>
					<p>ИНН 026510713972</p>
					<p>ОГРН 322169000053271</p>
					<p>Юридический адрес: г. Бавлы, ул. Сайдашева 3</p>
				</div>
			</div>
		</div>
	</div>

	)
}

export default Contacts
