import React from "react";
import Profile from "./profile";
import Navibar from "./navibar";

const page = () => {
  return (
    <div className="relative">
      <Navibar />
      <Profile />
    </div>
  );
};

export default page;
