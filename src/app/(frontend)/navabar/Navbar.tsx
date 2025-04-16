"use client";
import React, { useState, useEffect } from "react";
import { IconMail, IconPhone, IconNews } from "@tabler/icons-react";
import { FaBlog } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Sidebar from "./sidebar";

export default function Navbar({ navItems }: { navItems: any[] }) {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  // const [menuTimeout, setMenuTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const updateTime = () => {
      const indianTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(indianTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      {/* Dropdown Menu */}
      <div
        className={`fixed top-0 mt-28 left-0 w-full  h-auto bg-black text-white transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
         {navItems.map((item) => (
    <li
      key={item.id}
      className="relative group transform transition-all duration-200 ease-in-out  flex flex-col items-center justify-center"
    >
        {/* Dropdown Menu */}
      {item.dropdown && item.dropdown.length > 0 && (
        <div className="bg-black w-full justify-center px-40 border-b border-gray-400/30 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-400/30">
          
          {/* Domain-based Section */}
          <div className="lg:w-2/3 p-4">
            <h1 className="text-lg font-bold mb-4 text-blue-300">Domain-based</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {item.dropdown
                .filter((dropdownItem: { category: string; }) => dropdownItem.category === "domain_based")
                .map((dropdownItem: { id: React.Key | null | undefined; icon: { url: string | StaticImport; }; url: any; newTab: any; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                  <li
                    key={dropdownItem.id}
                    className="flex items-center pl-4 pt-1 text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 hover:text-gray-200 space-x-2"
                  >
                    {/* Icon */}
                    {dropdownItem.icon?.url && (
                      <Image
                        width={40}
                        height={40}
                        src={dropdownItem.icon.url}
                        alt="Dropdown Icon"
                        className="w-8 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-lg"
                      />
                    )}

                    {/* Label & Details */}
                    <Link
                      href={dropdownItem.url || "#"}
                      target={dropdownItem.newTab ? "_blank" : "_self"}
                      rel={dropdownItem.newTab ? "noopener noreferrer" : undefined}
                      className="text-gray-400 pl-2 group-hover:text-white"
                    >
                      {dropdownItem.label}
                      <br />
                      <span className="text-gray-600 text-sm group-hover:text-gray-400">
                        {dropdownItem.details}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Role-based Section */}
          <div className="lg:w-4/3 p-4">
            <h1 className="text-lg font-bold mb-4 text-blue-300">Role-Based</h1>
            <ul>
              {item.dropdown
                .filter((dropdownItem: { category: string; }) => dropdownItem.category === "role_based")
                .map((dropdownItem: { id: React.Key | null | undefined; icon: { url: string | StaticImport; }; url: any; newTab: any; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                  <li
                    key={dropdownItem.id}
                    className="flex items-center pl-4 pt-1 text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 hover:text-gray-200 space-x-2"
                  >
                    {/* Icon */}
                    {dropdownItem.icon?.url && (
                      <Image
                        width={40}
                        height={40}
                        src={dropdownItem.icon.url}
                        alt="Dropdown Icon"
                        className="w-8 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-lg"
                      />
                    )}

                    {/* Label & Details */}
                    <Link
                      href={dropdownItem.url || "#"}
                      target={dropdownItem.newTab ? "_blank" : "_self"}
                      rel={dropdownItem.newTab ? "noopener noreferrer" : undefined}
                      className="text-gray-400 pl-2 group-hover:text-white"
                    >
                      {dropdownItem.label}
                      <br />
                      <span className="text-gray-600 text-sm group-hover:text-gray-400">
                        {dropdownItem.details}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          
        </div>
      )}
       
    </li>
  ))}
      </div>

      {/* Navbar */}
      <div className="fixed  bg-black opacity-90 border-solid border-b-2 border-gray-700 text-white flex flex-col w-full z-50">
        <div className="bg-black bg-gradient-to-r  md:flex hidden w-full h-4 mt-1.5 items-center justify-between px-4 fixed top-0 z-50">
          <div className="navbar-links flex items-center gap-4 text-gray-300">
            <h1 className="flex items-center text-xs">
              <IconMail className="h-4" /> query@devopsfarm.in
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconPhone className="h-4" />
              +918769511173
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconPhone className="h-4" />
              +919971566583
            </h1>
          </div>
          <Link href="/blogs">
          <div className="navbar-user flex items-center gap-4 text-gray-100">
            <h1 className="flex items-center text-xs">
              <FaBlog className="h-4" /> Blog
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconNews className="h-4" /> News & Events
            </h1>
          </div>
          </Link>
        </div>

        <header className="flex justify-between md:pt-10 items-center p-4">
          <div className="flex items-center space-x-2">
            <Image
              width={40}
              height={40}
              src="/devopsfarm-logo.png"
              alt="Logo"
              className="w-10 md:w-20 h-auto"
            />
            <h1 className="md:text-2xl text-lg font-bold bg-clip-text text-white">
              <Link href="/">DevopsFarm</Link>
            </h1>
          </div>

          <ul className="md:flex items-center hidden gap-6">
  {navItems.map((item) => (
    <li
      key={item.id}
      className="relative group transform transition-all duration-200 ease-in-out hover:scale-125 flex flex-col items-center justify-center"
      onClick={item.label === "Courses" ? () => setMenuOpen(!menuOpen) : undefined}
    >
      {item.url ? (
        <Link href={item.url} className="flex flex-col items-center">
          <p className="text-center text-sm mt-1">{item.label}</p>
        </Link>
      ) : (
        <p className="text-center text-sm mt-1 cursor-pointer">{item.label}</p> // Render text instead of Link
      )}
    </li>
  ))}
</ul>



        
          <div className="relative flex items-center space-x-4">
        
          <Link
           href="https://wa.link/manbm0"
           target='_blank'
          > <Image
              width={40}
              height={40}
              src="/whatsapp.png"
              alt="Profile"
              className="w-10 h-10"
            /></Link>
           
            <div className="inline-flex md:hidden ">
              <Sidebar navItems={navItems} />
            </div>
            <div className="md:flex hidden items-center space-x-1">
              <Image width={40} height={40} src="/image3.png" alt="Weather" className="w-6 h-auto" />
              <span className="text-sm">{time}</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
