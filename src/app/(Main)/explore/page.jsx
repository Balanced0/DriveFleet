import CarCard from "@/components/CarCard";
import React from "react";

const ExploreCarsPage = async () => {
  const res = await fetch("http://localhost:5000/cars");
  const data = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <h1 className="pt-20 text-4xl font-extrabold mb-12">Explore the fleet</h1>
        <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
            {
                data.map((car) =>(
                    <CarCard key={car._id} car={car}></CarCard>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default ExploreCarsPage;
