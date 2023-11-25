import React from "react";
import Display from "./display";
import Navibar from "../navibar";

const page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Display />
    </div>
  );
};

export default page;
