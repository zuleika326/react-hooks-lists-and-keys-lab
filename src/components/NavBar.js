import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <>
     <a href="#home">home</a>
     <a href="#About">About</a>
     <a href="#Projects">projects</a>
    </>
    }</nav>;
}

export default NavBar;

