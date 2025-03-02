import React from "react";

const AboutCard = ({ img, price1, price2, des1, des2 }) => {
  return (
    <div class="flex items-center justify-between w-full col-span-12 row-span-1 p-5 mb-6 border bg-[#0e212f] xl:p-9 rounded-2xl border-primary md:col-span-6 md:row-span-2">
      <img
        alt="Playing cards"
        loading="lazy"
        width="300"
        height="300"
        decoding="async"
        data-nimg="1"
        class="w-[160px] h-[160px] lg:w-[300px] lg:h-[300px] text-transparent"
        src={img}
      />
      <div class="flex flex-col justify-center ml-4 text-center xl:px-8 h-fit">
        <h3 class="mb-2 text-2xl font-bold leading-tight text-primary lg:text-6xl md:text-4xl lg:mb-4">
          {price1}
        </h3>
        <p class="text-base font-normal leading-tight md:text-3xl">{des1}</p>
        <h3 class="mt-4 mb-2 text-2xl font-bold leading-tight text-primary lg:text-6xl md:text-4xl lg:mb-4">
          {price2}
        </h3>
        <p class="text-base font-normal leading-tight md:text-3xl">{des2}</p>
      </div>
    </div>
  );
};

export default AboutCard;
