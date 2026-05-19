import React from "react";
import { Wallet } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Zap } from "lucide-react";
import { Sparkles } from "lucide-react";

const WhyDriveFleet = () => {
  return (
    <div>
        <div className="border-t-1 border-t-gray-500"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-2 mt-20">
          Why choose <span className="text-orange-500">DriveFleet</span>
        </h2>
        <p className="text-gray-400 text-lg mb-13">
          A rental experience engineered for drivers, not paperwork.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-20 md:grid-cols-3 lg:grid-cols-4">
          <div className="card bg-black shadow-sm border border-gray-500 rounded-3xl hover:border-orange-500">
            <div className="card-body">
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <Wallet className="text-black" />
              </div>
              <h2 className="card-title text-xl">Affordable Pricing</h2>
              <p className="text-gray-400 text-base">
                Transparent daily rates with no hidden fees, ever.
              </p>
            </div>
          </div>
          <div className="card bg-black shadow-sm border border-gray-500 rounded-3xl hover:border-orange-500">
            <div className="card-body">
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <ShieldCheck className="text-black" />
              </div>
              <h2 className="card-title text-xl">Trusted Owners</h2>
              <p className="text-gray-400 text-base">
                Every host is verified, insured, and rated by drivers.
              </p>
            </div>
          </div>
          <div className="card bg-black shadow-sm border border-gray-500 rounded-3xl hover:border-orange-500">
            <div className="card-body">
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <Zap className="text-black" />
              </div>
              <h2 className="card-title text-xl">Fast Booking</h2>
              <p className="text-gray-400 text-base">
                Lock in your ride in under 60 seconds, end to end.
              </p>
            </div>
          </div>
          <div className="card bg-black shadow-sm border border-gray-500 rounded-3xl hover:border-orange-500">
            <div className="card-body">
              <div className="bg-orange-500 p-3 rounded-2xl w-fit mb-3">
                <Sparkles className="text-black" />
              </div>
              <h2 className="card-title text-xl">Secure Experience</h2>
              <p className="text-gray-400 text-base">
                Encrypted payments and 24/7 roadside support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDriveFleet;
