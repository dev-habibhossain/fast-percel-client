import React from "react";

const Services = () => {
  const services = [
    {
      title: "Express Shipping",
      desc: "Experience lightning-fast delivery for your urgent documents and packages with FastParcel's priority network.",
      img: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
    },
    {
      title: "Safe Logistics",
      desc: "Our high-standard handling procedures ensure that your fragile items arrive in perfect condition every time.",
      img: "https://cdn-icons-png.flaticon.com/512/2857/2857095.png",
    },
    {
      title: "Real-time Tracking",
      desc: "Stay updated with precise GPS tracking. Know exactly where your parcel is from pickup to final delivery.",
      img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    },
    {
      title: "Corporate Solutions",
      desc: "Bulk shipping and logistics management tailored for businesses looking to scale their distribution efficiently.",
      img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
    },
    {
      title: "Warehouse Support",
      desc: "Secure storage facilities with 24/7 monitoring to keep your inventory safe until it's ready for dispatch.",
      img: "https://cdn-icons-png.flaticon.com/512/2312/2312713.png",
    },
    {
      title: "Local Pickup",
      desc: "No need to visit a branch. Our riders will come to your doorstep at your preferred time for hassle-free pickup.",
      img: "https://cdn-icons-png.flaticon.com/512/1067/1067562.png",
    },
  ];

  return (
    <section className="my-16">
      {/* Main Container with FastParcel dark green background */}
      <div
        style={{ backgroundColor: "#03373d" }}
        className="rounded-4xl p-8 md:p-16 "
      >
        {/* Header: Grid centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-white/10 pb-10 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Our Services
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            FastParcel provides reliable, secure, and lightning-fast logistics
            solutions designed to connect you to the world with ease.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ "--hover-bg": "#caeb66" }}
              className={`group p-10 rounded-xl border border-white/10 transition-all duration-500 cursor-pointer
              ${index % 2 === 0 ? "bg-white" : "bg-white"}
              hover:bg-[#caeb66]`}
            >
              {/* Centered Circle Image */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content - Text turns dark on hover for readability against #caeb66 */}
              <div className="text-center group-hover:text-[#03373d] transition-colors duration-500 text-[#03373d]">
                <h3 className="text-2xl font-bold mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-lg text-[#606060] opacity-80 group-hover:opacity-100 leading-relaxed">
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
