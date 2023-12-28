"use client";
import React from "react";


const UploadImage = ({error,title,image,handleChange}) => {
  return (
    <>
    {/* <label>{title}</label> */}
    <input 
        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/JPG, image/JPEG, image/webp" 
        onChange={handleChange}
     />
    {error && <div style={{color:'red'}}>Please select Banner image </div>}
    </>
  )
}
export default UploadImage;