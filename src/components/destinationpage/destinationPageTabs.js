import React from "react";
import "../../index.css";

export const DestinationPageTabs = ({ handleTabsClick }) => {
	return (
		<ul class="flex justify-center gap-6 pt-2 mt-4 destination-pages">
			<li to="" class="destination-tab-page active" onClick={handleTabsClick} data-id="Moon">
				<span>MOON</span>
			</li>
			<li to="" class="destination-tab-page" data-id="Mars" onClick={handleTabsClick}>
				<span href="#">MARS</span>
			</li>
			<li to="" class="destination-tab-page" data-id="Europa" onClick={handleTabsClick}>
				<span href="#">EUROPA</span>
			</li>
			<li to="" class="destination-tab-page" data-id="Titan" onClick={handleTabsClick}>
				<span>TITAN</span>
			</li>
		</ul>
	);
};
