import React from 'react';
import './style.scss'

const Header = () => {
	return (
		<nav>
			<ul className="nav">
				<li><h1>Shortly</h1></li>
				<li><p>Featuring</p></li>
				<li><p>Prices</p></li>
				<li><p>Resources</p></li>
			</ul>
			<ul className="btns">
				<li><button><p>Login</p></button></li>
				<li><button className="signUpBtn"><p>Sign Up</p></button></li>
			</ul>
		</nav>
	);
}

export default Header;