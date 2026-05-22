import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Users, MapPin, Car, ShieldCheck } from "lucide-react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/cars/detail/${id}`);
  const car = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <Link href="/explore">
          <p className="text-gray-400 pt-10 md:pt-20 mb-6 flex gap-2 font-bold text-lg items-center">
            <MoveLeft /> Back to explore
          </p>
        </Link>

        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] border border-gray-600 rounded-2xl mb-10">
          <div className="absolute z-1000 bottom-6 left-6">
            <div className="badge bg-black border border-gray-600 text-white rounded-2xl p-3">
              {car.carType}
            </div>
            <p className="mt-3 text-4xl font-extrabold">{car.carName}</p>
          </div>
          <div
            className={`badge absolute z-1000 border text-base border-gray-600 rounded-3xl p-5 bottom-6 right-6 ${car.availability === "available" ? "badge-soft badge-success" : "badge-soft badge-error"}`}
          >
            {car.availability}
          </div>
          <Image
            src={car.image}
            fill
            className="object-cover rounded-2xl"
            alt={car.carName}
          ></Image>
        </div>
        <div className="grid grid-cols-1 pb-20 gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-2">About this car</h3>
            <p className="text-gray-400 text-lg mb-10">{car.description}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex gap-4 items-center bg-[#1D232A] border border-gray-600 rounded-2xl p-4">
                <div className="bg-orange-500/30 p-2 rounded-2xl">
                  <Users className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400">SEATS</p>
                  <p>{car.seat} passengers</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-[#1D232A] border border-gray-600 rounded-2xl p-4">
                <div className="bg-orange-500/30 p-2 rounded-2xl">
                  <MapPin className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400">LOCATION</p>
                  <p>{car.pickUpLocation}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-[#1D232A] border border-gray-600 rounded-2xl p-4">
                <div className="bg-orange-500/30 p-2 rounded-2xl">
                  <Car className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400">TYPE</p>
                  <p>{car.carType}</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-[#1D232A] border border-gray-600 rounded-2xl p-4">
                <div className="bg-orange-500/30 p-2 rounded-2xl">
                  <ShieldCheck className="text-orange-500" />
                </div>
                <div>
                  <p className="text-gray-400">Availability</p>
                  <p>{car.availability}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-600 bg-[#1D232A] rounded-2xl p-6 h-fit sticky top-6">
            <h3 className="text-xl font-bold mb-1">Rental Price</h3>
            <p className="text-gray-400 text-sm mb-6">
              No hidden fees. Cancel anytime.
            </p>

            <div className="border border-gray-600 rounded-2xl p-4 mb-6 flex justify-between items-center">
              <p className="text-gray-400">Per day</p>
              <p className="text-orange-500 text-3xl font-extrabold">
                ${car.price}
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-400 mb-8">
              <div className="flex justify-between">
                <span>Base rate</span>
                <span className="text-white">${car.price}/day</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance</span>
                <span className="text-white">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Free cancellation</span>
                <span className="text-green-500">Yes</span>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-400 transition-colors text-black font-bold btn rounded-2xl w-full text-base">
              Book Now
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
