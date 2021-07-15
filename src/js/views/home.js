import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div>
			<div>
				{/* <div className="jumbotron jumbotron-fluid"> */}
				<div className="container">
					{/* <h1 className="display-4">Juan Hernadez photography</h1> */}
					{/* <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
					{/* </div> */}
				</div>

				<div id="slider">
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/anrepark231217-14-6230.jpg?auto=format&w=1200&s=227975a1771859cca0c14d380e842df1"
							alt="Juicy"
							width={1500}
							height={800}
						/>
						<figcaption>Can be Juicy !</figcaption>
					</figure>
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/20200812-dscf1067-5043.jpg?auto=format&w=1000&s=84339576f0622c1dd4cc44f349cae0a3"
							alt="Bridge"
							width={1255}
							height={800}
						/>
						<figcaption>Iron piece between two part of land</figcaption>
					</figure>
					<figure className="slide_img">
						<img
							src="https://m.22slides.com/jhernandez/20200917-dscf2468-1017.jpg?auto=format&w=1000&s=385b92109fa43d424e096a8c4f960587"
							alt="Taking pics"
							width={1255}
							height={800}
						/>
						<figcaption>Photography is magic</figcaption>
					</figure>
				</div>
			</div>
		</div>
		{/* <figure className="snip1336">
			<img
				src="https://m.22slides.com/jhernandez/sonyrx100vi9-6878.jpg?auto=format&w=800&s=d25b5d75b9ed6af660da40a435c50299"
				alt="sample87"
			/>
			<figcaption>
				<img
					src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/102414262_10158526496309468_7766513217142245399_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=y2VS0Jf7w-IAX-8ZeHp&_nc_oc=AQmjrePG_p_vnocaeg-dAp8ATtv5wYrK143N5xeBoPggoFY4HLJw9gas0PH6GVAhv8agychG15OKRsK46OO0425S&_nc_ht=scontent-mia3-2.xx&oh=7d7899980fc72f934314b7cd90bfb9ba&oe=60E6BCEB"
					alt="profile-sample4"
					className="profile"
				/>
				<h2>
					Juan Hernandez
					<span>Photagrapther</span>
				</h2>
				<p>
					Thank you for visiting my page. I am an experienced photographer who has worked as a music
					photojournalist and a general life photographer for MANY years, you can see that work In this link
					to my other page on this button
				</p>
				<a href="/demo" className="follow">
					More Bio
				</a>
				<a href="https://www.facebook.com/Juanpointeight" className="info">
					Fallow
				</a>
			</figcaption>
		</figure> */}
		{/* this is a porlaroid picture */}
		<div className="wrapper">
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/186558376_10159485933904468_5380508424883847612_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z1R5L__o-DwAX_6nl8L&tn=a01Uh_sVzYDwwsDJ&_nc_ht=scontent-mia3-2.xx&oh=2a66310908651e16a8488c868b01a8f0&oe=60E704AA" />
					<a href="/gallery" className="follow">
						Weddings
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/186558538_10159485933429468_9132221383894745231_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=c1NASbva4jwAX_j5cSy&tn=a01Uh_sVzYDwwsDJ&_nc_ht=scontent-mia3-1.xx&oh=1fb15a62dd7645e5e3c2ddabc7328e3a&oe=60E52DFF" />
					<a href="/gallery" className="follow">
						Grads
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/153948142_10159272657319468_6901761733791230778_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=k02dND7u62IAX9xYWtE&_nc_oc=AQlbCZ_7TDpMF2Tnqkgp969ShvPXXrCY3Z_UL7oMMcqd40LbEibXwIr-oGYsLSLIMBzuZm9OKz71LZxzEchLXYPe&tn=a01Uh_sVzYDwwsDJ&_nc_ht=scontent-mia3-2.xx&oh=3e9972e57412450aa31c91fedf5129ea&oe=60E69D9E" />
					<a href="/gallery" className="follow">
						Business
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/106018496_10158601316149468_4844774075256126301_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ETsREejEDNgAX9Spj4l&_nc_ht=scontent-mia3-2.xx&oh=d84654d6053c8b417314032c9132dbea&oe=60E8374C" />
					<a href="/gallery" className="follow">
						Engagement Photo
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/131432266_10221120473496190_7739920163149701449_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=MJSA26ANt6kAX-nG3bp&_nc_ht=scontent-mia3-2.xx&oh=ff14a86f5469a462b75ac04802c47992&oe=60E7FBAB" />
					<a href="/gallery" className="follow">
						New Born
					</a>
				</div>
			</div>
			<iframe width="1200" height="345" src="https://www.youtube.com/embed/rEyz5SZBJbg?autoplay=1&mute=1" />
		</div>
	</div>
);
