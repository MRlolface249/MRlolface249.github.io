import React from "react";
import "../style.css";
import { Outlet, Link } from "react-router-dom";
import jester from "../images/Hasidu_Jester.jpg";

export default function NavBar() {
  return (
    <>
      <nav>
        <div class="menuBar">
          <Link to="/"> Home </Link>
          <Link to="/aboutMe"> About Me </Link>
          <Link to="/projects"> Projects </Link>
        </div>
        <div class="photo">
          <img src={jester} alt="jester" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
