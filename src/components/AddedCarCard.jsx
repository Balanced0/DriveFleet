import React from "react";
import Image from "next/image";
import { Users, MapPin } from "lucide-react";
import { Dot } from 'lucide-react';
const AddedCarCard = ({ car }) => {
  return (
    <div className="relative border border-gray-600 bg-[#1D232A] rounded-2xl hover:border-orange-500">
      <div
        className={`badge absolute z-1000 border border-gray-600 rounded-2xl p-3 top-2 right-2 ${car.availability === "available" ? "badge-soft badge-success" : "badge-soft badge-error"}`}
      >
        {car.availability}
      </div>
      <div className="relative w-full h-48">
        <Image
          src={car.image}
          alt={car.carName}
          fill
          className="rounded-t-2xl object-cover"
        />
      </div>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{car.carName}</h3>
          <div className="flex flex-col mb-4">
            <p className="text-lg font-bold text-orange-500">$ {car.price}<span className="text-gray-400 font-medium text-sm">/d</span></p>
          </div>
        </div>
        <div className="mb-4">
          <p className=" text-gray-400 flex items-start">
            {car.carType}<Dot />{car.pickUpLocation}
          </p>
        </div>
        <button className="btn bg-orange-500 text-black rounded-xl">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AddedCarCard;
