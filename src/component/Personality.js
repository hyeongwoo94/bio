import { Radar } from "@nivo/radar";
const Personality = () => {
  const data = [
    {
      taste: "긍정적",
      과거: 20,
      현재: 80,
    },
    {
      taste: "부정적",
      과거: 95,
      현재: 30,
    },
    {
      taste: "성실함",
      과거: 90,
      현재: 90,
    },
    {
      taste: "꼼꼼함",
      과거: 90,
      현재: 90,
    },
    {
      taste: "행복함",
      과거: 50,
      현재: 80,
    },
  ];

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: "#333",
          fontSize:18
        },
      },
    },
    grid: {
      line: {
        stroke: "#cfcfcf",
        strokeDasharray: "",
      },
    },
    dots: {
      text: {
        fill: "#333",
        fontSize: 15,
        fontWeight: 700,
      },
    },
    tooltip: {
      container: {
        background: "#fff",
        color: "inherit",
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
        fontFamily: "monospace",
      },
    },
  };
  return (
    <>
      <div className="animate__animated animate__backInUp">
        <h2 className="text-center text-3xl">성격 변화</h2>
        <div className="max-w-screen-sm mx-auto text-xl" style={{ width: "550px" }}>
          <Radar
            width={550}
            height={550}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            data={data}
            indexBy="taste"
            keys={["과거", "현재"]}
            colors={["#4fa1ff", "#FF665A"]}
            theme={theme}
            dotSize={25}
            enableDotLabel={true}
            dotLabelYOffset={5}
            gridShape="linear"
          />
        </div>
        <div className="">
          <dl className="">
            <dt className="my-2 font-extrabold text-2xl">
              긍정적
            </dt>
            <dd className="ml-12 p-4 border-2">
              과거에는 잘 할 수 있다는 것보다 실패의 두려움이 많았다. 하지만 해병대 많은 것을 깨달았다. 해병대에서는 "죄송합니다", "모르겠습니다" 등 부정적인 말을 못 하게 했다.<br />
              이 말들 대신에 "확인해보겠습니다", "제가 잘하겠습니다"를 사용하게 했다. 이것은 하나의 부조리이다.
              처음에는 당연히 이해가 안됬다. 모르는 것을 모른다고 말하는 게 잘 못된 게 아니라고 생각했기 때문이다.<br />
              이 부조리가 나에게 긍정적인 영향을 준 포인트는 바로 행동이다. 말만 "확인해보겠습니다", "제가 잘하겠습니다" 이렇게 하는 것이 아니라 실제로 확인하는 액션을 취해야 했기 때문이다.<br />
              정말 말도 안 되는 질문에 "확인해보겠습니다"를 말하고 그것을 확인하러 가면 선임들이 당황해서 말릴 정도로 확인하는 액션을 취했다. 이렇게 액션을 취하다보니 정말 말도 안되는 것을 확인 할 때도 있었다.<br />
              이때 나는 변했다. <strong>아무리 어려운 거라도 한번 시도해보자는 생각을 하게 되니 모든 상황에 긍정적으로 생각하게 되었다.</strong>
            </dd>
            <dt className="my-2 font-extrabold text-2xl">
              부정적
            </dt>
            <dd className="ml-12 p-4 border-2">
              왜긍적적으로 되엇는가
            </dd>
            <dt className="my-2 font-extrabold text-2xl">
              성실함
            </dt>
            <dd className="ml-12 p-4 border-2">
              왜긍적적으로 되엇는가
            </dd>
            <dt className="my-2 font-extrabold text-2xl">
              꼼꼼함
            </dt>
            <dd className="ml-12 p-4 border-2">
              왜긍적적으로 되엇는가
            </dd>
            <dt className="my-2 font-extrabold text-2xl">
              행복함
            </dt>
            <dd className="ml-12 p-4 border-2">
              왜긍적적으로 되엇는가
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Personality;
