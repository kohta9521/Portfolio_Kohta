"use client";
import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Kohta　 </span>
        <span>Engineer　 </span>
        <span>Portfolio　</span>
      </div>
    </div>
  );
};

export default PreLoader;
