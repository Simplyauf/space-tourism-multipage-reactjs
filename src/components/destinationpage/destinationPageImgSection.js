import { data } from "../data";
import "../../index.css";
import { motion } from "framer-motion";

export const DestinationImgSection = ({ currentImgUrl }) => {
  console.log(currentImgUrl);

  return (
    <div class="w-[53%] tablet:w-[41%] md:w-[37%] lg:w-[60%] min-h-[227px] tablet:min-h-[235px]  mdHeight:h-[280px] lgHeight:h-[310px] mt-4 lg:mt-16 mx-auto relative">
      {data.destinations.map((destinationData) => {
        const { images, name } = destinationData;
        return (
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`${
              images.png === currentImgUrl
                ? "current-destinationPage-img-tab destinationPage-img-tab"
                : "destinationPage-img-tab"
            }`}
            src={images.png}
            alt={name}
          />
        );
      })}
    </div>
  );
};

// {images.png && (
//     <motion.img
//       ref={ref}
//       initial="hidden"
//       animate={control}
//       variants={visibleVariant}
//       transition={{ type: "spring", stiffness: 100 }}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.9 }}
//       class="w-[100%] h-[100%] mx-auto current-tab -img"
//       src={images.png}
//       alt="destination-img"
//     />
//   )}
