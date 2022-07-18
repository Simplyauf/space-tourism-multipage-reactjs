import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./overallHomePage";
import TechnologyPage from "../technologypage/overallTechnologyPage";
import DestinationPage from "../destinationpage/OverallDestinationPage";
import CrewPage from "../crewpage/overallCrewPage";

export const NavLinksRoutesSetup = ({ entireSectionParentElement }) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage entireSectionParentElement={entireSectionParentElement} />} />
				<Route path="/technology" element={<TechnologyPage entireSectionParentElement={entireSectionParentElement} />} />
				<Route path="/destinations" element={<DestinationPage entireSectionParentElement={entireSectionParentElement} />} />
				<Route path="/crew" element={<CrewPage entireSectionParentElement={entireSectionParentElement} />} />
				<Route path="*" />
			</Routes>
		</>
	);
};
