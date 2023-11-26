import React from "react";
import Appearance from "./appearance";
import Navibar from "../navibar";
import { Toaster } from "@/components/ui/toaster";

const Page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Appearance />
      <Toaster />
    </div>
  );
};

export default Page;
