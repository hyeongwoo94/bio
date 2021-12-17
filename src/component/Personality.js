import { Radar } from "@nivo/radar";
const Personality = () => {
  const data = [
    {
      taste: "긍정적",
      과거: 30,
      현재: 80,
    },
    {
      taste: "부정적",
      과거: 90,
      현재: 30,
    },
    {
      taste: "성실함",
      과거: 90,
      현재: 90,
    },
    {
      taste: "마인드",
      과거: 60,
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
          fill: "#6c6c6c",
          fontSize:18,
          fontFamily: "Gowun Dodum"
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
        fontFamily: "Gowun Dodum",
      },
    },
    tooltip: {
      container: {
        background: "#fff",
        color: "inherit",
        fontSize:15,
        boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
        fontFamily: "Gowun Dodum",
      },
    },
  };
  return (
    <>
      <div className="animate__animated animate__slideInUp">
        <div className="max-w-screen-sm mx-auto text-xl" style={{ width: "550px" }}>
        <p className="text-center text-md mt-12 text-gray-500 dodum">성격 변화 분포도</p>
        <ul className="grid grid-cols-2 text-center">
          <li>
          <span className="w-3 h-3 bg-blue-500 inline-block"></span><span className="text-sm ml-2 text-gray-500 dodum">과거</span>
          </li>
          <li>
          <span className="w-3 h-3 bg-red-500 inline-block"></span><span className="text-sm ml-2 text-gray-500 dodum">현재</span>
          </li>
        </ul>
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
        <hr />
        <div className="">
          <dl className="my-8 text-xl">
            <dt className="mt-2 font-extrabold text-2xl dodum">
              긍정적
            </dt>
            <dd className="ml-12 p-4 border-2 border-purple-100 Batang">
              과거에는 잘 할 수 있다는 것보다 실패의 두려움이 많았다. 하지만 해병대에서 많은 것을 깨달았다. 해병대에서는 "죄송합니다", "모르겠습니다" 등 부정적인 말을 못 하게 했다.<br />
              이 말들 대신에 "확인해보겠습니다", "제가 잘하겠습니다"를 사용하게 했다. 이것은 하나의 부조리이다.
              처음에는 당연히 이해가 안 됐다. 모르는 것을 모른다고 말하는 게 잘못된 게 아니라고 생각했기 때문이다.<br />
              이 부조리가 나에게 긍정적인 영향을 준 포인트는 바로 행동이다. 말만 "확인해보겠습니다", "제가 잘하겠습니다" 이렇게 하는 것이 아니라 실제로 확인하는 액션을 취해야 했기 때문이다.<br />
              정말 말도 안 되는 질문에 "확인해보겠습니다"를 말하고 그것을 확인하러 가면 선임들이 당황해서 말릴 정도로 확인하는 액션을 취했다. 이렇게 액션을 취하다 보니 정말 말도 안 되는 것을 확인할 때도 있었다.<br />
              이때 나는 변했다. <strong className="text-xl text-red-400">아무리 어려운 거라도 한번 시도해보자는 생각을 하게 되니 모든 상황에 긍정적으로 생각하게 되었다.</strong>
            </dd>
            <dt className="mt-6 font-extrabold text-2xl text-right dodum">
              부정적
            </dt>
            <dd className="mr-12 p-4 border-2 border-purple-100 bg-gray-50 Batang">
              나는 가부장적인 집안의 삼 남매 중 둘째다. 어렸을 적에는 항상 형에게 가려져서 살았고 늦둥이 여동생이 태어나면서는 늦둥이에게 밀려 살았다.<br />
              그 영향 때문에 소극적으로 되었고 외향적 보다는 내향적으로 되었다. 어떤 일을 잘해도 항상 칭찬보다는 형, 동생이 있는데 그 정도는 당연히 해야 하는 일이라고 부모님이 말했다. 그래서 모든 일의 의욕이 없었다. <br />
              지금은 이러한 환경 때문에 내가 바르게 살고 있다고 생각한다. 어렸을 적에는 이 환경이 싫어서 빨리 독립하고 싶어 수능이 끝난 후 부모님께 손을 벌리지 않고 끊임없이 아르바이트했다.
              심지어 전역 날에 전역복을 입고 아르바이트 면접을 보러 갔었다. <br />이러한 경험 때문에 <strong className="text-xl text-red-400">절약하는 법과 부모님께 의존적이 아닌 자립심을 가진 내가 되었다고 생각한다.</strong>
            </dd>
            <dt className="mt-6 font-extrabold text-2xl dodum">
              성실함
            </dt>
            <dd className="ml-12 p-4 border-2 border-purple-100 Batang">
              내가 성실한 이유는 간단하다. 시간에 쫓기는 것이 싫다. 그렇다고 많은 양을 한 번에 하는 것도 싫어한다. 그래서 항상 할당량을 정해 놓는다.<br />
              정해진 시간에 정해진 양을 실행하여 스트레스도 받지 않고 완성을 할 수가 있다. <br />
              성실함은 당연하다고 생각할 수 있겠지만 익숨함에 잊는 경우가 많다. <strong className="text-xl text-red-400">성실함을 잊지않고 인지하고 있는 자체가 성실함을 갖고 있는 사람이라고 생각한다.</strong>

            </dd>
            <dt className="mt-6 font-extrabold text-2xl text-right dodum">
              마인드
            </dt>
            <dd className="mr-12 p-4 border-2 border-purple-100 bg-gray-50 Batang">
              <strong className="text-xl text-red-400">항상 답은 정해져 있다는 사고방식에서 그럴 수도 있다는 사고방식을 갖게 되었다.</strong><br />
              어렸을 적 나는 생각이 특별했다. 답이 정해져 있는 것을 보고 "왜 그 답일까"하는 고민을 많이 했다. 이러한 고민을 했을 때 부모님은 나에게 틀렸다고만 말씀하셨다.<br />
              그래서 나도 모르게 내 생각이 아닌 남들이 생각하는 데로 살아가고 있는 나 자신을 발견했다. 이때 나는 삶의 의욕이 없었다. 왜냐하면, 프로그래밍된 데로 살아가는 로봇 같았기 때문이다.<br />
              어디선가 "세상에 틀린 것은 없다, 다를 뿐이다."라는 글귀를 보고 나는 기뻤다. 왜냐하면, 이 글귀는 내가 틀린 사람이 아니라 다른 사람이라는 것을 알았기 때문이다.<br />
              나와 다른 생각을 하는 사람을 보고 "왜 틀린 것을 우기는 걸까?"라고 스트레스를 받는 것이 아니라 "그럴 수도 있겠다"라는 생각을 하여 상대방의 의견을 존중하고 맞춰가는 사람이 되었다. 
            </dd>
            <dt className="mt-6 font-extrabold text-2xl dodum">
              행복함
            </dt>
            <dd className="ml-12 p-4 border-2 border-purple-100 Batang">
            <strong className="text-xl text-red-400">행복 지수가 바뀐 결정적인 요인은 마인드이다.</strong><br />
            행복 지수를 올리는 방법은 의외로 간단하다. 미래가 아닌 과거,현재를 생각하면서 살아가면 된다.
            미래에 나는 행복할까가 아닌 현재 나는 행복할까를 고민하면 다들 행복할 수 있다. 미래를 생각하는 것이 나쁘다는 것이 아니라 일어나지 않은 일에 대해 걱정을 하지 말라는 것이다. <br />
            이건 아주 간단한 원리이다. 과거에 멈춰서 사는 사람은 거의 없다. 과거에 있었던 안 좋은 일들도 현재에 와서 생각하면 추억으로 생각하지, 과거일때문에 현재에 와서까지 불행해 하는 사람은 없다.<br />
            나도 과거에는 매일 미래를 생각하면서 먹고싶은것, 사고 싶은 것을 참으면서 악착같이 돈을 모은 적이 있다. 전역 후 자취를 하기위해 하루에 두개씩 아르바이트를 6개월동안해서 천만원 조금 넘게 모은적이 있다. <br />
            모은 후 자취를 하면서 돈을 쓸때마다 노심초사 했었다. 만약 돈을 쓰면서 오늘 내가 먹고 싶은것을 먹어서 행복해, 사고 싶은 것을 사서 행복해하면서 살았다면 과거에도 행복했고 현재도 행복해 했을것이다. 또 과거에는 암울해 했지만 현재 과거를 생각하면 웃으면서 그땐 그랬지라고 말할 수 있다.<br />
            이처럼 결과는 같다. 결과가 같다면 한번 행복할 것을 두번 행복하는게 더 이득이다.
            처음에 나의 마인드를 바꾸는 것은 어려웠다. 하지만 바뀐 지금 나는 행복한 하루 하루를 살아가고 있다.

            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Personality;
