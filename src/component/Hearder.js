import logo from "../img/logo.png";
import { Link, NavLink, } from "react-router-dom";

const Hearder = () => {

  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 justify-betwwen ">
      <p className="text-left">
        <Link to="/">
          <img className="inline-block" src={logo} alt="메인 로고" />
        </Link>
      </p>
      <ul className="flex justify-end my-4 text-2xl gap-4 pt-2">
            <li>
              <NavLink
                
                to="/Iam"
                className="block text-gray-300 hover:text-green-300"
                href="#"
              >
                박형우
              </NavLink>
            </li>
            <li>
              <NavLink
                
                to="/Skill"
                className="block text-gray-300 hover:text-green-300"
                href="#"
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                
                to="/Project"
                className="block text-gray-300 hover:text-green-300"
                href="#"
              >
                Project
              </NavLink>
            </li>
          </ul>
      </div>
      <div className="max-w-screen-lg text-center mx-auto cook">
        <header>
          
        </header>
      </div>
    </div>
  );
};

export default Hearder;
