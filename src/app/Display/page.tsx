import React from "react";
import Display from "./display";
import Navibar from "../navibar";
import { Toaster } from "@/components/ui/toaster";

const page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Display />
      <Toaster />
    </div>
  );
};

export default page;
