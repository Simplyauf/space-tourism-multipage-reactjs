import React from "react";
import { useState, useEffect } from "react";
import "../../index.css";
import { data } from "../data";

const TechnologyPage = ({ entireSectionParentElement }) => {
	const [technologyPageDatas, setTechnologyPageDatas] = useState({ name: "", images: "", description: "" });

	const { name, images, description } = technologyPageDatas;
	console.log(technologyPageDatas);

	const [ImageUrl, setImageUrl] = useState("");

	console.log(images);
	console.log(ImageUrl);

	if (entireSectionParentElement) {
		entireSectionParentElement.id = "technologyPage";
	}

	useEffect(() => {
		const { landscape, portrait } = images;

		if (window.innerWidth >= 1024) {
			setImageUrl(portrait);
			console.log("i");
		} else if (window.innerWidth < 1024) {
			setImageUrl(landscape);
		}

		window.addEventListener("resize", (e) => {
			if (e.currentTarget.innerWidth >= 1024) {
				setImageUrl(portrait);
				console.log("i");
			} else if (e.currentTarget.innerWidth < 1024) {
				setImageUrl(landscape);
			}
		});
		console.log(images);
		console.log(ImageUrl);
	}, [images, ImageUrl]);

	useEffect(() => {
		setTechnologyPageDatas(data.technology[0]);
	}, []);

	const handleTabsClick = (e) => {
		console.log(e.currentTarget.parentElement.childNodes);
		e.currentTarget.parentElement.childNodes.forEach((technologyTabsElemContainer) => {
			technologyTabsElemContainer.classList.remove("active");
		});

		e.currentTarget.classList.add("active");

		const ObjOfTheTabClicked = data.technology.find((technologyData, index) => {
			return e.currentTarget.dataset.id === index.toString();
		});
		console.log(ObjOfTheTabClicked);
		setTechnologyPageDatas(ObjOfTheTabClicked);
	};
	return (
		<main class="mdHeight:mt-[5%] lgHeight:mt-[10%]">
			<li class="mt-6 py-1 lg:text-left lg:ml-[10%]  text-center text-[28px] font-Barlow ">
				<span class="opacity-50 text-secondaryColor">03</span> <span class=" ml-2 text-secondaryColor  tracking-[2.75px]">SPACE LAUNCH 101</span>
			</li>
			<div class=" lg:flex lg:flex-row-reverse lg:ml-[5%] lg:gap-[5%]">
				<div class="my-6 lg:w-[200px] w-[100%]  lg:flex-[40%] lg:h-[420px]">
					<img class=" object-cover W-[100%] min-w-[100%]  h-[100%]  technology-img" src={ImageUrl} alt="technology-img" />
				</div>

				<article class="lg:flex-[60%] lg:flex lg:gap-[10%] lg:pt-20 lg:items-start ">
					<div class="flex justify-center gap-8 tabs-container lg:flex-col lg:justify-end">
						<button class="technology-tabs active" data-id="0" onClick={handleTabsClick}>
							1
						</button>
						<button class="technology-tabs" data-id="1" onClick={handleTabsClick}>
							2
						</button>
						<button class="technology-tabs" data-id="2" onClick={handleTabsClick}>
							3
						</button>
					</div>

					<article class="flex flex-col gap-6 mt-6 lg:items-start lg:mt-0">
						<div class="text-center lg:text-left">
							<span class="text-primaryColor  tracking-[1.75px] text-[14px] font-Barlow">THE TERMINOLOGY...</span>
							<h2 class="text-[32px] uppercase font-Bellefair text-secondaryColor lg:text-[56px] technology-name">{name}</h2>
						</div>
						<div class=" w-[80%]   mx-auto lg:mx-0 lg:w-[75%]">
							<p class=" text-center lg:text-left text-[16px] lg:text-[18px] leading-[30px] tracking-[1px] font-Barlow text-primaryColor technology-description">{description}</p>
						</div>
					</article>
				</article>
			</div>
		</main>
	);
};

export default TechnologyPage;
