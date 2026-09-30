"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Category", href: "/category" },
  { name: "Services", href: "/service" },
];

export default function Navbar() {
  const [isOpen, setHamburger] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full mt-2 flex  justify-center items-center fixed pointer-events-none z-100">
      <nav className="w-[90%] sm:w-fit px-5  bg-[#6640403d] backdrop-blur-md sm:px-2 py-2 rounded-xl sm:rounded-full  pointer-events-auto ">
        <div className="sm:flex justify-center items-center ">
          <div className="flex justify-between mb-2 sm:mb-0">
            <Link href="/" className="text-xl font-bold sm:mx-4">
              <div
                onClick={() => {
                  setHamburger(false);
                }}
              >
                <img
                  className="w-25 mt-2 sm:mt-0"
                  src="/imgs/companylogo.svg"
                  alt="navbar_logo"
                />
              </div>
            </Link>
            <div>
              <div className="flex items-center">
                <Link href="/contact" className="">
                  <button
                    onClick={() => {
                      setHamburger(false);
                    }}
                    className="sm:hidden w-20 h-7 text-sm text-white rounded-2xl "
                  >
                    Contact
                  </button>
                </Link>
                <div
                  onClick={() => {
                    setHamburger((prev) => !prev);
                  }}
                  className="sm:hidden  hamburger  overflow-hidden"
                >
                  <span
                    className={`w-full top-1 origin-center   ${isOpen ? "scale-0 translate-y-3.75 " : "scale-100 translate-y-0 "}`}
                  ></span>
                  <span
                    className={
                      isOpen
                        ? "rotate-45 origin-center"
                        : "rotate-0 origin-center"
                    }
                  ></span>
                  <span className={isOpen ? "-rotate-45" : "rotate-0"}></span>
                  <span
                    className={`w-full bottom-1 origin-center  ${isOpen ? "scale-0 -translate-y-3.75 " : "scale-100 translate-y-0 "}`}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sm:flex items-center overflow-hidden transition-all duration-500
            ${isOpen ? "h-40" : "sm:h-full h-0"}
            `}
          >
            <ul className="sm:flex sm:mx-5">
              {links.map((link, index) => {
                return (
                  <Link key={index} href={`${link.href}`}>
                    <li
                      onClick={() => {
                        setHamburger(false);
                      }}
                      className={`text-sm font-light  px-3 rounded-full
                        ${pathname == link.href ? "sm:bg-white text-black" : " text-white"}
                        `}
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })}
            </ul>{" "}
            <Link href="/contact" className="">
              <button
                onClick={() => {
                  setHamburger(false);
                }}
                className="w-20 h-7 sm:ml-2 my-2 sm:my-0 text-sm text-white rounded-2xl "
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
