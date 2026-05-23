import React from "react";
import heroCar from "@/assets/hero-car.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import "animate.css";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroCar.src})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <div className="badge bg-orange-500/20 text-orange-500 border border-orange-500 mb-6 rounded-2xl">
              <div className="bg-orange-500 w-2 h-2 rounded-full animate__animated animate__flash animate__slower animate__infinite"></div>
              Now serving 24 cities
            </div>
            <h1 className="text-7xl font-extrabold mb-8">
              Find your <span className="text-orange-500">perfect ride</span>{" "}
              instantly.
            </h1>
            <p className="text-gray-400 text-xl mb-8">
              From matte-black coupes to silver electric crossovers — rent the
              car you want, when you want, with a single tap.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/explore">
                <button className="btn bg-orange-500 text-lg text-black rounded-xl px-8 w-full sm:w-auto">
                  Explore Cars <FaArrowRight />
                </button>
              </Link>
              <Link href="/add">
                <button className="btn bg-black text-lg rounded-xl px-8 border-gray-600 hover:bg-orange-500 hover:text-black w-full sm:w-auto">
                  List Your Car
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-4 items-center">
            <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(249,115,22,0.6)] w-full h-fit">
              <h4 className="text-3xl font-extrabold text-orange-500">12K+</h4>
              <p className="text-gray-400">Cars</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(249,115,22,0.6)] w-full h-fit">
              <h4 className="text-3xl font-extrabold text-orange-500">98%</h4>
              <p className="text-gray-400 text-center">Happy drivers</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(249,115,22,0.6)] w-full h-fit">
              <h4 className="text-3xl font-extrabold text-orange-500">24/7</h4>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
