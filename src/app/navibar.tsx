"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navibar = () => {
  //현재 주소값
  const pathname = usePathname();

  const naviItem = [
    {
      label: "Profile",
      path: "/",
    },
    {
      label: "Account",
      path: "/Account",
    },
    {
      label: "Appearance",
      path: "/Appearance",
    },
    {
      label: "Notifications",
      path: "/Notifications",
    },
    {
      label: "Display",
      path: "/Display",
    },
  ];

  return (
    <div className="border border-slate-400 w-[120px] h-auto flex flex-col fixed top-[100px] left-3 gap-[10px]">
      {naviItem.map((item, index) => (
        <Link href={item.path} key={index}>
          <div
            className={`${pathname === item.path ? "bg-slate-200" : ""} p-3`}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navibar;
