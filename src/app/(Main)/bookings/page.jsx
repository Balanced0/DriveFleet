import { Table } from "@heroui/react";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { Calendar, UserRoundCheck, UserRoundX, Dot } from "lucide-react";
import Image from "next/image";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/booking/${session.user.id}`);
  const data = await res.json();
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="pt-20">
          <h1 className="text-5xl font-extrabold mb-10">My bookings</h1>
        </div>
        <div className="pb-20">
          <div className="flex flex-col gap-4 lg:hidden">
            {data.map((car) => (
              <div
                key={car._id}
                className="border border-gray-600 bg-[#1D232A] rounded-2xl p-4"
              >
                <div className="flex gap-3 items-center mb-4">
                  <Image
                    src={car.image}
                    alt={car.carName}
                    width={80}
                    height={80}
                    className="rounded-xl object-cover border border-gray-600"
                  />
                  <div>
                    <h5 className="font-extrabold">{car.carName}</h5>
                    <p className="flex text-gray-400 text-sm">
                      {car.carType} · {car.pickUpLocation}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-orange-500" />{" "}
                    {car.bookingDate}
                  </span>
                  <span className="text-orange-500 font-bold">
                    ${car.price}
                  </span>
                </div>
                <div>
                  {car.driver === "Yes" ? (
                    <div className="badge text-orange-500 bg-orange-500/30 rounded-2xl border border-orange-500">
                      <UserRoundCheck className="w-4 h-4" /> With driver
                    </div>
                  ) : (
                    <div className="badge text-gray-400 bg-gray-400/30 rounded-2xl border border-gray-500">
                      <UserRoundX className="w-4 h-4" /> Self drive
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Bookings" className="min-w-[600px]">
                  <Table.Header>
                    <Table.Column isRowHeader>CAR</Table.Column>
                    <Table.Column>BOOKING DATE</Table.Column>
                    <Table.Column>TOTAL</Table.Column>
                    <Table.Column>DRIVER</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {data.map((car) => (
                      <Table.Row key={car._id}>
                        <Table.Cell>
                          <div className="flex gap-3 items-center">
                            <Image
                              src={car.image}
                              alt={car.carName}
                              width={128}
                              height={128}
                              className="rounded-lg object-cover border border-gray-600"
                            />
                            <div>
                              <h5 className="font-extrabold">{car.carName}</h5>
                              <p className="flex text-gray-400">
                                {car.carType} <Dot /> {car.pickUpLocation}
                              </p>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center gap-2">
                            <Calendar className="text-orange-500 w-4 h-4" />
                            {car.bookingDate}
                          </div>
                        </Table.Cell>
                        <Table.Cell className="text-orange-500 font-bold">
                          ${car.price}
                        </Table.Cell>
                        {car.driver === "Yes" ? (
                          <Table.Cell>
                            <div className="badge text-orange-500 bg-orange-500/30 rounded-2xl border border-orange-500">
                              <UserRoundCheck className="w-4 h-4" /> With driver
                            </div>
                          </Table.Cell>
                        ) : (
                          <Table.Cell>
                            <div className="badge text-gray-400 bg-gray-400/30 rounded-2xl border border-gray-500">
                              <UserRoundX className="w-4 h-4" /> Self drive
                            </div>
                          </Table.Cell>
                        )}
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
