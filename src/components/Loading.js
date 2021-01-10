import React from "react";
import "../index.css";

function Loading() {
  return (
    <div className="lds-roller w-full h-screen bg-gray-900 flex items-center justify-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
