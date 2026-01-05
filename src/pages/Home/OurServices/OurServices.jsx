import React from "react";
// Import the specific icons from lucide-react
import {
  Zap,
  ShieldCheck,
  MapPinned,
  Briefcase,
  Warehouse,
  Bike,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Express Shipping",
      desc: "Experience lightning-fast delivery for your urgent documents and packages with FastParcel's priority network.",
      icon: <Zap size={40} strokeWidth={1.5} />,
    },
    {
      title: "Safe Logistics",
      desc: "Our high-standard handling procedures ensure that your fragile items arrive in perfect condition every time.",
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    },
    {
      title: "Real-time Tracking",
      desc: "Stay updated with precise GPS tracking. Know exactly where your parcel is from pickup to final delivery.",
      icon: <MapPinned size={40} strokeWidth={1.5} />,
    },
    {
      title: "Corporate Solutions",
      desc: "Bulk shipping and logistics management tailored for businesses looking to scale their distribution efficiently.",
      icon: <Briefcase size={40} strokeWidth={1.5} />,
    },
    {
      title: "Warehouse Support",
      desc: "Secure storage facilities with 24/7 monitoring to keep your inventory safe until it's ready for dispatch.",
      icon: <Warehouse size={40} strokeWidth={1.5} />,
    },
    {
      title: "Local Pickup",
      desc: "No need to visit a branch. Our riders will come to your doorstep at your preferred time for hassle-free pickup.",
      icon: <Bike size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="my-16">
      {/* Main Container with FastParcel dark green background */}
      <div
        style={{ backgroundColor: "#03373d" }}
        className="rounded-3xl p-8 md:p-16"
      >
        {/* Header: Grid centered */}
        <div className="grid grid-cols-1 text-center gap-6 items-center border-b border-white/10 pb-10 mb-12 text-white">
          <h2 className="text-3xl font-bold uppercase tracking-tight">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto opacity-90 leading-relaxed text-lg">
            FastParcel provides reliable, secure, and lightning-fast logistics
            solutions designed to connect you to the world with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 rounded-xl border border-white/10 transition-all duration-500 cursor-pointer bg-white hover:bg-[#caeb66]"
            >
              {/* Centered Circle Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-[#f8f9fa] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-500 text-[#03373d]">
                  {/* The Icon itself */}
                  {service.icon}
                </div>
              </div>

              {/* Content - Text turns dark on hover */}
              <div className="text-center transition-colors duration-500 text-[#03373d]">
                <h3 className="text-2xl font-bold mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-[#4b5563] group-hover:text-[#03373d] opacity-90 leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
