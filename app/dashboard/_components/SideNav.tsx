"use client";
import {
  FileClock,
  HistoryIcon,
  Home,
  Icon,
  Settings2Icon,
  SettingsIcon,
  Wallet2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
// import UsageTrack from './UsageTrack';

function SideNav() {
  const [isClicked, setIsClicked] = useState(false);

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Setting",
      icon: SettingsIcon,
      path: "/dashboard/settings",
    },
    {
      name: "How it Works?",
      icon: FaQuestionCircle,
      path: "/dashboard/howitworks",
    },
  ];

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            width={160}
            height={100}
            alt="logo"
            className={`cursor-pointer transition-transform duration-300 ease-in-out 
            ${
              isClicked
                ? "rotate-12 scale-110"
                : "hover:scale-105 hover:shadow-lg"
            }`}
            onClick={handleClick}
          />
        </Link>
      </div>
      <hr className="my-6 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              key={index}
              className={`flex gap-2 mb-2 p-3
          hover:bg-primary hover:text-white 
          hover:transition-all cursor-pointer items-center 
          ${path === menu.path ? "bg-primary text-white" : ""}`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        {/* <UsageTrack/> */}
      </div>
    </div>
  );
}

export default SideNav;
