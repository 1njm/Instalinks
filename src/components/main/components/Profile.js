import React from "react";
import image from "../../../assets/link.png";
function Profile() {
  return (
    <div className="my-4">
      <div className={"flex justify-center"}>
        <div className={"bg-gray-100 h-20 w-20 rounded-full"}>
          <img src={image} alt="" className={"rounded-full"} />
        </div>
      </div>
      <div className={"flex justify-center"}>
        <h1 className={"text-3xl font-serif"}>Najam</h1>
      </div>
    </div>
  );
}

export default Profile;
