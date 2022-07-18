import React from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

export const NavLinks = () => {
	return (
		<ul class="navbar pt-20 tablet:pt-0 md:pt-0 flex flex-col fixed z-10 gap-8 pr-8 pl-12 bg-[#979797] bg-opacity-20 backdrop-blur-[3px] text-white w-[57%] h-[100vh] translate-x-[100%] top-0 right-0 tablet:flex-row tablet:justify-center tablet:h-[80px] lg:h-[90px] tablet:w-[75%] tablet:relative tablet:translate-x-[0%] tablet:px-8  md:flex-row lg:flex-row md:justify-center md:h-[80px] md:w-[65%] md:relative md:translate-x-[0%] md:px-12 lg:w-[62%] lg:justify-center lg:px-0 lg:gap-12">
			<NavLink to="/" className="navlink" data-id="Home">
				<span class="page-no">00</span>
				<span data-id="home">Home</span>
			</NavLink>
			<NavLink to="/destinations" className="navlink">
				<span class="page-no">01</span>
				<span data-id="destinations">Destination</span>
			</NavLink>
			<NavLink to="/crew" className="navlink">
				<span class="page-no">02</span>
				<span data-id="crew"> Crew</span>
			</NavLink>
			<NavLink to="/technology" className="navlink">
				<span class="page-no">03</span>
				<span data-id="technology">Technology</span>
			</NavLink>
		</ul>
	);
};
