import DefaultLayout from "@/components/DefaultLayout";

export default function IntroServerBlock() {
  return (
    <DefaultLayout>
      <div className="relative w-full h-full min-h-screen">
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
          <IntroTitle />
          <IntroDescription />
        </div>
      </div>
    </DefaultLayout>
  );
}

function IntroTitle() {
  return (
    <div className="flex pt-[200px]">
      <p className="text-[80px] font-[NanumSquareNeoExtraBold] text-primary-700 tracking-wider">
        REPEATER
      </p>
    </div>
  );
}

function IntroDescription() {
  return (
    <div className="flex ">
      <p className="text-[30px] font-[SpoqaHanSansNeoBold] text-darkGray-700 tracking-widest">
        Repeater와 같은 특징을 지닌 Developer.
      </p>
    </div>
  );
}
