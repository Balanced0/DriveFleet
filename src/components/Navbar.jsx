"use client";
import React from "react";
import { Car } from "lucide-react";
import NavLink from "./NavLink";
import Link from "next/link";
import { MdLogin } from "react-icons/md";
import { authClient } from "@/app/lib/auth-client";
import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import { Plus } from "lucide-react";
import { BookMarked } from "lucide-react";
import { LogOut } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  const { data: session } = authClient.useSession();
  if (session) {
    console.log(session.user);
  }
  return (
    <div>
      <div className="navbar bg-black shadow-sm border-b border-gray-600">
        <div className="container mx-auto flex px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/explore">Explore Cars</NavLink>
                </li>
                <li>
                  <NavLink href="/add">Add Car</NavLink>
                </li>
                <li>
                  <NavLink href="/bookings">My Bookings</NavLink>
                </li>
                {session ? (
                  <>
                    <li>
                      <NavLink href="/added">My Added Cars</NavLink>
                    </li>
                    <li onClick={handleSignOut}>
                      <NavLink href="/">Logout</NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink href="/login">Login</NavLink>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-orange-500 p-2 rounded-2xl">
                <Car className="text-black" />
              </div>
              <a className="text-xl">
                <span className="font-extrabold">Drive</span>
                <span className="font-extrabold text-orange-500">Fleet</span>
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/explore">Explore Cars</NavLink>
              </li>
              <li>
                <NavLink href="/add">Add Car</NavLink>
              </li>
              <li>
                <NavLink href="/bookings">My Bookings</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            {session ? (
              <div className="">
                <Dropdown>
                  <Button aria-label="Menu" variant="light" isIconOnly>
                    <div className="flex items-center gap-2 border border-gray-600 rounded-3xl">
                      <div className="avatar p-2">
                        <div className="ring-orange-500 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                          <img
                            src={session.user.image}
                            alt={session.user.name}
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  </Button>
                  <Dropdown.Popover>
                    <Dropdown.Menu
                      onAction={(key) => console.log(`Selected: ${key}`)}
                    >
                      <Dropdown.Item
                        id="new-file"
                        textValue="New file"
                        onPress={() => router.push("/add")}
                      >
                        <Plus className="size-4 shrink-0 text-muted" />
                        <Label>Add Car</Label>
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="open-file"
                        textValue="Open file"
                        onPress={() => router.push("/bookings")}
                      >
                        <BookMarked className="size-4 shrink-0 text-muted" />
                        <Label>By Bookings</Label>
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="save-file"
                        textValue="Save file"
                        onPress={() => router.push("/added")}
                      >
                        <Car className="size-4 shrink-0 text-muted" />
                        <Label>My Added Cars</Label>
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="delete-file"
                        textValue="Delete file"
                        variant="danger"
                        onClick={handleSignOut}
                      >
                        <LogOut className="size-4 shrink-0 text-danger" />
                        <Label>Logout</Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </div>
            ) : (
              <Link
                href="/login"
                className="btn bg-orange-500 text-black rounded-xl"
              >
                Login <MdLogin />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
