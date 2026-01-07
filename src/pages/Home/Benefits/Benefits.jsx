import React from "react";
import { LocateFixed, ShieldCheck, PhoneCall } from "lucide-react";

// Use your actual asset paths here
import trackingImg from "../../../assets/benefits/post-service-tracking-abstract-c.png";
import safetyImg from "../../../assets/benefits/new-entries-concept-illustration.png";
import supportImg from "../../../assets/benefits/technical-support-concept-idea-c.png";

const Benefits = () => {
  const benefitData = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated with our real-time GPS tracking system. Monitor your shipment's journey from our warehouse to your doorstep with meter-perfect accuracy.",
      img: trackingImg,
      icon: <LocateFixed size={28} />,
    },
    {
      title: "100% Safe Delivery",
      desc: "Our delivery personnel are equipped with specialized handling gear. You can communicate directly with your deliveryman via phone for specific drop-off instructions.",
      img: safetyImg,
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "24/7 Calling Support",
      desc: "Have a question? Our dedicated support team is available around the clock. Whether it's midnight or a holiday, we are just a phone call away to assist you.",
      img: supportImg,
      icon: <PhoneCall size={28} />,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Area */}
      <div className="mb-16">
        <h2 className="text-3xl font-extrabold text-[#03373d] uppercase tracking-tighter">
          Exclusive Benefits
        </h2>
        <div className="w-20 h-1.5 bg-[#caeb66] mt-3"></div>
      </div>

      {/* Vertical Stack of Cards */}
      <div className="flex flex-col gap-8">
        {benefitData.map((item, index) => (
          <div
            key={index}
            className="group w-full bg-white border border-gray-100 rounded-3xl flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl hover:shadow-[#03373d]/5 transition-all duration-500"
          >
            {/* 1. Image Section (Fixed 30% Width - No Expansion) */}
            <div className="w-full md:w-[35%] flex justify-center items-center p-12 bg-[#fcfdfe]">
              <div className="w-40 h-40 md:w-80 md:h-56 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                />
              </div>
            </div>

            {/* 2. Vertical Dashed Border Divider */}
            <div className="hidden md:block h-32 border-l-2 border-dashed border-gray-200"></div>

            {/* 3. Content Section */}
            <div className="flex-1 p-10 md:p-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#03373d] p-3 bg-[#caeb66]/10 rounded-xl group-hover:bg-[#caeb66] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#03373d] uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#606060] text-lg leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
