import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Hearder = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-screen-lg mx-auto">
          <p className="text-center">
            <Link to="/bio">
              <img className="inline-block" src={logo} alt="메인 로고" />
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-screen-lg text-center mx-auto cook">
        <ul className="grid grid-cols-3 justify-end my-4 text-2xl gap-4 pt-2">
          <li>
            <NavLink
              to="/Iam"
              className="block text-gray-300 hover:text-red-400"
              href="#"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Skill"
              className="block text-gray-300 hover:text-red-400"
              href="#"
            >
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Project"
              className="block text-gray-300 hover:text-red-400"
              href="#"
            >
              Project
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hearder;
