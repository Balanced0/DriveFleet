import { Car } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="border-t-1 border-t-gray-500"></div>
      <div className="container mx-auto px-4 pt-10 mb-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="flex gap-2 items-center">
              <div className="bg-orange-500 p-2 rounded-2xl">
                <Car className="text-black" />
              </div>
              <a className="text-xl">
                <span className="font-extrabold">Drive</span>
                <span className="font-extrabold text-orange-500">Fleet</span>
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              The premium car rental marketplace. Find, book and drive your
              perfect ride in seconds.
            </p>
          </div>
          <div className="flex flex-col md:justify-self-center">
            <h3 className="font-extrabold mb-2 text-xl">Product</h3>
            <Link href="/explore" className="text-gray-400">
              Explore Cars
            </Link>
            <Link href="/add" className="text-gray-400">
              List Your Car
            </Link>
            <Link href="/bookings" className="text-gray-400">
              My Bookings
            </Link>
          </div>
          <div className="flex flex-col md:justify-self-center">
            <h3 className="font-extrabold mb-2 text-xl">Company</h3>
            <Link href="/" className="text-gray-400">
              About
            </Link>
            <Link href="/" className="text-gray-400 mb-2">
              Contact
            </Link>
            <div className="flex gap-2">
              <FaXTwitter className="text-gray-400 cursor-pointer" />
              <FaFacebookF className="text-gray-400 cursor-pointer" />
              <FaInstagram className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-t-gray-500"></div>
      <p className="text-gray-400 text-sm mt-4 text-center">© 2026 DriveFleet. All rights reserved.</p>
    </div>
  );
};

export default Footer;
