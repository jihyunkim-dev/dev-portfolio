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
    <div className="flex pt-[200px]">
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
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          아이디어로 가능성을
        </p>
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-primary-900 tracking-widest">
          &nbsp;증폭
        </p>
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          시키고
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
          코드로 가능성을
        </p>
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-primary-900 tracking-widest">
          &nbsp;확장
        </p>
        <p className="text-[20px] font-[NanumSquareNeoExtraBold] text-darkGray-700 tracking-widest">
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
        <p>가능성을 확장하는</p>
      </div>
    </div>
  );
}

function SecondIntro() {
  return (
    <div>
      <p>Test2</p>
    </div>
  );
}
