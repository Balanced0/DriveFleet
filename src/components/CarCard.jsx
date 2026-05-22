import React from "react";
import Image from "next/image";
import { Users, MapPin } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="relative border border-gray-600 bg-[#1D232A] rounded-2xl hover:border-orange-500">
      <div className="badge absolute z-1000 bg-black border border-gray-600 text-white rounded-2xl p-3 top-2 left-2">
        {car.carType}
      </div>
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
            <p className="text-lg font-bold text-orange-500">$ {car.price}</p>
            <p className="text-sm text-gray-400 -mt-2">PER DAY</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="flex gap-2 items-center text-gray-400">
            <span className="flex items-center gap-2 mr-4">
              <Users className="w-4 h-4" /> {car.seat}
            </span>{" "}
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {car.pickUpLocation}
            </span>
          </p>
        </div>
        <button className="btn bg-orange-500 text-black rounded-xl">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
