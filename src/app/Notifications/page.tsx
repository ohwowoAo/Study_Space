import React from "react";
import Navibar from "../navibar";
import Notifications from "./notifications";
import { Toaster } from "@/components/ui/toaster";

const Page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Notifications />
      <Toaster />
    </div>
  );
};

export default Page;
