import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import DetailsClient from "@/components/DetailsClient";

const DetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;
  const res = await fetch(`http://localhost:5000/cars/detail/${id}`);
  const car = await res.json();
  return (
    <DetailsClient car={car} session={session}></DetailsClient>
  );
};

export default DetailsPage;
