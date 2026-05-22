import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CarCard from "@/components/CarCard";

const Available = async () => {
  const res = await fetch("http://localhost:5000/cars");
  const data = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-4 items-start pt-20 pb-10 md:flex-row md:items-center">
          <div className="">
            <h2 className="text-4xl font-extrabold mb-2">Available now</h2>
            <p className="text-gray-400 text-lg">
              Hand-picked rides ready to be booked today.
            </p>
          </div>
          <div>
            <Link
              href="/explore"
              className="flex gap-2 items-center btn border border-gray-600 rounded-xl hover:bg-orange-500 text-white"
            >
              View all <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 6).map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Available;
