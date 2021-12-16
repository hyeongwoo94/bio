import vamos from "../img/Vamos.png";
import plan from "../img/file/Plan.pdf";
const Plan = () => {
  return (
    <div className="dodum animate__animated animate__slideInUp">
      <div>
        <ul className="grid grid-cols-2 my-4">
          <li className="text-xl text-gray-600">
            <i className="xi-user align-text-bottom"></i><span className="ml-2">인원:1명</span>
            <i className="xi-calendar-add align-text-bottom ml-8"></i><span className="ml-2">기간:3주</span>
            </li>
          <li className="text-right text-md text-gray-400">
            <i className="xi-diskette mr-1"></i>
            <a className="hover:border-blue-400 hover:text-blue-400" href={plan} download="Plan.pdf" alt="기획서">
              기획서 다운로드
            </a><br />
            <a className="hover:border-blue-400 hover:text-blue-400" onClick={"_blank"} href="https://github.com/hyeongwoo94/vamos" alt="코드">
              Vaoms 코드보러가기
            </a>
            <p className="text-sm text-gray-400 mt-2">이미지 클릭시 해당홈페이지 바로가기</p>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="http://hyeong.dothome.co.kr/"
        >
          <img className="border" src={vamos} alt="포폴이미지" />
        </a>
      </div>
    </div>
  );
};

export default Plan;
