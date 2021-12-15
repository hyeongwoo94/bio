import { useState } from "react";
import Footer from "../component/Footer";
import Hardcode from "../component/Hardcode";
import Hearder from "../component/Hearder";
import Photo from "../component/Photo";
import Plan from "../component/Plan";

const Project = () => {
  const [index,setIndex] = useState("0");
  const choice = (event) => {
    setIndex(event.target.value);
  }
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto">
      <div className="">
        <div className="mb-8 text-right dodum">
          <select className="outline-none px-2 border-2 border-gray-300 rouded-sm" value={index} onChange={choice}>
            <option value="0">기획/제작</option>
            <option value="1">하드코딩</option>
            <option value="2">포토샵</option>
          </select>
        </div>
        <div  className="">
          {index === "0" ? <div><Plan /></div> : null}
          {index === "1" ? <div><Hardcode /> </div> : null}
          {index === "2" ? <div><Photo /> </div> : null}
        </div>   
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Project;
