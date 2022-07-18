import "./index.css";
import "./App.css";
import { useRef, useContext, useEffect, useState } from "react";
import { Header } from "./components/homepage/Header";
import { NavLinksRoutesSetup } from "./components/homepage/navLinksRouterSetup";

function App() {
	const [entireSectionParentElement, setEntireSectionParentElement] = useState();
	let entireSectionRef = useRef(null);

	useEffect(() => {
		console.log(entireSectionRef.current === true);
		entireSectionRef.current && setEntireSectionParentElement(entireSectionRef.current);
		console.log(entireSectionRef);
	}, []);
	console.log(entireSectionParentElement);
	console.log(entireSectionRef);

	return (
		<div className="flex flex-col entire-App" id="homePage" ref={entireSectionRef}>
			<Header />
			<section className="Main-section lg:flex lg:flex-col lg:justify-self-end lg:flex-grow">
				<NavLinksRoutesSetup entireSectionParentElement={entireSectionParentElement} />
			</section>
		</div>
	);
}

export default App;
