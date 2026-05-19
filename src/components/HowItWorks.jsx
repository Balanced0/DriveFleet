import React from "react";
import { MousePointerClick } from "lucide-react";
import { Key } from "lucide-react";
import { Car } from "lucide-react";
import { PartyPopper } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-black">
      <div className="border-t-1 border-t-gray-500"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-2 pt-20 text-center">
          How it works
        </h2>
        <p className="text-gray-400 text-lg mb-13 text-center">
          Four simple steps from search to road.
        </p>
        <div className="grid grid-cols-1 gap-6 pb-40 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="card bg-[#1D232A] shadow-sm border border-gray-500 rounded-3xl relative overflow-visible">
            <div className="card-body">
              <div className="absolute -top-4 w-8 h-8 flex justify-center items-center text-black rounded-full bg-orange-500 font-bold text-lg">
                1
              </div>
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <MousePointerClick className="text-black" />
              </div>
              <h2 className="card-title">Choose a car</h2>
              <p className="text-gray-400 text-base">
                Browse 1000+ vetted vehicles in your city.
              </p>
            </div>
          </div>
          <div className="card bg-[#1D232A] shadow-sm border border-gray-500 rounded-3xl relative overflow-visible">
            <div className="card-body">
              <div className="absolute -top-4 w-8 h-8 flex justify-center items-center text-black rounded-full bg-orange-500 font-bold text-lg">
                2
              </div>
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <Key className="text-black" />
              </div>
              <h2 className="card-title">Book instantly</h2>
              <p className="text-gray-400 text-base">
                Confirm dates and pay securely in seconds.
              </p>
            </div>
          </div>
          <div className="card bg-[#1D232A] shadow-sm border border-gray-500 rounded-3xl relative overflow-visible">
            <div className="card-body">
              <div className="absolute -top-4 w-8 h-8 flex justify-center items-center text-black rounded-full bg-orange-500 font-bold text-lg">
                3
              </div>
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <Car className="text-black" />
              </div>
              <h2 className="card-title">Pick up vehicle</h2>
              <p className="text-gray-400 text-base">
                Meet the host or get contactless keys.
              </p>
            </div>
          </div>
          <div className="card bg-[#1D232A] shadow-sm border border-gray-500 rounded-3xl relative overflow-visible">
            <div className="card-body">
              <div className="absolute -top-4 w-8 h-8 flex justify-center items-center text-black rounded-full bg-orange-500 font-bold text-lg">
                4
              </div>
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <PartyPopper className="text-black" />
              </div>
              <h2 className="card-title">Enjoy the ride</h2>
              <p className="text-gray-400 text-base">
                Drive freely — we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
