"use client";
import authBG from "@/assets/auth-bg.jpg";
import { Check } from "@gravity-ui/icons";
import { Car } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const RegisterPage = () => {
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
            Start driving in 60 seconds.
          </h1>
          <p className="text-lg text-gray-400">
            No paperwork. No deposits. Just keys and the open road.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4 bg-black min-h-screen">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex gap-2 items-center mb-8 lg:hidden">
            <div className="bg-orange-500 p-2 rounded-2xl">
              <Car className="text-black" />
            </div>
            <a className="text-xl">
              <span className="font-extrabold">Drive</span>
              <span className="font-extrabold text-orange-500">Fleet</span>
            </a>
          </div>
          <h1 className="text-3xl font-extrabold">Create your account</h1>
          <p className="text-gray-400">Free forever. Cancel anytime.</p>
          <TextField isRequired className="w-full" name="fullName">
            <Label>Full Name</Label>
            <Input placeholder="Full name" className="border border-gray-400" />
          </TextField>
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
            <Input
              placeholder="Enter your email"
              className="border border-gray-400"
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            className="w-full"
            name="photoURL"
            type="url"
            validate={(value) => {
              try {
                new URL(value);
                return null;
              } catch {
                return "Please enter a valid image URL";
              }
            }}
          >
            <Label>Photo URL</Label>

            <Input
              placeholder="Photo URL"
              className="border border-gray-400"
            />

            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className="border border-gray-400"
            />
            <Description>
              Must be at least 6 characters with 1 uppercase, 1 lowercase and 1
              number
            </Description>
            <FieldError />
          </TextField>
          <div className="w-full">
            <Button
              type="submit"
              className="bg-orange-500 text-black w-full rounded-xl"
            >
              Create account
            </Button>
          </div>
          <div className="divider">OR</div>
          <div className="flex gap-2 items-center justify-center border rounded-xl btn border-gray-500 hover:bg-orange-500">
            <FaGoogle /> Continue with Google
          </div>
          <p className="text-center">
            <span className="text-gray-400">Already have an account?</span>{" "}
            <Link href="/login">
              <span className="text-orange-500 font-bold">Login</span>
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
