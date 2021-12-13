import logo from "../img/logo.png";
import { Link, Route } from "react-router-dom";
import { useState } from "react";


const Hearder = () => {
  const click = (event) => {
    event.onClick(true);
  }
  return (
    <div>
      <h1 className="bg-black text-center">
        <img className="inline-block" src={logo} alt="메인 로고"/>
      </h1>
      <div className="max-w-screen-lg text-center mx-auto">
        <header>
          <ul className="grid grid-cols-3 mx-auto mt-8 mb-4 text-2xl gap-4">
            <li className="border-b-2 hover:border-sky-200 hover:text-sky-200">
              <Link to="/Skill" className="block" href="#">Skill</Link>
            </li>
            <li className="border-b-2 hover:border-sky-200 hover:text-sky-200">
              <Link to="/Iam" className="block" href="#">I am</Link>
            </li>
            <li  className="border-b-2 hover:border-sky-200 hover:text-sky-200">
              <Link to="/Project" className="block" href="#">Project</Link>
            </li>
          </ul>
        </header>
      </div>
     
    </div>
  );
};

export default Hearder;
