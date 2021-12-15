import Hearder from "../component/Hearder";
import react from "../img/react.png";
import css from "../img/css.png";
import illust from "../img/illust.png";
import html from "../img/html.png";
import js from "../img/js.png";
import sass from "../img/sass.png";
import photoshop from "../img/photoshop.png";
import tailwind from "../img/tailwind.png";
import Footer from "../component/Footer";
const Skill = () => {
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-8">
        <h2>기초 퍼블리싱</h2>
          <ul className="grid grid-cols-2 gap-12 mt-4">
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={html} alt="html" />
              <span className="bar_4 my-auto"></span>
              <span>90%</span>
            </li>
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={css} alt="css" />
              <span className="bar_4 my-auto"></span>
              <span>90%</span>
            </li>
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={js} alt="js" />
              <span className="bar_2 my-auto"></span>
              <span>70%</span>
            </li>
          </ul>
          
          <hr className="my-8" />
          <h2>CSS 라이브러리, 프레임 워크</h2>
          <ul className="grid grid-cols-2 gap-12 mt-4">
            <li className="flex gap-2">
              <img
                className="inline-block w-1/6"
                src={tailwind}
                alt="tailwind"
              />
              <span className="bar_4 my-auto"></span>
              <span>90%</span>
            </li>
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={sass} alt="sass" />
              <span className="bar_3 my-auto"></span>
              <span>80%</span>
            </li>
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={react} alt="리액트" />
              <span className="bar my-auto"></span>
              <span>50%</span>
            </li>
          </ul>
          
          <hr className="my-8" />
          <h2>디자인 툴</h2>
          <ul className="grid grid-cols-2 gap-12 mt-4">
            <li className="flex gap-2">
              <img
                className="inline-block w-1/6"
                src={photoshop}
                alt="photoshop"
              />
              <span className="bar_4 my-auto"></span>
              <span>90%</span>
            </li>
            <li className="flex gap-2">
              <img className="inline-block w-1/6" src={illust} alt="illust" />
              <span className="bar_2 my-auto"></span>
              <span>70%</span>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <Footer />
    </>
  );
};

export default Skill;
