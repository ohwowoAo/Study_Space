import React from "react";
import Appearance from "./appearance";
import Navibar from "../navibar";

const Page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Appearance />
    </div>
  );
};

export default Page;
