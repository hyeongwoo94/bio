import Footer from "../component/Footer";
import Hearder from "../component/Hearder";

const Home = () => {
  return (
    <>
      <Hearder />
      <div className="bg-img h-screen">
        <div className="max-w-screen-lg mx-auto dodum ">
          <div className="animate__animated animate__backInDown">
            <div className="text-5xl pt-16">
              <p className="face">저의 포트폴리오에 방문하신것을 환영합니다.</p>
            </div>
              <div className="text-3xl text-right pt-20 student">
                <p> <strong className="text-pink-500">프론트엔드 개발자</strong>를 목표로 하고 있습니다.<br />
                하나를 알더라도 확실하게 알고 가는 개발자 입니다.<br />
                저의 포트폴리오를 끝까지 봐주시면 감사하겠습니다.</p>
                <p className="text-right">- 박형우</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
