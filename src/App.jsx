import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './app.css'

function App() {
	const Layout = () => {
		return (
			<div className="app">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		)
	}
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/add',
					element: <Add />,
				},
				{
					path: '/gig/:id',
					element: <Gig />,
				},
				{
					path: '/gigs',
					element: <Gigs />,
				},
				{
					path: '/mygigs',
					element: <MyGigs />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/message/:id',
					element: <Message />,
				},
				{
					path: '/messages',
					element: <Messages />,
				},
			],
		},
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
