import React from "react";
import { Card } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="ps-3 pe-3 pt-3 pb-3">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};

export default Home;
