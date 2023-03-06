import React from 'react'
import './marketPlace.css'

const MarketPlace = () => {
	return (
		<div className="marketPlace">
			<h1>Explore the marketplace</h1>
			<div className="items">
				<div className="item">
					<img src="/images/graphics-design.svg" alt="" />
					<hr />
					<p>Graphics & Design</p>
				</div>
				<div className="item">
					<img src="/images/online-marketing.svg" alt="" />
					<hr />
					<p>Digital Marketing</p>
				</div>
				<div className="item">
					<img src="/images/writing-translation.svg" alt="" />
					<hr />
					<p>Writing & Translation</p>
				</div>
				<div className="item">
					<img src="/images/video-animation.svg" alt="" />
					<hr />
					<p>Video & Animation</p>
				</div>
				<div className="item">
					<img src="/images/music-audio.svg" alt="" />
					<hr />
					<p>Music & Audio</p>
				</div>
				<div className="item">
					<img src="/images/programming.svg" alt="" />
					<hr />
					<p>Programming & Tech</p>
				</div>
				<div className="item">
					<img src="/images/business.svg" alt="" />
					<hr />
					<p>Business</p>
				</div>
				<div className="item">
					<img src="/images/lifestyle.svg" alt="" />
					<hr />
					<p>Lifestyle</p>
				</div>
				<div className="item">
					<img src="/images/data.svg" alt="" />
					<hr />
					<p>Data</p>
				</div>
				<div className="item">
					<img src="/images/photography.svg" alt="" />
					<hr />
					<p>Photography</p>
				</div>
			</div>
		</div>
	)
}

export default MarketPlace
