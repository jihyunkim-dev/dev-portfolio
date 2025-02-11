import Butterfly from "@/components/Butterfly";
import DefaultLayout from "@/components/DefaultLayout";

export default function IntroServerBlock() {
  return (
    <DefaultLayout>
      <div className="relative w-full h-full min-h-screen">
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
          <IntroTitle />
          <IntroDescription />
          <div className="w-full flex flex-col gap-y-[50px]">
            <div className="w-full flex justify-start">
              <FirstIntro />
            </div>
            <div className="w-full flex justify-start">
              <SecondIntro />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

function IntroTitle() {
  return (
    <div className="flex flex-col pt-[200px]">
      <Butterfly />
      <p className="text-[80px] font-[NanumSquareNeoExtraBold] tracking-wider bg-gradient-to-r from-primary-300 to-primary-900 [-webkit-text-fill-color:transparent] bg-clip-text">
        REPEATER.
      </p>
    </div>
  );
}

function IntroDescription() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          아이디어로 가능성을
        </p>
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-primary-900 tracking-widest">
          &nbsp;증폭
        </p>
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          시키고
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          코드로 가능성을
        </p>
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-primary-900 tracking-widest">
          &nbsp;확장
        </p>
        <p className="text-[25px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          하는 Developer.
        </p>
      </div>
    </div>
  );
}

function FirstIntro() {
  return (
    <div>
      <div>
        <p className="text-[64px] font-[NanumSquareNeoExtraBold] tracking-wider bg-gradient-to-r from-primary-300 to-primary-900 [-webkit-text-fill-color:transparent] bg-clip-text">
          작은 시그널도
        </p>
        <p className="text-[64px] font-[NanumSquareNeoExtraBold] tracking-wider bg-gradient-to-r from-primary-300 to-primary-900 [-webkit-text-fill-color:transparent] bg-clip-text">
          놓치지 않는 개발자.
        </p>
      </div>
      <div>
        <p>우리에게는 아이디어라는</p>
        <p>작은 시그널이 있습니다.</p>
        <p>그 시그널을 증폭시켜 실현할 수 있는</p>
        <p>목적지까지 안정적으로 전달합니다.</p>
      </div>
    </div>
  );
}

function SecondIntro() {
  return (
    <div>
      <div>
        <p className="text-[64px] font-[NanumSquareNeoExtraBold] tracking-wider bg-gradient-to-b from-primary-400 to-primary-900 [-webkit-text-fill-color:transparent] bg-clip-text">
          다각적 시선으로
        </p>
        <p className="text-[64px] font-[NanumSquareNeoExtraBold] tracking-wider bg-gradient-to-b from-primary-400 to-primary-900 [-webkit-text-fill-color:transparent] bg-clip-text">
          소통하고 확장하는 개발자.
        </p>
      </div>
      <div>
        <p>개발을 넘어 디자인과 기획까지,</p>
        <p>다각적 시선으로 비즈니스를 고려합니다.</p>
        <p>더 큰 성장을 위한 새로운 관점을 제시하고</p>
        <p>함께 비즈니스의 가치를 확장하겠습니다.</p>
      </div>
    </div>
  );
}
