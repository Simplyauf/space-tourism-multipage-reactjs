import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DestinationPageTabs } from "./destinationPageTabs";
import { data } from "../data";
import { motion } from "framer-motion";
import { useAnimateElemInView } from "../../utils/useAnimateElemInView";

const DestinationPage = ({ entireSectionParentElement }) => {
  const [destinationPageDatas, setDestinationPageDatas] = useState({
    name: "",
    images: "",
    description: "",
    distance: "",
    travel: "",
  });
  const { name, images, description, distance, travel } = destinationPageDatas;

  if (entireSectionParentElement) {
    entireSectionParentElement.id = "destinationsPage";
  }

  useEffect(() => {
    setDestinationPageDatas(data.destinations[0]);
    console.log(data.destinations[0]);
  }, []);

  //use animate hooks
  const [ref, control, visibleVariant] = useAnimateElemInView();

  const handleTabsClick = (e) => {
    e.currentTarget.parentElement.childNodes.forEach((destinationTabsElemContainer) => {
      destinationTabsElemContainer.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    const ObjOfTheTabClicked = data.destinations.find((destinationData, index) => {
      return e.currentTarget.dataset.id === destinationData.name;
    });
    console.log(ObjOfTheTabClicked);
    setDestinationPageDatas(ObjOfTheTabClicked);
  };

  return (
    <main class="lg:flex lg:w-[90%] lg:justify-between lg:mx-auto lg:gap-[5%]">
      <article class="lg:w-[50%]">
        <li class="mt-6 py-1 text-center tablet:text-left tablet:ml-[10%] md:ml-[10%] md:text-left lg:py-4 text-[28px] font-Barlow">
          <span class="opacity-50 text-secondaryColor">01</span>
          <span class="ml-2 text-secondaryColor tracking-[2.75px]">PICK YOUR DESTINATION</span>
        </li>
        <div class="w-[57%] h-[227px] tablet:h-[250px] mdHeight:h-[280px] lgHeight:h-[310px] mt-4 lg:mt-16 mx-auto">
          <motion.img
            ref={ref}
            initial="hidden"
            animate={control}
            transition={{ type: "spring", stiffness: 100 }}
            variants={visibleVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            class="w-[100%] h-[100%] mx-auto current-tab-img"
            src={images.png}
            alt="destination-img"
          />
        </div>
      </article>
      <article class="lg:w-[50%] lg:flex lg:flex-col lg:items-start lg:mt-28">
        <DestinationPageTabs handleTabsClick={handleTabsClick} />

        <h1 class="text-center text-[80px] font-Bellefair mt-4 current-tab-title uppercase lg:text-[100px] lg:mt-0">
          {name}
        </h1>

        <p class="w-[80%] mx-auto pb-6 border-opacity-50 border-b-2 border-white mb-6 mt-4 text-center text-[16px] leading-[30px] font-Barlow text-primaryColor current-tab-description lg:mt-0 lg:text-left lg:mx-0 lg:text-[18px] tracking-[1px]">
          {description}
        </p>
        <div class="mt-4 tablet:flex tablet:flex-row tablet:justify-center tablet:gap-[5%] lg:flex-row lg:flex laptop:gap-[15%] lg:gap-[10%] lg:w-[100%]">
          <div class="mb-8 text-center">
            <h2 class="text-[14px] font-Barlow tracking-[2.35px] text-primaryColor">AVG. DISTANCE</h2>
            <span class="text-[28px] font-Bellefair current-tab-distance uppercase"> {distance}</span>
          </div>
          <div class="text-center">
            <h2 class="text-[14px] font-Barlow tracking-[2.35px] text-primaryColor">EST. TRAVEL TIME</h2>
            <span class="text-[28px] font-Bellefair current-tab-travelTime uppercase">{travel}</span>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DestinationPage;
