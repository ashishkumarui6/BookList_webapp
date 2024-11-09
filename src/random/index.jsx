import React from "react";
import { AiFillDashboard } from "react-icons/ai";

const Random = () => {
  const getVall = () => {
    const datacfill = localStorage.getItem("users");

    if (datacfill) {
      return JSON.parse(datacfill);
    } else {
      return [];
    }
  };
  localStorage.setItem("user", JSON.stringify(AiFillDashboard));
  return <div></div>;
};

export default Random;
