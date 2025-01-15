"use client";

import { styled, keyframes } from "@mui/material/styles";
import Grid2 from "@mui/material/Grid2";
import theme from "@/configs/customTheme";

const waveAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const WaveEffectGridContainer = styled(Grid2)({
  display: "flex",
  position: "relative",
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(180deg, #45156A,#7D48AC, #FAF5FF)",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const WaveBase = styled("div")({
  position: "absolute",
  zIndex: 10,
  left: "-100%",
  width: "300%",
  height: "100%",
  borderRadius: "50%",
  animation: `${waveAnimation} 10s ease-in-out infinite`,
});

const FirstWaveBlock = styled("div")({
  position: "absolute",
  top: "70%",
  left: "-20%",
  width: "200vw",
  height: "200vw",
  borderRadius: "38%",
  background: "linear-gradient(70deg, #E0CCF6, #BD92E8)",
  animation: `${waveAnimation} 18000ms infinite linear`,
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
  animation: `${waveAnimation} 30000ms infinite linear`,
  opacity: 0.3,
  filter: "blur(3px)",
});

const ThirdWaveBlock = styled("div")({
  position: "absolute",
  top: "20%",
  left: "0%",
  width: "200vw",
  height: "200vw",
  borderRadius: "30%",
  backgroundColor: "linear-gradient(45deg, #BD92E8, #6B2DA0)",
  animation: `${waveAnimation} 30000ms infinite linear`,
  opacity: 0.5,
  filter: "blur(3px)",
});

const FourthWaveBlock = styled("div")({
  position: "absolute",
  top: "20%",
  left: "-20%",
  width: "400vw",
  height: "400vw",
  borderRadius: "30%",
  background: "linear-gradient(45deg, #E0CCF6, #45156A)",
  animation: `${waveAnimation} 50000ms infinite linear`,
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

function FourthWave() {
  return <FourthWaveBlock />;
}

export function WaveEffect() {
  return (
    <WaveEffectGridContainer container>
      <Grid2 container item>
        <Grid2 item>
          <FirstWave />
        </Grid2>
        <Grid2 item>
          <SecondWave />
        </Grid2>
        <Grid2 item>
          <ThirdWave />
        </Grid2>
        <Grid2 item>
          <FourthWave />
        </Grid2>
      </Grid2>
    </WaveEffectGridContainer>
  );
}
