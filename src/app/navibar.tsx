import Link from "next/link";
import React from "react";

const Navibar = () => {
  return (
    <div className="border border-slate-400 w-[120px] h-[150px] flex flex-col	fixed	top-[100px] left-3 gap-[10px]">
      <Link href="/">Profile</Link>
      <Link href="/Account">Account</Link>
      <Link href="/Appearance">Appearance</Link>
      <Link href="/Notifications">Notifications</Link>
    </div>
  );
};

export default Navibar;
