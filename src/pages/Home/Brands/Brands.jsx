import React from 'react'
import brand1 from './../../../assets/img/brand1.png'
import brand2 from './../../../assets/img/brand2.png'
import brand3 from './../../../assets/img/brand3.png'
import brand4 from './../../../assets/img/brand4.png'
import brand5 from './../../../assets/img/brand5.png'
import brand6 from './../../../assets/img/brand6.png'

const Brands = () => {
	return (
		<div className="brands">
		<div className="container">
			<div className="brands__title">Представленные бренды</div>

			<div className="brands__block">
				<img src={brand1} alt="" className="brands__block-img" />
				<img src={brand2} alt="" className="brands__block-img" />
				<img src={brand3} alt="" className="brands__block-img" />
				<img src={brand4} alt="" className="brands__block-img" />
				<img src={brand5} alt="" className="brands__block-img" />
				<img src={brand6} alt="" className="brands__block-img" />
			</div>
		</div>
	</div>
	)
}

export default Brands
