import Hearder from "../component/Hearder";
const Home = () => {
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto">
        <p>반갑습니다. 저는</p>
        <p>프론트 엔드 개발자가 되고 싶은 PHW</p>
        <p>경제적 자유를 꿈꾸는 PHW</p>
        <p>틀에 박혀있는 것보다는 자유롭고 싶은 PHW</p>
        <p>이 세가지를 이해하지 못한다면 창을 닫아주세요.</p>
        <p>애니메이션 css를 이용해서 시간별로 순차적으로 페이드 인 아웃하면 아름다운 애니메이션이 가능할 것 같다.</p>
        <ul>
          <li> 이부분은 풋터터로 만드러야겟다.</li>
          <li>react-slick</li>
          <li>slick-carousel</li>
          <li>animate.css</li>
          <li>tailwind.css</li>
          <li>nivo.rocks</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
