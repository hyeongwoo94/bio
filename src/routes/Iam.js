import { useState } from "react";
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
    <div className="max-w-screen-lg mx-auto">
      <div className="text-left">
        <div className="mb-8">
          <select className="outline-none border-2 border-gray-300 rouded-sm" value={index} onChange={choice}>
            <option value="1">성격</option>
            <option value="2">역사</option>
          </select>
        </div>
        <div  className="max-h-screen">
        
          {index === "1" ? <Personality /> : null}
          {index === "2" ? <History /> : null}
        </div>   
      </div>
    </div>
    </>
  )
}

export default Iam;