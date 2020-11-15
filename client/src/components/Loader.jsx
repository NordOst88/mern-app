import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
