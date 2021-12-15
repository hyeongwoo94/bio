import vamos from "../img/Vamos.png";
import plan from "../img/Plan.pdf";
const Plan = () => {
  return (
    <>
      <div>
        <ul className="grid grid-cols-2 my-4">
          <li className="text-2xl">
            <p>제작인원: 1명</p>
            <p>제작기간: 2주</p>
            </li>
          <li className="text-right">
            <a href={plan} download="Plan.pdf" alt="기획서">
              기획서 다운로드
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="http://hyeong.dothome.co.kr/"
        >
          <img className="border" src={vamos} alt="포폴이미지" />
        </a>
      </div>
    </>
  );
};

export default Plan;
