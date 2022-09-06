import { data } from "../data";
import "../../index.css";

export const TechnologyPageImgSection = ({ currentImgUrl, name }) => {
  return (
    <div class="my-6 lg:w-[200px] w-[100%]  lg:flex-[40%] lg:h-[420px]">
      <img className="technologyPage-img-tabs" src={currentImgUrl} alt={name} />
    </div>
  );
};
