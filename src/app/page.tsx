import React from "react";
import Profile from "./profile";
import Navibar from "./navibar";
import { Toaster } from "@/components/ui/toaster";

const page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Profile />
      <Toaster />
    </div>
  );
};

export default page;
