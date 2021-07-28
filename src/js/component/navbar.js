import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
export const Navbar = () => {
	return (
		<header role="banner">
			<img
				id="logo-main"
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
				width={200}
				alt="Logo Thing main logo"
			/>
			<div>
				<div className="text-center center-block">
					<p className="txt-railway">-John Joe PHOTOGRAPHY -</p>

					<a href="https://www.facebook.com/bootsnipp">
						<i id="social-fb" className="fab fa-facebook-square" />
					</a>
					<a href="https://twitter.com/bootsnipp">
						<i id="social-tw" className="fab fa-twitter-square" />
					</a>
					<a href="https://www.instagram.com/royznov/">
						<i id="social-gp" className="fab fa-instagram" />
					</a>
					<a href="mailto:bootsnipp@gmail.com">
						<i id="social-em" className="far fa-envelope" />
					</a>
				</div>
				<div>
					<input type="checkbox" id="sidebartoggler" defaultValue />
					<div className="page-wrap">
						<label htmlFor="sidebartoggler" className="toggle">
							☰
						</label>
						<ul>
							<li className="nav-item pl-1">
								<a className="nav-link" href="/">
									<i className="fa fa-home fa-fw mr-1" />
									Home
								</a>
							</li>

							<li className="nav-item pl-1">
								<a className="nav-link" href="/gallery">
									<i className="fa fa-info-circle fa-fw mr-1" />
									Gallery
								</a>
							</li>
							<li className="nav-item active pl-1">
								<a className="nav-link" href="#">
									<i className="fa fa-th-list fa-fw mr-1" />
									Blog
								</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="/demo">
									<i className="far fa-smile-wink" />
									About me
								</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="/contact">
									<i className="fa fa-sign-in fa-fw mr-1" />
									Sign in
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* Social Footer, Single Coloured */}
				{/* Include Font Awesome Stylesheet in Header */}
				<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
				{/* // */}
			</div>

			{/* nav bar problem */}
			{/* <div> */}
			{/* <header> */}
			{/*- Navbar -*/}
			{/* <nav className="navbar navbar-expand-lg">
						<div className="container">
							<a className="navbar-brand text-white" href="#">
								<i className="fas fa-camera-retro" />
								royznov Photography
							</a> */}

			{/* <div className="collapse navbar-collapse" id="nvbCollapse">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item pl-1">
										<a className="nav-link" href="/">
											<i className="fa fa-home fa-fw mr-1" />
											Home
										</a>
									</li>
									<li className="nav-item active pl-1">
										<a className="nav-link" href="#">
											<i className="fa fa-th-list fa-fw mr-1" />
											Blog
										</a>
									</li>
									<li className="nav-item pl-1">
										<a className="nav-link" href="/gallery">
											<i className="fa fa-info-circle fa-fw mr-1" />
											Gallery
										</a>
									</li>
									<li className="nav-item pl-1">
										<a className="nav-link" href="/demo">
											<i className="fa fa-user-plus fa-fw mr-1" />
											About me
										</a>
									</li>
									<li className="nav-item pl-1">
										<a className="nav-link" href="#">
											<i className="fa fa-sign-in fa-fw mr-1" />
											Sign in
										</a>
									</li>
								</ul>
							</div> */}
			{/* </div>
					</nav> */}
			{/*# Navbar #*/}
			{/* </header> */}
			{/*- Footer -*/}
			{/* </div> */}
		</header>
	);
};
