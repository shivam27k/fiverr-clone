import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container-footer">
				<div className="top">
					<div className="item">
						<h2>Categories</h2>
						<Link to="/" className="link-footer">
							Graphics & Design
						</Link>
						<Link to="/" className="link-footer">
							Digital Marketing
						</Link>
						<Link to="/" className="link-footer">
							Writing & Translation
						</Link>
						<Link to="/" className="link-footer">
							Video & Animation
						</Link>
						<Link to="/" className="link-footer">
							Music & Audio
						</Link>
						<Link to="/" className="link-footer">
							Programming & Tech
						</Link>
						<Link to="/" className="link-footer">
							Data
						</Link>
						<Link to="/" className="link-footer">
							Business
						</Link>
						<Link to="/" className="link-footer">
							Lifestyle
						</Link>
						<Link to="/" className="link-footer">
							Photography
						</Link>
						<Link to="/" className="link-footer">
							Sitemap
						</Link>
					</div>
					<div className="item">
						<h2>About</h2>
						<Link to="/" className="link-footer">
							Careers
						</Link>
						<Link to="/" className="link-footer">
							Press & News
						</Link>
						<Link to="/" className="link-footer">
							Partnerships
						</Link>
						<Link to="/" className="link-footer">
							Privacy Policy
						</Link>
						<Link to="/" className="link-footer">
							Terms of Service
						</Link>
						<Link to="/" className="link-footer">
							Intellectual Property Claims
						</Link>
						<Link to="/" className="link-footer">
							Investor Relations
						</Link>
					</div>
					<div className="item">
						<h2>Support</h2>
						<Link to="/" className="link-footer">
							Help & Support
						</Link>
						<Link to="/" className="link-footer">
							Trust & Safety
						</Link>
						<Link to="/" className="link-footer">
							Selling on Fiverr
						</Link>
						<Link to="/" className="link-footer">
							Buying on Fiverr
						</Link>
					</div>
					<div className="item">
						<h2>Community</h2>
						<Link to="/" className="link-footer">
							Customer Success Stories
						</Link>
						<Link to="/" className="link-footer">
							Community Hub
						</Link>
						<Link to="/" className="link-footer">
							Forum
						</Link>
						<Link to="/" className="link-footer">
							Events
						</Link>
						<Link to="/" className="link-footer">
							Blog
						</Link>
						<Link to="/" className="link-footer">
							Influencers
						</Link>
						<Link to="/" className="link-footer">
							Affiliates
						</Link>
						<Link to="/" className="link-footer">
							Podcast
						</Link>
						<Link to="/" className="link-footer">
							Invite a Friend
						</Link>
						<Link to="/" className="link-footer">
							Become a Seller
						</Link>
						<Link to="/" className="link-footer">
							Community Standards
						</Link>
					</div>
					<div className="item">
						<h2>More From Fiverr</h2>
						<Link to="/" className="link-footer">
							Fiverr Business
						</Link>
						<Link to="/" className="link-footer">
							Fiverr Pro
						</Link>
						<Link to="/" className="link-footer">
							Fiverr Logo Maker
						</Link>
						<Link to="/" className="link-footer">
							Fiverr Guides
						</Link>
						<Link to="/" className="link-footer">
							Get Inspired
						</Link>
						<Link to="/" className="link-footer">
							Fiverr Select
						</Link>
						<Link to="/" className="link-footer">
							ClearVoice
						</Link>
						<Link to="/" className="link-footer">
							Fiverr Workspace
						</Link>
						<Link to="/" className="link-footer">
							Learn
						</Link>
						<Link to="/" className="link-footer">
							Working Not Working
						</Link>
					</div>
				</div>
				<div className="bottom">
					<div className="left">
						<h1>fiverr.</h1>
						<span>© Fiverr International Ltd. 2023 </span>
					</div>
					<div className="right">
						<div className="social">
							<img src="/images/twitter.png" alt="" />
							<img src="/images/facebook.png" alt="" />
							<img src="/images/linkedin.png" alt="" />
							<img src="/images/pinterest.png" alt="" />
							<img src="/images/instagram.png" alt="" />
						</div>
						<div className="link">
							<img src="/images/language.png" alt="" />
							<span>English</span>
						</div>
						<div className="link">
							<img src="/images/dollar-icon.png" alt="" />
							<span>USD</span>
						</div>
						<img src="/images/accessibility-icon.png" className="accessibility"alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
