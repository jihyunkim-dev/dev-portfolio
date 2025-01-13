"use client";

import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import theme from "@/configs/customTheme";

// const waveAnimation = keyframes({
//   from: {
//     transform: "rotate(0deg)",
//   },
//   to: {
//     transform: "rotate(360deg)",
//   },
// });

const waveAnimation = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-20px)" },
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

const WaveBase = styled("div")({
  position: "absolute",
  left: "-100%",
  width: "300%",
  height: "100%",
  borderRadius: "50%",
  animation: `${waveAnimation} 10s ease-in-out infinite`,
});

const FirstWaveBlock = styled(WaveBase)({
  bottom: "-65%",
  background: "linear-gradient(180deg, transparent 50%, #BD92E8 50%)",
  animationDelay: "0s",
});

const SecondWaveBlock = styled(WaveBase)({
  bottom: "-70%",
  background: "linear-gradient(180deg, transparent 50%, #7D48AC 50%)",
  animationDelay: "-3s",
  opacity: 0.5,
});

// const FirstWaveBlock = styled("div")({
//   position: "absolute",
//   top: "70%",
//   left: "-20%",
//   width: "200vw",
//   height: "200vw",
//   borderRadius: "38%",
//   background: "linear-gradient(70deg, #E0CCF6, #BD92E8)",
//   animation: `${waveAnimation} 18000ms infinite linear`,
//   opacity: 0.7,
// });

// const SecondWaveBlock = styled("div")({
//   position: "absolute",
//   top: "85%",
//   left: "-80%",
//   width: "320vw",
//   height: "220vw",
//   borderRadius: "38%",
//   background: "linear-gradient(45deg, #7D48AC, #7d48ac)",
//   animation: `${waveAnimation} 30000ms infinite linear`,
//   opacity: 0.3,
// });

// const ThirdWaveBlock = styled("div")({
//   position: "absolute",
//   top: "50%",
//   left: "-40%",
//   width: "200vw",
//   height: "200vw",
//   borderRadius: "30%",
//   backgroundColor: "#CBAAED",
//   animation: `${waveAnimation} 30000ms infinite linear`,
//   opacity: 0.5,
// });

// const FourthWaveBlock = styled("div")({
//   position: "absolute",
//   top: "20%",
//   left: "-20%",
//   width: "400vw",
//   height: "400vw",
//   borderRadius: "30%",
//   background: "linear-gradient(45deg, #E0CCF6, #45156A)",
//   animation: `${waveAnimation} 50000ms infinite linear`,
//   opacity: 0.3,
// });

// const FifthWaveBlock = styled("div")({
//   position: "absolute",
//   top: "20%",
//   left: "-40%",
//   width: "200vw",
//   height: "200vw",
//   borderRadius: "30%",
//   background: "linear-gradient(45deg, #F3E8FF, #572084)",
//   animation: `${waveAnimation} 30000ms infinite linear`,
//   opacity: 0.2,
// });

function FirstWave() {
  return <FirstWaveBlock />;
}

function SecondWave() {
  return <SecondWaveBlock />;
}
// function ThirdWave() {
//   return <ThirdWaveBlock />;
// }

// function FourthWave() {
//   return <FourthWaveBlock />;
// }

// function FifthWave() {
//   return <FifthWaveBlock />;
// }

export function WaveEffect() {
  return (
    <WaveEffectGridContainer container>
      <Grid container item>
        <Grid item>
          <FirstWave />
        </Grid>
        <Grid item>
          <SecondWave />
        </Grid>
        <Grid item>{/* <ThirdWave /> */}</Grid>
        <Grid item>{/* <FourthWave /> */}</Grid>
        <Grid item>{/* <FifthWave /> */}</Grid>
      </Grid>
    </WaveEffectGridContainer>
  );
}
