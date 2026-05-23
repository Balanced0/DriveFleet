"use client";
import { Form } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import {
  Car,
  DollarSign,
  Users,
  Image,
  MapPin,
  FileText,
  CircleCheck,
} from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import { ToastContainer, toast } from "react-toastify";

const AddCarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const { data: session } = await authClient.getSession();
    const { data: tokenData } = await authClient.token();

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

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(newData),
    });

    if (res.ok) {
      toast.success("Car listed successfully!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-extrabold mb-4 mt-20">List your car</h1>
        <p className="text-gray-400 text-lg mb-6 text-center">
          Turn your parked car into a passive income stream. Average hosts earn
          <br></br>
          $1,200/month.
        </p>
        <div>
          <Form
            className="flex flex-col gap-4 bg-[#1D232A] p-10 rounded-2xl border border-gray-600 mb-20"
            onSubmit={onSubmit}
          >
            <div>
              <h3 className="text-xl font-bold">Vehicle info</h3>
            </div>
            <div className="border-t border-t-gray-600"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TextField isRequired name="carName">
                <Label className="flex items-center gap-2 text-gray-400">
                  <Car className="text-orange-500 w-4 h-4" /> CAR NAME
                </Label>
                <Input
                  placeholder="e.g. Onyx GT Coupe"
                  className="border border-gray-600 focus:border-orange-500"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="price" type="number">
                <Label className="flex items-center gap-2 text-gray-400">
                  <DollarSign className="text-orange-500 w-4 h-4" /> DAILY PRICE
                  ($)
                </Label>
                <Input
                  min={0}
                  placeholder="189"
                  className="border border-gray-600 focus:border-orange-500"
                />
                <FieldError />
              </TextField>

              <Select
                isRequired
                className="w-[256px]"
                placeholder="Select one"
                name="carType"
              >
                <Label className="flex items-center gap-2 text-gray-400 font-medium">
                  <Car className="text-orange-500 w-4 h-4" /> CAR TYPE
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
                    <ListBox.Item id="hatchback" textValue="Hatchback">
                      Hatchback
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="convertible" textValue="Convertible">
                      Convertible
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="crossover" textValue="Crossover">
                      Crossover
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <TextField isRequired name="seat" type="number">
                <Label className="flex items-center gap-2 text-gray-400">
                  <Users className="text-orange-500 w-4 h-4" /> SEAT CAPACITY
                </Label>
                <Input
                  min={1}
                  placeholder="5"
                  className="border border-gray-600 focus:border-orange-500"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="image" type="url">
                <Label className="flex items-center gap-2 text-gray-400">
                  <Image className="text-orange-500 w-4 h-4" /> IMAGE URL
                </Label>
                <Input
                  placeholder="https://..."
                  className="border border-gray-600 focus:border-orange-500"
                />
                <FieldError />
              </TextField>

              <TextField isRequired name="pickUpLocation" type="text">
                <Label className="flex items-center gap-2 text-gray-400">
                  <MapPin className="text-orange-500 w-4 h-4" /> PICKUP LOCATION
                </Label>
                <Input
                  placeholder="Berlin, DE"
                  className="border border-gray-600 focus:border-orange-500"
                />
                <FieldError />
              </TextField>
            </div>

            <Select isRequired placeholder="Select one" name="availability">
              <Label className="flex items-center gap-2 text-gray-400 font-medium">
                <CircleCheck className="text-orange-500 w-4 h-4" /> AVAILABILITY
                STATUS
              </Label>
              <Select.Trigger className="border border-gray-600 focus:border-orange-500">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="available" textValue="Available">
                    Yes
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="not-available" textValue="Not Available">
                    No
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField isRequired name="description">
              <Label className="flex items-center gap-2 text-gray-400">
                <FileText className="text-orange-500 w-4 h-4" /> DESCRIPTION
              </Label>
              <TextArea
                className="h-30 resize-none border border-gray-600 focus:border-orange-500"
                placeholder="Tell drivers what makes your car special..."
              />
            </TextField>

            <Button
              type="submit"
              className="bg-orange-500 text-black rounded-xl w-full mt-6 btn"
            >
              Publish listing
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AddCarPage;
