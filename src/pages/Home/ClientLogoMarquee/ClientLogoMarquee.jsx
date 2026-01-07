import React from "react";
import Marquee from "react-fast-marquee";
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
    <div className="w-full bg-[#f8fcfc] py-14 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Modern Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#03373d] opacity-50 whitespace-nowrap">
            Our Global Partners
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200"></div>
        </div>

        <Marquee
          speed={50}
          gradient={true}
          gradientColor={[248, 252, 252]}
          gradientWidth={100}
          pauseOnHover={true}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="mx-10 md:mx-14 flex items-center justify-center group"
            >
              {/* Image Container with fixed height to control "too big" logos */}
              <div className="relative h-12 flex items-center justify-center">
                <img
                  src={brand.img}
                  alt={`Brand ${brand.id}`}
                  className="h-full w-auto max-w-[140px] object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />

                {/* Subtle Brand Color Glow */}
                <div className="absolute inset-0 bg-[#caeb66]/0 group-hover:bg-[#caeb66]/5 rounded-full blur-2xl transition-all duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogoMarquee;
