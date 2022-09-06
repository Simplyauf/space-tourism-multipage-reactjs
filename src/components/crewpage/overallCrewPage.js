import React from "react";
import { useState, useEffect } from "react";
import "../../index.css";
import { data } from "../data";
import { motion } from "framer-motion";
import { CrewPageImgSection } from "./CrewPageImgSection";

const CrewPage = ({ entireSectionParentElement }) => {
  const [crewPageDatas, setCrewPageDatas] = useState({ name: "", images: "", role: "", bio: "" });
  const { name, images, role, bio } = crewPageDatas;
  console.log(entireSectionParentElement);

  // check if bodyDom id is set to a certain page to apply background Img
  if (entireSectionParentElement) {
    entireSectionParentElement.id = "crewPage";
  }

  useEffect(() => {
    console.log(entireSectionParentElement);
    setCrewPageDatas(data.crew[0]);
    console.log(data.crew[0]);
  }, []);

  const handleTabsClick = (e) => {
    console.log(e.target);
    e.currentTarget.parentElement.childNodes.forEach((crewTabElem) => {
      crewTabElem.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    const ObjOfTheTabClicked = data.crew.find((crewData, index) => {
      console.log(typeof index);
      return e.currentTarget.dataset.id === index.toString();
    });
    console.log(ObjOfTheTabClicked);
    setCrewPageDatas(ObjOfTheTabClicked);
  };
  return (
    <main class="lg:flex lg:flex-col lg:flex-grow mdHeight:mt-[9%] lgHeight:mt-[12%]">
      <li class="mt-6 py-1 text-center tablet:text-left tablet:ml-[10%] md:ml-[10%] md:text-left text-[28px] lg:mt-8 font-Barlow">
        <span class="opacity-50 text-secondaryColor">02</span>
        <span class="ml-2 text-secondaryColor tracking-[2.75px]" href="#">
          {" "}
          MEET YOUR CREW{" "}
        </span>
      </li>

      <div class="lg:w-[80%] lg:flex items-start lg:justify-self-end lg:flex-grow lg:flex-row-reverse lg:mx-auto">
        <CrewPageImgSection currentImgUrl={images.png} />
        <article class="lg:w-[70%] mt-8 lg:flex lg:items-start lg:flex-col lg:mt-8 laptop:mt-12 lg:justify-between pb-4">
          <div class="flex items-center justify-center order-2 gap-4 mb-8 lg:mb-0 lg:items-start crewPageTabs-cont lg:mt-12 laptop:mt-20">
            <button class="crew-tabs-btn active" data-id="0" onClick={handleTabsClick}></button>
            <button class="crew-tabs-btn" data-id="1" onClick={handleTabsClick}></button>
            <button class="crew-tabs-btn" data-id="2" onClick={handleTabsClick}></button>
            <button class="crew-tabs-btn" data-id="3" onClick={handleTabsClick}></button>
          </div>

          <article class="">
            <div class="text-center lg:text-left">
              <span class="uppercase opacity-50 text-secondaryColor crew-role lg:text-[30px] tracking-[1.15px]">
                {" "}
                {role}{" "}
              </span>
              <h2 class="text-[32px] lg:text-[40px] text-white crew-name uppercase">{name}</h2>
            </div>
            <div class="w-[80%] lg:w-[70%] mx-auto mt-4 laptop:mt-[20px] lg:mx-0">
              <p class="text-center lg:text-left text-[16px] lg:text-[18px] laptop:text-[20px] leading-[30px] font-Barlow text-primaryColor crew-bio">
                {bio}
              </p>
            </div>
          </article>
        </article>
      </div>
    </main>
  );
};

export default CrewPage;
