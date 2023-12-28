"use client";
import React from "react";
import '../Loader/loader.css'

const Loader = ({loading}) => {
  return (
    loading?<div className="loader-container"><span className="loader"></span></div>:null
  )}
export default Loader;