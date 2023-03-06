import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
	const [active, setActive] = useState(false)
	const [open, setOpen] = useState(false)

	const location = useLocation()

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', isActive)

		return () => {
			window.removeEventListener('scroll', isActive)
		}
	}, [])

	const currentUser = {
		id: 1,
		username: 'John Doe',
		isSeller: true,
	}

	// const currentUser = false

	return (
		<div
			className={
				active || location.pathname !== '/' ? 'navbar active' : 'navbar'
			}
		>
			<div className="container">
				<div className="logo">
					<Link to="/" className="link">
						<span className="text">fiverr</span>
					</Link>
					<span className="dot">.</span>
				</div>
				<div
					className={
						currentUser ? 'links currentUser-links' : 'links'
					}
				>
					<span>Fiverr Business</span>
					<span>Explore</span>
					<span>English</span>
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{!currentUser && <span>Sign In</span>}
					{!currentUser && (
						<button
							className={
								active || location.pathname !== '/'
									? 'join-button active-btn'
									: 'join-button'
							}
						>
							Join
						</button>
					)}
					{currentUser && (
						<div className="user" onClick={() => setOpen(!open)}>
							<img
								src="./images/user-img-2.png"
								alt="profile-image"
							/>
							<span>{currentUser?.username}</span>
							{open && (
								<div className="options">
									{currentUser?.isSeller && (
										<>
											<Link
												className="link"
												to={`/mygigs`}
											>
												Gigs
											</Link>
											<Link className="link" to={`/add`}>
												Add New Gig
											</Link>
										</>
									)}
									<Link className="link" to={`/orders`}>
										Orders
									</Link>
									<Link className="link" to={`/messages`}>
										Messages
									</Link>
									<Link className="link" to={`/`}>
										Log-out
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{(active || location.pathname !== '/') && (
				<>
					<hr />
					<div className="menu">
						<Link className="link" to={`/`}>
							Graphics & Design
						</Link>
						<Link className="link" to={`/`}>
							Video & Animation
						</Link>
						<Link className="link" to={`/`}>
							Writing & Translation
						</Link>
						<Link className="link" to={`/`}>
							AI Services
						</Link>
						<Link className="link" to={`/`}>
							Digital Marketing
						</Link>
						<Link className="link" to={`/`}>
							Music & Audio
						</Link>
						<Link className="link" to={`/`}>
							Programming & Tech
						</Link>
						<Link className="link" to={`/`}>
							Business
						</Link>
						<Link className="link" to={`/`}>
							Lifestyle
						</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Navbar
