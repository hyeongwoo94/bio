import { useState } from "react";
import Hearder from "../component/Hearder";
import Photo from "../component/Photo";

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
        <p>학원 포트폴리오</p>
        <a target={"_blank"} rel="noreferrer" href="http://hyeong.dothome.co.kr/">링크</a>
        <p>기획서도 갖고 오기</p>
        <p>하드코딩 리뉴얼인데 본사이트 찾아보기 비교해서 보여주기</p>
        <a target={"_blank"} rel="noreferrer" href="http://hyeong.dothome.co.kr/renewal/ace.html">링크</a>
        <a target={"_blank"} rel="noreferrer" href="http://hyeong.dothome.co.kr/renewal/home.html">링크</a>
        <a target={"_blank"} rel="noreferrer" href="http://hyeong.dothome.co.kr/renewal/nello.html">링크</a>

        <p>포토샵가져오기</p>
        <div className="mb-8 text-right">
          <select className="outline-none px-2 border-2 border-gray-300 rouded-sm" value={index} onChange={choice}>
            <option value="0">기획/제작</option>
            <option value="1">리뉴얼</option>
            <option value="2">포토샵</option>
          </select>
        </div>
        <div  className="">
          {index === "0" ? <div>기획/제작</div> : null}
          {index === "1" ? <div>하드코딩</div> : null}
          {index === "2" ? <div><Photo /> </div> : null}
        </div>   
      </div>
    </div>
    </>
  );
};

export default Project;
