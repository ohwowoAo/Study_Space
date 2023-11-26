import React from "react";
import Account from "./account";
import Navibar from "../navibar";
import { Toaster } from "@/components/ui/toaster";

const page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Account />
      <Toaster />
    </div>
  );
};

export default page;
