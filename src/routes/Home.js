import Footer from "../component/Footer";
import Hearder from "../component/Hearder";
import home from "../img/pngegg.png";
const Home = () => {
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto dodum">
        <div className="pt-4">
          <div className="text-5xl">
            <p>저의 포트폴리오에 방문하신것을 환영합니다.</p>
          </div>
          <div className="mt-4 text-2xl dodum">
            <p>저는</p>
            <p>프론트 엔드 개발자가 되고 싶은 PHW</p>
            <p>경제적 자유를 꿈꾸는 PHW</p>
            <p>틀에 박혀있는 것보다는 자유롭고 싶은 PHW</p>
          </div>
          <div className="text-right">
            <img
              className="text-right inline-block"
              src={home}
              alt="메인이미지"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
