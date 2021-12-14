import Hearder from "../component/Hearder";
const Home = () => {
  return (
    <>
      <Hearder />
      <div className="max-w-screen-lg mx-auto">
        <p>리엑트를 기반으로 만들었습니다.</p>
        <ul>
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
