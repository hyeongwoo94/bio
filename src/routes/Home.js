import Footer from "../component/Footer";
import Hearder from "../component/Hearder";
import react from "../img/react.png";
import css from "../img/css.png";
import html from "../img/html.png";
import js from "../img/js.png";
import sass from "../img/sass.png";
import tailwind from "../img/tailwind.png";
import main from "../img/pngegg.png";
import { Link } from "react-router-dom";
import vamos from "../img/Vamos.png";
import tones from "../img/Tones.png";

const Home = () => {
  return (
    <>
      <Hearder />
      <div className="animate__animated animate__backInDown">
        {/* 컨텐츠라인 히어로섹션 */}
        <div className="max-w-screen-lg mx-auto my-16 dodum">
          <div className="text-5xl">
            <p className="cook font-bold text-center">
              저의 포트폴리오에 방문하신것을 환영합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 justify-around mt-20">
            <div className="pl-2 md:pl-0 text-3xl text-left student">
              <div>
                <strong className="text-pink-500">프론트엔드 개발자</strong>를
                목표로 하고 있습니다.
                <br />
                하나를 알더라도 확실하게 알고 가는 개발자 입니다.
                <br />
                저의 포트폴리오를 끝까지 봐주시면 감사하겠습니다.
                <p className="text-right">- 박형우</p>
              </div>

              <div className="hidden md:block">
                <ul className="grid grid-cols-3 gap-6 text-center mt-12 bg-gray-100 shadow-inner rounded-xl py-4">
                  <li>
                    <img className="inline-block w-3/6" src={html} alt="html" />
                  </li>
                  <li>
                    <img className="inline-block w-3/6" src={css} alt="css" />
                  </li>
                  <li>
                    <img className="inline-block w-3/6" src={js} alt="js" />
                  </li>
                  <li>
                    <img
                      className="inline-block w-3/6"
                      src={tailwind}
                      alt="tailwind"
                    />
                  </li>
                  <li>
                    <img className="inline-block w-3/6" src={sass} alt="sass" />
                  </li>
                  <li>
                    <img
                      className="inline-block w-3/6"
                      src={react}
                      alt="리액트"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                className="inline-block w-full pt-12"
                src={main}
                alt="메인 내사진"
              />
            </div>
          </div>
        </div>
        {/* 포트폴리오섹션 */}
        <div className="bg-gray-50">
          <div className="px-2 md:px-0 max-w-screen-lg mx-auto py-12">
            <ul className="flex justify-between">
              <li className="text-2xl pb-4 cook">Project</li>
              <li>
                <Link to="/Project" className="text-right">
                  <i className="xi-plus text-xl text-gray-400 hover:text-red-400"></i>
                </Link>
              </li>
            </ul>
            <div className="md:grid-cols-2 grid gap-6">
              <img className="border" src={vamos} alt="포폴이미지" />
              <img className="bo w-auto" src={tones} alt="리뉴얼사이트" />
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0 max-w-screen-lg mx-auto h-72 text-center face">
          <p className="text-3xl pt-12">" 차별점 "</p>
          <p className="text-2xl pt-8">퍼블리싱을 할 수 있고 간단한 <span className="text-pink-500">포토샵, 일러스트</span>도 할 수 있습니다.<br />또한, 계속 공부하여 능력을 키워나가는 중입니다.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
