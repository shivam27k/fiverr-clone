import React from 'react'
import './featured.css'

const Featured = () => {
	return (
		<div className="featured">
			<div className="component">
				<div className="left">
					<h1>
						Find the perfect{' '}
						<span className="italic">freelance</span> services
						<br /> for your business
					</h1>
					<div className="search">
						<div className="searchInput">
							<img
								className="search-img"
								src="./images/search.png"
								alt=""
							/>
							<input
								type="text"
								placeholder='Try "Building Mobile App"'
							/>
						</div>
						<button>Search</button>
					</div>
					<div className="popular">
						<span>Popular:</span>
						<button>Web Design</button>
						<button>Wordpress</button>
						<button>Logo Design</button>
						<button>AI Services</button>
					</div>
				</div>
				<div className="right">
					<img src="./images/ban.png" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Featured
