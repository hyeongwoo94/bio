import react_1 from "../img/react_1.jpg";
import react_2 from "../img/react_2.jpg";

const React = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 gap-4 text-center text-2xl dodum">
          <li className="filter drop-shadow-lg border-4 hover:border-red-300 hover:text-red-300">
            <a
              className="inline-block mb-4 hover:text-red-400"
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/hyeongwoo94/coin-myself"
            >
              <img
                className="inline-block w-full mb-4"
                src={react_1}
                alt="html"
              />
              코드 보러가기
            </a>
          </li>
          <li className="filter drop-shadow-lg border-4 hover:border-red-300 hover:text-red-300">
            <a
              className="inline-block pb-4"
              target={"_blank"}
              rel="noreferrer"
              href="https://hyeongwoo94.github.io/TRELLOCLONE/"
            >
              <img
                className="inline-block w-full mb-4"
                src={react_2}
                alt="html"
              />
              해당 페이지 바로가기
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React;
