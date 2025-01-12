"use client";

import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import theme from "@/configs/customTheme";

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
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const FirstWaveBlock = styled("div")({
  position: "absolute",
  top: "50%",
  left: "-50%",
  width: "200vw",
  height: "200vw",
  borderRadius: "38%",
  backgroundColor: theme.palette.primary[200],
  animation: `${waveAnimation} 15000ms infinite linear`,
  opacity: 0.5,
});

const SecondWaveBlock = styled("div")({
  position: "absolute",
  top: "65%",
  left: "-50%",
  width: "220vw",
  height: "220vw",
  borderRadius: "38%",
  backgroundColor: theme.palette.primary[800],
  animation: `${waveAnimation} 40000ms infinite linear`,
  opacity: 0.3,
});

const ThirdWaveBlock = styled("div")({
  position: "absolute",
  top: "90%",
  left: "-40%",
  width: "200vw",
  height: "200vw",
  borderRadius: "30%",
  backgroundColor: theme.palette.primary[500],
  animation: `${waveAnimation} 50000ms infinite linear`,
  opacity: 0.7,
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
      <Grid container item>
        <Grid item>
          <FirstWave />
        </Grid>
        <Grid item>
          <SecondWave />
        </Grid>
        <Grid item>
          <ThirdWave />
        </Grid>
      </Grid>
    </WaveEffectGridContainer>
  );
}
