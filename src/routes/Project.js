import { useState } from "react";
import Footer from "../component/Footer";
import Hardcode from "../component/Hardcode";
import Hearder from "../component/Hearder";
import Photo from "../component/Photo";
import Plan from "../component/Plan";
import React from "../component/React";

const Project = () => {
  const [index, setIndex] = useState("0");
  const choice = (event) => {
    setIndex(event.target.value);
  };
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto mb-20 mt-4 px-2 md:px-0">
        <div className="">
          <div className="mb-8 text-right dodum">
            <select
              className="outline-none px-2 border-2 border-gray-300 rouded-sm"
              value={index}
              onChange={choice}
            >
              <option value="0">기획/제작</option>
              <option value="1">퍼블리싱</option>
              <option value="2">포토샵</option>
              <option value="3">리액트코딩</option>
            </select>
          </div>
          <div className="">
            {index === "0" ? (
              <div>
                <Plan />
              </div>
            ) : null}
            {index === "1" ? (
              <div>
                <Hardcode />{" "}
              </div>
            ) : null}
            {index === "2" ? (
              <div>
                <Photo />{" "}
              </div>
            ) : null}
            {index === "3" ? (
              <div>
                <React />{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
