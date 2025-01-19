"use client";

import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { downArrowIconUrl } from "@/configs/urls";
import Image from "next/image";

const waveAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const WaveEffectGridContainer = styled(Grid)({
  display: "flex",
  position: "relative",
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(180deg, #45156A,#7D48AC, #FAF5FF)",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const FirstWaveBlock = styled("div")({
  position: "absolute",
  top: "70%",
  left: "-20%",
  width: "200vw",
  height: "200vw",
  borderRadius: "38%",
  background: "linear-gradient(70deg, #E0CCF6, #BD92E8)",
  animation: `${waveAnimation} 42000ms infinite linear`,
  opacity: 0.7,
  filter: "blur(3px)",
});

const SecondWaveBlock = styled("div")({
  position: "absolute",
  top: "35%",
  left: "-80%",
  width: "220vw",
  height: "220vw",
  borderRadius: "38%",
  background: "linear-gradient(45deg, #7D48AC, #6B2DA0)",
  animation: `${waveAnimation} 35000ms infinite linear`,
  opacity: 0.3,
  filter: "blur(3px)",
});

const ThirdWaveBlock = styled("div")({
  position: "absolute",
  top: "20%",
  left: "-20%",
  width: "400vw",
  height: "400vw",
  borderRadius: "30%",
  background: "linear-gradient(45deg, #E0CCF6, #45156A)",
  animation: `${waveAnimation} 55000ms infinite linear`,
  opacity: 0.3,
  filter: "blur(2px)",
});

function FirstWave() {
  return <FirstWaveBlock />;
}

function SecondWave() {
  return <SecondWaveBlock />;
}
function ThirdWave() {
  return <ThirdWaveBlock />;
}

export function WaveEffect() {
  return (
    <WaveEffectGridContainer container>
      <FirstWave />
      <SecondWave />
      <ThirdWave />
    </WaveEffectGridContainer>
  );
}

export function DownArrow() {
  return (
    <Image src={downArrowIconUrl} alt="ScrollDown" width={50} height={50} />
  );
}
