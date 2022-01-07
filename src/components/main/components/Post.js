import React from "react";
import wa from "../../../assets/najam.png"; 

function Post() {
    let link = "https://stackoverflow.com/";
  return (
    <div className={"bg-black w-full max-w-36 max-h-36 flex justify-center"}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={wa} alt="Facebook" className={"max-w-36 max-h-36"} />
      </a>
    </div>
  );
}

export default Post;
