import logo from "../img/logo.png";
import { Link, NavLink, } from "react-router-dom";

const Hearder = () => {

  return (
    <div>
      <h1 className="bg-gray-900 text-center">
        <Link to="/">
          <img className="inline-block" src={logo} alt="메인 로고" />
        </Link>
      </h1>
      <div className="max-w-screen-lg text-center mx-auto cook">
        <header>
          <ul className="flex justify-end mx-auto my-4 text-2xl gap-4">
            <li>
              <NavLink
                activeclassname="text-green-500"
                to="/Iam"
                className="block border-b-2 hover:border-black text-gray-300 hover:text-black"
                href="#"
              >
                박형우
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="text-green-500"
                to="/Skill"
                className="block border-b-2 hover:border-black text-gray-300 hover:text-black"
                href="#"
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                activeclassname="text-green-500"
                to="/Project"
                className="block border-b-2 hover:border-black text-gray-300 hover:text-black"
                href="#"
              >
                Project
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Hearder;
