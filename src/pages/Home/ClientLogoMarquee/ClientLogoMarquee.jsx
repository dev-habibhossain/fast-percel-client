import React from "react";
import Marquee from "react-fast-marquee";

// Double check these paths match your folder structure
import amazonLogo from "../../../assets/brands/amazon.png";
import amazonVectorLogo from "../../../assets/brands/amazon_vector.png";
import casioLogo from "../../../assets/brands/casio.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import randstadLogo from "../../../assets/brands/randstad.png";
import starLogo from "../../../assets/brands/star.png";
import startPeopleLogo from "../../../assets/brands/start_people.png";

const ClientLogoMarquee = () => {
  const brands = [
    { id: 1, img: amazonLogo },
    { id: 2, img: amazonVectorLogo },
    { id: 3, img: casioLogo },
    { id: 4, img: moonstarLogo },
    { id: 5, img: randstadLogo },
    { id: 6, img: starLogo },
    { id: 7, img: startPeopleLogo },
  ];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trusted Partners Label */}
        <div className="flex justify-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#03373d] opacity-40">
            Trusted Partners
          </span>
        </div>

        {/* The Marquee */}
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="white"
          gradientWidth={100}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="mx-12 md:mx-20 flex items-center justify-center"
            >
              <img
                src={brand.img}
                alt="Partner Brand"
                className="h-6 md:h-7 w-auto max-w-30 object-contain opacity-70  hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </Marquee>

        {/* Dashed Border Bottom like -------- */}
        <div className="mt-14 border-b-2 border-dashed border-gray-200 w-full"></div>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
