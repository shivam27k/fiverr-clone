/* eslint-disable react/prop-types */
import React from 'react'
import './slide.css'
import Slider from 'infinite-react-carousel'

const Slide = ({ children, slidesToShow, arrowsScroll, centerPadding }) => {
	return (
		<div className="slide">
			<div className="container">
				<h1>Popular professional services</h1>

				<Slider
					slidesToShow={slidesToShow}
					arrowsScroll={arrowsScroll}
					centerPadding={centerPadding}
					className="slider"
				>
					{children}
				</Slider>
			</div>
		</div>
	)
}

export default Slide
