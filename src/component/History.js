import 'animate.css';
import me from '../img/me.jpg'
import SimpleSlider from './SimpleSlider';
const History = () => {
  return(
    <>
    <div>
    
        <h2 className="text-center text-2xl dodum tx">
          좌우명:
          <span className="text-center text-3xl ml-2 Tangerine">
            Your <span className="text-red-600">Life</span> is only 
            <span className="text-red-600">one</span></span>
        </h2>
        
   
    <ul className="grid md:grid-cols-2 gap-4 ">
      <li>
       <div className="animate__animated animate__fadeInTopLeft mt-4">
        <img className="rounded-2xl w-auto" src={me} alt="내사진" />
       </div>
      </li>
      <li className="text-center ">
        <div className="animate__animated animate__fadeInTopRight mt-4 py-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold dodum">HISTORY</h2>
          <ul className="mt-2 dodum">
            <li className="mb-4">
              1994. 06. 25 출생
            </li>
            <li className="mb-4">
              2006 전국 수영대회 금메달
            </li>
            <li className="mb-4">
              2013 - 2020 남서울대학교<br />
              글로벌 무역학과 재학 / 졸업
            </li>
            <li className="mb-4">
              2014-2016 해병대 입대 / 전역
            </li>
            <li className="mb-4">
              2019-2020 Twosome 점장 근무
            </li>
            <li className="mb-4">
              2021 포토샵 1급 자격증 취득
            </li>
            <li>
              2021 웹디자인, 웹퍼블리셔 수료
            </li>
          </ul>
        </div>
      </li>
    </ul>
    </div>
    <div className="animate__animated animate__flipInX">
      <div className="my-4 text-center">
        <h2 className="mt-8 mb-4 dodum">저는 이렇게 생겼습니다 😁</h2>
        <SimpleSlider />
      </div>
    </div>
    </>
  )
} 

export default History;