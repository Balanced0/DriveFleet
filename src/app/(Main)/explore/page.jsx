import CarCard from "@/components/CarCard";
import React from "react";
import FilterForm from "@/components/FilterForm";
import { SlidersHorizontal } from "lucide-react";

const ExploreCarsPage = async ({ searchParams }) => {
  const { carName, carType } = await searchParams;
  const url = new URL("http://localhost:5000/cars/search");
  if (carName) {
    url.searchParams.set("carName", carName);
  }
  if (carType) {
    url.searchParams.set("carType", carType);
  }
  const res = await fetch(url.toString());
  const data = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <h1 className="pt-20 text-4xl font-extrabold mb-4">
          Explore the fleet
        </h1>
        <div className="border border-gray-600 p-6 rounded-2xl mb-12 bg-[#1D232A]">
          <p className="flex gap-2 items-center font-bold mb-3">
            <SlidersHorizontal className="text-orange-500" /> Filter
          </p>
          <FilterForm></FilterForm>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {data.map((car) => (
            <CarCard key={car._id} car={car}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCarsPage;
