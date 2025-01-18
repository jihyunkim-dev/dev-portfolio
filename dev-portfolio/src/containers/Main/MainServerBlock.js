import DefaultLayout from "@/components/DefaultLayout";
import { WaveEffect } from "./MainClientBlock";

export default function MainServerBlock() {
  return (
    <DefaultLayout>
      <div className="w-full h-full overflow-hidden bg-gradient-to-b from-primary-800 via-primary-600 to-primary-50 ">
        {/* <div className="z-10 absolute inset-0 gap-y-[20px] flex flex-col items-center justify-center"> */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-Gray-50 z-20">
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-y-[20px]">
            <MainTitle />
            <SubTitle />
          </div>
        </div>
        <div className="absolute inset-0">
          <WaveEffect />
        </div>
      </div>
    </DefaultLayout>
  );
}

function MainTitle() {
  return (
    <div className="text-[100px] font-[NanumSquareNeoHeavy] tracking-widest text-primary-50">
      <p>Jihyun Kim</p>
    </div>
  );
}

function SubTitle() {
  return (
    <div className="text-[30px] font-[NanumSquareNeoBold] tracking-widest text-primary-50">
      <p>Front-end & App Developer.</p>
    </div>
  );
}
