import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#2699fb]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-24 py-14 md:flex gap-3">
          <div className="w-[350px]">
            <h2 className="font-bold text-2xl mb-3">Wscube Tech</h2>
            <span className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              expedita dignissimos dolorem adipisci. Provident, sunt deserunt
              expedita eveniet necessitatibus odit!
            </span>
            <div className="flex gap-6 mt-4">
              <FaInstagram className="text-xl cursor-pointer" />
              <FaFacebook className="text-xl cursor-pointer" />
              <FaTwitter className="text-xl cursor-pointer" />
              <FaYoutube className="text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-7 md:gap-20 mt-4">
            <div>
              <ul>
                <h2 className="text-[blue]">Solutions</h2>
                <li className="mt-1 text-white hover:underline cursor-pointer">Analytics</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Marketing</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Commerce</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Insights</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="text-[blue]">Supports</h2>
                <li className="mt-1 text-white hover:underline cursor-pointer">Pricing</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Documentations</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">API Status</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Guides</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="text-[blue]">Company</h2>
                <li className="mt-1 text-white hover:underline cursor-pointer">About</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Blog</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Job</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Press</li>
                <li className="mt-1 text-white hover:underline cursor-pointer">Career</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
