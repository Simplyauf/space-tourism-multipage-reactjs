import { data } from "../data";
import "../../index.css";

export const CrewPageImgSection = ({ currentImgUrl }) => {
  return (
    <div class="mt-8 mx-auto w-[80%] h-[250px] tablet:h-[300px] border-opacity-50 border-b-2 border-white lg:border-transparent lg:w-[70%] lg:h-[420px] mdHeight:h-[460px] lgHeight:h-[500px] lg:mt-0 lg:self-end relative">
      {data.crew.map((crewData) => {
        const { images, name } = crewData;
        return (
          <img
            className={`${
              images.png === currentImgUrl ? "current-crewPage-img-tab crewPage-img-tabs" : "crewPage-img-tabs"
            }`}
            src={images.png}
            alt={name}
          />
        );
      })}
    </div>
  );
};
