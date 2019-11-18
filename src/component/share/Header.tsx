import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/topics">Topics</Link>
			</li>
			<li>
				<Link to="/day/one">Day One</Link>
			</li>
		</ul>
	);
};

export default Header;
