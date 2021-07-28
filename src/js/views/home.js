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
							src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/138628800_10106241532815188_8283432960768852715_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_ohc=cicdR8f94N0AX-Q8oLB&_nc_ht=scontent-mia3-2.xx&oh=951f32ed29b6a34b536d5f47395b602a&oe=612800AF"
							alt="Taking pics"
							width={1255}
							height={800}
						/>
						<figcaption>Photography is magic</figcaption>
					</figure>
				</div>
			</div>
		</div>
		<figure className="snip1336">
			<img
				src="https://m.22slides.com/jhernandez/sonyrx100vi9-6878.jpg?auto=format&w=800&s=d25b5d75b9ed6af660da40a435c50299"
				alt="sample87"
			/>
			<figcaption>
				<img
					src="https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/10258397_10202747575905233_1190359196392498148_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=nQy2wYu2HnUAX-GFCSH&_nc_ht=scontent-mia3-2.xx&oh=45bc48a3a782f87a7731a508f755eb6c&oe=6125AE74"
					alt="profile-sample4"
					className="profile"
				/>
				<h2>
					John Joe
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
				<a href="https://www.instagram.com/royznov/" className="info">
					Fallow
				</a>
			</figcaption>
		</figure>
		{/* this is a porlaroid picture */}
		<div className="wrapper">
			<div className="item">
				<div className="fuji">
					<img src="https://www.rangefinderonline.com/wp-content/uploads/2020/12/51_classic_romantic_london_uk_wedding.jpg" />
					<a href="/gallery" className="follow">
						Weddings
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://www.gannett-cdn.com/presto/2020/12/27/PAPN/97e1e944-e3fc-4d6e-a60b-a7f3060e03eb-APC_Kaukauna_Grads_7348_072920_wag.jpg?width=660&height=462&fit=crop&format=pjpg&auto=webp" />
					<a href="/gallery" className="follow">
						Grads
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://images.unsplash.com/photo-1565227829247-fed4f80f6814?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
					<a href="/gallery" className="follow">
						Modling Photo
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://joeandrobin.com/wp-content/uploads/2016/04/Rocky-Mountain-National-Park-Engagement-Session-I-Said-Yes-on-Hand.jpg" />
					<a href="/gallery" className="follow">
						Engagement Photo
					</a>
				</div>
			</div>
			<div className="item">
				<div className="fuji">
					<img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/138529245_10106241533433948_6179580000927032109_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=mlINRrmT8r4AX-O-ATy&tn=a01Uh_sVzYDwwsDJ&_nc_ht=scontent-mia3-2.xx&oh=ed4804d90371d2dab6eed7806d024b26&oe=60FDC4D7" />
					<a href="/gallery" className="follow">
						New Born
					</a>
				</div>
			</div>
			<iframe width="1200" height="345" src="https://www.youtube.com/embed/rEyz5SZBJbg?autoplay=1&mute=1" />
		</div>
	</div>
);
