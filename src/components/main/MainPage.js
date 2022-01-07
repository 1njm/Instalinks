import Profile from "./components/Profile";
import Links from "./components/Links";
import React from "react";
import Posts from "./components/Posts";
function MainPage() {
  return (
    <div className="max-w-lg mx-auto">
      <Profile />
      <Links />
      <Posts />
    </div>
  );
}

export default MainPage;
