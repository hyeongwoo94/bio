import face1 from "../img/person1-1.jpg";
import face2 from "../img/person2-2.jpg";
import face3 from "../img/person3-3.jpg";
import jincho from "../img/jincho.jpg";
import candl from "../img/candl.jpg";
import food from "../img/food.jpg";

const Photo = () => {
 
  return (
    <>
      <div className="dodum animate__animated animate__slideInUp">
        <div className="mb-8">
          <h2 className="mb-4 text-xl">인물 보정</h2>
          <ul className="grid-cols-2 md:grid-cols-3 grid gap-4">
            <li className="scale">
              <img src={face1} alt="인물보정1" />
            </li>
            <li className="scale">
              <img src={face2} alt="인물보정2" />
            </li>
            <li className="scale">
              <img src={face3} alt="인물보정3" />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl">상세 페이지</h2>
          <div className="grid grid-cols-3 gap-4">
            <a href={jincho} onClick={"_blank"}><img className="border" src={jincho} alt="진초영묘사향단" /></a>
            <a href={food} onClick={"_blank"}><img className="border" src={food} alt="제육" /></a>
            <a href={candl} onClick={"_blank"}><img className="border" src={candl} alt="향초" /></a>
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </>
  );
};

export default Photo;
