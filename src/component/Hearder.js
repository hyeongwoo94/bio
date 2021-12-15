import logo from "../img/logo.png";
import { Link, NavLink, useLocation,} from "react-router-dom";
import { useState } from "react";


const Hearder = () => {
  const [openTab, setOpenTab] = useState(true);
  const Click = () => {
    setOpenTab(!openTab);
  }
  
  return (
    <div>
      <h1 className="bg-indigo-400 text-center">
        <Link to="/">
          <img className="inline-block" src={logo} alt="메인 로고" />
        </Link>
      </h1>
      <div className="max-w-screen-lg text-center mx-auto">
        <header>
          <ul className="grid grid-cols-3 mx-auto mt-8 mb-4 text-2xl gap-4">
            <li  className={"w-2/6 mx-auto border-b-2 hover:border-blue-200 hover:text-blue-200"
          +(openTab ? "text-green-400" : "text-blue-300")
          }>
              <Link
                to="/Skill"
                className="block text-gray-300 hover:text-blue-200"
                href="#"
                onClick={Click}
              >
                Skill
              </Link>
            </li>
            <li className="w-2/6 mx-auto border-b-2 hover:border-blue-200 hover:text-blue-200">
              <Link
                to="/Iam"
                className="block text-gray-300 hover:text-blue-200"
                href="#"
              >
                박형우
              </Link>
            </li>
            <li className="w-2/6 mx-auto border-b-2 hover:border-blue-200 hover:text-blue-200">
              <Link
                to="/Project"
                className="block text-gray-300 hover:text-blue-200"
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
