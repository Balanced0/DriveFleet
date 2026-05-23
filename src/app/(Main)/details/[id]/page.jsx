import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import DetailsClient from "@/components/DetailsClient";

const DetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/detail/${id}`);
  const car = await res.json();
  return (
    <DetailsClient car={car} session={session}></DetailsClient>
  );
};

export default DetailsPage;
