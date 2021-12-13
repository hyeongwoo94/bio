import Hearder from "../component/Hearder";
import react from "../img/react.png"
import css from "../img/css.png"
import illust from "../img/illust.png"
import html from "../img/html.png"
import js from "../img/js.png"
import sass from "../img/sass.png"
import photoshop from "../img/photoshop.png"
import tailwind from "../img/tailwind.png"
const Skill = () => {
  return(
    <>
    <Hearder />
    <div className="max-w-screen-lg mx-auto">
        <span>스킬 애니메이션 부트스트랩에서 사용한것처럼 깔끔한 것 가져오기</span>
    </div>
    <div>
      <ul className="grid grid-cols-2">
        <li>
          <img src={react} alt= "리액트" />
        </li>
        <li>
          <img src={tailwind} alt= "tailwind" />
        </li>
        <li>
          <img src={html} alt= "html" />
        </li>
        <li>
          <img src={css} alt= "css" />
        </li>
        <li>
          <img src={sass} alt= "sass" />
        </li>
        <li>
          <img src={js} alt= "js" />
        </li>
        <li>
          <img src={illust} alt= "illust" />
        </li>
        <li>
          <img src={photoshop} alt= "photoshop" />
        </li>

      </ul>
    </div>
    </>
  )
}

export default Skill;