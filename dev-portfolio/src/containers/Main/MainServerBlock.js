import { WaveEffect } from "./MainClientBlock";

export default function MainServerBlock() {
  return (
    <div className="w-full h-[full] overflow-hidden bg-primary-50">
      <div className="z-10 absolute inset-0 flex flex-col items-center justify-center">
        <MainTitle />
        <SubTitle />
      </div>
      <div className="absolute inset-0">
        <WaveEffect />
      </div>
    </div>
  );
}

function MainTitle() {
  return (
    <div className="text-[100px] font-[NanumSquareNeoHeavy] text-primary-800">
      <p>Jihyun Kim</p>
    </div>
  );
}

function SubTitle() {
  return (
    <div className="text-[70px] font-[NanumSquareNeoHeavy] text-primary-600">
      <p>Front-end & App Developer.</p>
    </div>
  );
}
