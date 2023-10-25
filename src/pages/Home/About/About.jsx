import React from 'react'

const About = () => {
	return (
		<div className="about">
		<div className="about__container">
			<h2 className="about__title">О магазине</h2>
			<div className="about__block">
				<div className="about__left">
					<img className="about__left-img" src="/src/assets/img/logomini.png" alt="" />
					<p className="about__left-describe">
						KameLAb - мультибрендовый интернет-магазин косметики. Мы
						предлагаем вам большой выбор брендов, среди которых вы
						обязательно найдете то, что нужно вам.
					</p>
				</div>
				<div className="about__right">
					<p className="about__right-describe">
						Мы сотрудничаем с официальными дистрибьюторами, поэтому вы
						можете быть уверены в качестве и оригинальности представленной
						продукции на сайте. <br />
						Вы всегда можете получить бесплатную консультацию по подбору
						ухода от наших специалистов. <br />
						Спасибо, что выбираете нас!
					</p>
				</div>
			</div>
		</div>
	</div>
	)
}

export default About
