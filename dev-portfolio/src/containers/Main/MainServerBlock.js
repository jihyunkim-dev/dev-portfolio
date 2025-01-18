import DefaultLayout from "@/components/DefaultLayout";
import { WaveEffect } from "./MainClientBlock";

export default function MainServerBlock() {
  return (
    <DefaultLayout>
      <div className="w-full h-full overflow-hidden bg-primary-600">
        <div className="z-10 absolute inset-0 gap-y-[20px] flex flex-col items-center justify-center">
          <MainTitle />
          <SubTitle />
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
