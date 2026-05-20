"use client";
import authBG from "@/assets/auth-bg.jpg";
import { Check } from "@gravity-ui/icons";
import { Car } from "lucide-react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
const page = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="hero min-h-screen flex items-start justify-start relative hidden lg:grid"
        style={{
          backgroundImage: `url(${authBG.src})`,
        }}
      >
        <div className="flex gap-2 items-center p-10">
          <div className="bg-orange-500 p-2 rounded-2xl">
            <Car className="text-black" />
          </div>
          <a className="text-xl">
            <span className="font-extrabold">Drive</span>
            <span className="font-extrabold text-orange-500">Fleet</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Your next ride is one tap away.
          </h1>
          <p className="text-lg text-gray-400">
            Join 50,000+ drivers using DriveFleet to rent premium cars
            worldwide.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-black min-h-screen">
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex gap-2 items-center mb-8 lg:hidden">
            <div className="bg-orange-500 p-2 rounded-2xl">
              <Car className="text-black" />
            </div>
            <a className="text-xl">
              <span className="font-extrabold">Drive</span>
              <span className="font-extrabold text-orange-500">Fleet</span>
            </a>
          </div>
          <h1 className="text-3xl font-extrabold">Welcome Back</h1>
          <p className="text-gray-400">Login to continue your journey.</p>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
