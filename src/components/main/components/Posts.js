import React from "react";
import wa from "../../../assets/add.png";
import Post from "./Post";
function Posts() {
  let logedIn = false;
  return (
    <div className={"py-2"}>
      <div className={"grid grid-cols-3 gap-1"}>
        {logedIn && (
          <div
            className={
              "bg-gray-200 w-full max-w-36 max-h-36 flex justify-center"
            }
          >
            <img src={wa} alt="Facebook" className={"max-w-36 max-h-36"} />
          </div>
        )}

        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Posts;
