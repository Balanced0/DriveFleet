import { Plus } from "lucide-react";
import Link from "next/link";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import AddedCarCard from "@/components/AddedCarCard";
const AddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const res = await fetch(`http://localhost:5000/cars/${session.user.id}`);
  const data = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 pt-20 mb-8 md:flex-row md:justify-between md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-3 md:text-5xl">
              My added Cars
            </h2>
            <p className="text-gray-400 text-lg">Manage your listings.</p>
          </div>
          <div>
            <Link href="add">
              <button className="btn bg-orange-500 text-black rounded-xl w-full md:w-auto">
                <Plus /> Add new car
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {data.map((car) => (
            <AddedCarCard key={car._id} car={car}></AddedCarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedCarsPage;
