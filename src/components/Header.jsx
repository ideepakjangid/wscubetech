import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-full bg-[#2699fb] md:static sticky top-0 z-10">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center py-7 md:px-24 px-4 ">
          <div className="text-[30px] md:text-[35px] font-bold">
            Wscube Tech
          </div>
          {toggle ? (
            <FaTimes
              onClick={() => setToggle(!toggle)}
              className="block md:hidden text-2xl"
            />
          ) : (
            <IoMdMenu
              onClick={() => setToggle(!toggle)}
              className="block md:hidden text-2xl"
            />
          )}
          <ul className="hidden md:flex gap-4 font-bold">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Careers</li>
            <li className="cursor-pointer hover:text-white">Profile</li>
          </ul>
          {/* Responsive Menu */}
          {
            toggle ?
            <ul className="fixed top-[100px] w-full h-full pl-4 pt-4 left-[-2px] duration-500 bg-black md:hidden flex flex-col gap-4 font-bold">
            <li className="cursor-pointer text-white">Home</li>
            <li className="cursor-pointer text-white">About</li>
            <li className="cursor-pointer text-white">Careers</li>
            <li className="cursor-pointer text-white">Profile</li>
            </ul>
            :
            <ul className="fixed top-[100px] w-full h-full pl-4 pt-4 duration-500 left-[-100%] bg-black md:hidden flex flex-col gap-4 font-bold">
            <li className="cursor-pointer text-white">Home</li>
            <li className="cursor-pointer text-white">About</li>
            <li className="cursor-pointer text-white">Careers</li>
            <li className="cursor-pointer text-white">Profile</li>
            </ul>
          }
        </div>
      </div>
    </>
  );
}
