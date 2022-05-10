import loading from "../assets/loading.gif";
import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
