import React from "react";
import fb from "../../../assets/facebook.png"; 
import wa from "../../../assets/whatsapp.png"; 
import insta from "../../../assets/instagram.png"; 
import linkedin from "../../../assets/linkedin.png"; 
import youtube from "../../../assets/youtube.png"; 
import web from "../../../assets/website.png";

const Links = () => {
  return (
    <div className={"flex justify-around py-2 bg-gray-100"}>
      <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
          <img src={fb} alt="Facebook" className={"h-7 w-7"}/>
      </a>
    </div>
  );
};

export default Links;
