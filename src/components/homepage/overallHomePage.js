import React from "react";
import "../../index.css";
import { useNavigate } from "react-router";

const Homepage = ({ entireSectionParentElement }) => {
  // check if bodyDom id is set to a certain page to apply background Img
  if (entireSectionParentElement) {
    entireSectionParentElement.id = "homePage";
  }

  let navigate = useNavigate();

  const handleExploreBtn = () => {
    navigate("/destinations");
  };

  return (
    <>
      <main class="flex flex-col mt-6 mdHeight:mt-[12%] lgHeight:mt-[16%] md:flex md:flex-row md:mt-40 laptop:mt-20 md:justify-between md:w-[82%] md:mx-auto md:items-end">
        <article class="md:flex md:flex-col md:items-start md:w-[70%]">
          <h3 class="mx-auto text-center font-Barlow text-[18px] text-primaryColor tracking-[1.75px] md:mx-0 md:tracking-[2px] lg:tracking-[2.75px] lg:text-[24px] md:text-[21px]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 class="text-[100px] font-Bellefair mb-4 text-center md:mx-0 md:text-[110px] lg:text-[120px] md:mb-0 laptop:text-[150px]">
            SPACE
          </h1>
          <p class="w-[80%] mx-auto text-center text-[16px] text-primaryColor font-Barlow leading-[25px] md:mx-0 md:max-w-[365px] md:text-[17px] md:w-[65%] md:text-justify lg:text-[18px] laptop:text-[20px]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </article>

        <button
          class="hover:ring-[52px] hover:transition-all hover:duration-300 hover:ease-linear md:hover:ring-[72px] hover:ring-opacity-10 hover:ring-secondaryColor mx-auto mt-12 text-black bg-white w-40 h-40 rounded-[50%] text-[22px] tracking-[1.5px] font-normal lg:w-60 lg:h-60 lgHeight:w-72 lgHeight:h-72 md:w-48 md:h-48 explore-btn"
          onClick={handleExploreBtn}
        >
          EXPLORE
        </button>
      </main>
    </>
  );
};

export default Homepage;
