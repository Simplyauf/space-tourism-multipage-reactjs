import React from "react";
import { useState } from "react";
import { NavLinks } from "./navLinks";
import "../../index.css";
import CloseIcon from "../../icon-close.svg";
import hamburgerIcon from "../../icon-hamburger.svg";
import logoIcon from "../../logo.svg";

export const Header = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(true);
	const isHamburgerOpen = hamburgerOpen || "hiding-nav";
	return (
		<>
			<header>
				<div class={`flex items-center justify-between show-nav ${isHamburgerOpen}`}>
					<div class="mt-4 ml-4 tablet:mt-0 md:mt-0">
						<img class="" src={logoIcon} alt="logo-img" />
					</div>
					<div class="hidden h-[1px] bg-white md:opacity-50 md:w-[5%] md:translate-x-[10%] md:z-20 tablet:hidden md:block md:flex-grow lg:flex-grow "></div>
					<NavLinks hamburgerOpen={hamburgerOpen} />
					{hamburgerOpen ? <img src={hamburgerIcon} className="hamburger-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)} alt="hamburgerIcon" /> : <img src={CloseIcon} className="hamburger-icon" onClick={() => setHamburgerOpen(!hamburgerOpen)} alt="closeIcon" />}
				</div>
			</header>
		</>
	);
};
