import { useState } from "react";
import Footer from "../component/Footer";
import Hearder from "../component/Hearder";
import History from "../component/History";
import Personality from "../component/Personality";

const Iam = () => {
  const [index,setIndex] = useState("1");
  const choice = (event) => {
    setIndex(event.target.value);
  }
  return(
    <>
    <Hearder />
    <div className="max-w-screen-lg mx-auto mb-20">
      <div className="">
        <div className="mb-8 text-right dodum">
          <select className="outline-none px-2 border-2 border-gray-300 rouded-sm" value={index} onChange={choice}>
            <option value="1">성격</option>
            <option value="2">히스토리</option>
          </select>
        </div>
        <div  className="">
        
          {index === "1" ? <Personality /> : null}
          {index === "2" ? <History /> : null}
        </div>   
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Iam;