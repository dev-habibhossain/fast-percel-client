
import { Truck, Warehouse, PackageCheck, Home } from "lucide-react"; // Using Lucide for clean vectors

const HowItWorks = () => {
  const steps = [
    {
      title: "Pickup Request",
      desc: "Order a pickup via our app. A FastParcel agent will arrive at your location to collect the package.",
      // Using a simple Lucide icon as a vector
      icon: <PackageCheck size={32} className="text-[#03373d]" />,
    },
    {
      title: "In-Transit Storage",
      desc: "Your parcel is safely stored and sorted in our nearest high-security warehouse hub.",
      icon: <Warehouse size={32} className="text-[#03373d]" />,
    },
    {
      title: "Shipping Process",
      desc: "The package is dispatched via our express shipping fleet to ensure the fastest possible route.",
      icon: <Truck size={32} className="text-[#03373d]" />,
    },
    {
      title: "Final Delivery",
      desc: "Success! The parcel is delivered directly to the customer's doorstep with a digital signature.",
      icon: <Home size={32} className="text-[#03373d]" />,
    },
  ];

  return (
    <section className="p-4 md:p-8 my-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title: Aligned with the left of the first card */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#03373d] uppercase tracking-tight">
            How it works
          </h2>
        </div>

        {/* Flex Container: Stacks on mobile, Side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Small Vector Icon in Top Left */}
              <div className="mb-6 w-12 h-12 bg-[#caeb66] rounded-lg flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title below icon */}
              <h3 className="text-xl font-bold text-[#03373d] mb-3">
                {step.title}
              </h3>

              {/* Description below title */}
              <p className="text-gray-500 text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
