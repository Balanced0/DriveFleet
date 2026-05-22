"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Users, MapPin, Car, ShieldCheck } from "lucide-react";
import {
  Button,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  FileText,
  TextArea,
} from "@heroui/react";

const DetailsClient = ({ car, session }) => {
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
            <Modal>
              <Button
                disabled={!session}
                variant="secondary"
                className="bg-orange-500 hover:bg-orange-400 transition-colors text-black font-bold btn rounded-2xl w-full text-base"
              >
                Book Now
              </Button>
              <Modal.Backdrop>
                <Modal.Container placement="auto">
                  <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Heading className="flex items-center gap-2">
                        <Car className="text-orange-500" /> Book {car.carName}
                      </Modal.Heading>
                      <p className="mt-1.5 text-sm leading-5 text-muted">
                        Complete your booking details below.
                      </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                      <Surface variant="default">
                        <form className="flex flex-col gap-4">
                          <Select
                            isRequired
                            placeholder="Select one"
                            name="driver"
                          >
                            <Label className="flex items-center gap-2 text-gray-400 font-medium">
                              Driver Needed
                            </Label>
                            <Select.Trigger className="border border-gray-600 focus:border-orange-500">
                              <Select.Value />
                              <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                              <ListBox>
                                <ListBox.Item id="Yes" textValue="Yes">
                                  Yes
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="No" textValue="No">
                                  No
                                  <ListBox.ItemIndicator />
                                </ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>

                          <TextField isRequired name="description">
                            <Label className="flex items-center gap-2 text-gray-400">
                              Special Note
                            </Label>
                            <TextArea
                              className="h-20 resize-none border border-gray-600 focus:border-orange-500"
                              placeholder="Note..."
                            />
                          </TextField>
                        </form>
                      </Surface>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary" className="text-orange-500">
                        Cancel
                      </Button>
                      <Button slot="close" className="bg-orange-500 text-black">Book</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>

            <p className="text-center text-gray-400 text-xs mt-4">
              {session ? "You won't be charged yet" : "Please log in to book"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsClient;
