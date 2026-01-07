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
    <section className="w-full bg-[#fcfdfe] py-10 overflow-hidden border-y border-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Minimalist Header */}
        <div className="flex justify-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#03373d] opacity-30">
            Trusted Partners
          </span>
        </div>

        <Marquee
          speed={35}
          gradient={true}
          gradientColor={[252, 253, 254]}
          gradientWidth={80}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="mx-10 md:mx-14 flex items-center justify-center"
            >
              <img
                src={brand.img}
                alt="Brand Logo"
                className="h-7 md:h-8 w-auto max-w-25 object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
