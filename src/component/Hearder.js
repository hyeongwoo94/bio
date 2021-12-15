import logo from "../img/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Hearder = () => {
  const [openTab, setOpenTab] = useState(true);
  const Click = () => {
    setOpenTab(!openTab);
  };

  return (
    <div>
      <h1 className="bg-indigo-400 text-center">
        <Link to="/">
          <img className="inline-block" src={logo} alt="메인 로고" />
        </Link>
      </h1>
      <div className="max-w-screen-lg text-center mx-auto dodum">
        <header>
          <ul className="flex justify-end mx-auto my-4 text-2xl gap-4">
            <li>
              <Link
                to="/Iam"
                className="block border-b-2 hover:border-blue-300 text-gray-300 hover:text-blue-300"
                href="#"
              >
                박형우
              </Link>
            </li>
            <li>
              <Link
                to="/Skill"
                className="block border-b-2 hover:border-blue-300 text-gray-300 hover:text-blue-300"
                href="#"
                onClick={Click}
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className="block border-b-2 hover:border-blue-300 text-gray-300 hover:text-blue-300"
                href="#"
              >
                Project
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Hearder;
