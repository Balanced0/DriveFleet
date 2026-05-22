"use client";
import React from "react";
import Image from "next/image";
import { Users, MapPin, Pencil, Car, Trash2 } from "lucide-react";
import { Dot } from "lucide-react";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  FieldError,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { AlertDialog } from "@heroui/react";

const AddedCarCard = ({ car }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/cars/${car._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      router.refresh();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: session } = await authClient.getSession();

    const newData = {
      userId: session.user.id,
      carName: data.carName,
      price: data.price,
      carType: data.carType,
      seat: data.seat,
      image: data.image,
      pickUpLocation: data.pickUpLocation,
      availability: data.availability,
      description: data.description,
    };

    const res = await fetch(`http://localhost:5000/cars/${car._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div className="relative border border-gray-600 bg-[#1D232A] rounded-2xl hover:border-orange-500">
      <div
        className={`badge absolute z-10 border border-gray-600 rounded-2xl p-3 top-2 right-2 ${car.availability === "available" ? "badge-soft badge-success" : "badge-soft badge-error"}`}
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
            <p className="text-lg font-bold text-orange-500">
              $ {car.price}
              <span className="text-gray-400 font-medium text-sm">/d</span>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className=" text-gray-400 flex items-start">
            {car.carType}
            <Dot />
            {car.pickUpLocation}
          </p>
        </div>
        <div className="flex gap-4">
          <Modal>
            <Button className="w-full rounded-xl bg-black border border-gray-600">
              <Pencil /> Edit
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-orange-500 text-black">
                      <Car />
                    </Modal.Icon>
                    <Modal.Heading>Update Car Info</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="p-6">
                    <Surface variant="default">
                      <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <TextField
                          defaultValue={car.price}
                          name="price"
                          type="number"
                        >
                          <Label className="flex items-center gap-2 text-gray-400">
                            Daily Price ($)
                          </Label>
                          <Input
                            min={0}
                            placeholder="189"
                            className="border border-gray-600 focus:border-orange-500"
                          />
                          <FieldError />
                        </TextField>

                        <TextField
                          defaultValue={car.image}
                          name="image"
                          type="url"
                        >
                          <Label className="flex items-center gap-2 text-gray-400">
                            Image URL
                          </Label>
                          <Input
                            placeholder="https://..."
                            className="border border-gray-600 focus:border-orange-500"
                          />
                          <FieldError />
                        </TextField>

                        <TextField
                          defaultValue={car.pickUpLocation}
                          name="pickUpLocation"
                          type="text"
                        >
                          <Label className="flex items-center gap-2 text-gray-400">
                            Pickup Location
                          </Label>
                          <Input
                            placeholder="Berlin, DE"
                            className="border border-gray-600 focus:border-orange-500"
                          />
                          <FieldError />
                        </TextField>

                        <Select
                          defaultValue={car.availability}
                          placeholder="Select one"
                          name="availability"
                        >
                          <Label className="flex items-center gap-2 text-gray-400 font-medium">
                            Availability Status
                          </Label>
                          <Select.Trigger className="border border-gray-600 focus:border-orange-500">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item
                                id="available"
                                textValue="Available"
                              >
                                Yes
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="not-available"
                                textValue="Not Available"
                              >
                                No
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>

                        <Select
                          defaultValue={car.carType}
                          className=""
                          placeholder="Select one"
                          name="carType"
                        >
                          <Label className="flex items-center gap-2 text-gray-400 font-medium">
                            Car Type
                          </Label>
                          <Select.Trigger className="border border-gray-600 focus:border-orange-500">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="suv" textValue="SUV">
                                SUV
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="sedan" textValue="Sedan">
                                Sedan
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="coupe" textValue="Coupe">
                                Coupe
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="hatchback"
                                textValue="Hatchback"
                              >
                                Hatchback
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="convertible"
                                textValue="Convertible"
                              >
                                Convertible
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="crossover"
                                textValue="Crossover"
                              >
                                Crossover
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>

                        <TextField
                          defaultValue={car.description}
                          name="description"
                        >
                          <Label className="flex items-center gap-2 text-gray-400">
                            Description
                          </Label>
                          <TextArea
                            className="h-30 resize-none border border-gray-600 focus:border-orange-500"
                            placeholder="Tell drivers what makes your car special..."
                          />
                        </TextField>

                        <Modal.Footer>
                          <Button
                            slot="close"
                            variant="secondary"
                            className="text-orange-500"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            slot="close"
                            className="bg-orange-500 text-black"
                          >
                            Update
                          </Button>
                        </Modal.Footer>
                      </form>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>

          <AlertDialog>
            <Button
              variant="danger"
              className="rounded-xl bg-black text-red-600 border border-gray-600"
            >
              <Trash2 /> Delete
            </Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading>
                      Delete permanently?
                    </AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                    <p>
                      This will permanently delete{" "}
                      <strong>{car.carName}</strong> and all of its data. This
                      action cannot be undone.
                    </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                      Cancel
                    </Button>
                    <Button
                      onClick={handleDelete}
                      slot="close"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default AddedCarCard;
