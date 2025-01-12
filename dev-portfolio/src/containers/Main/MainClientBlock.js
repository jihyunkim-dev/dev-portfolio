"use client";

import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const wave = keyframes({});

const FirstWaveBlock = styled("div")({
  position: "absolute",

  width: "200vw",
  height: "200vw",
  borderRadius: "40%",
  backgroundColor: "#000000",
});

function FirstWave() {
  return (
    <div>
      <FirstWaveBlock />
    </div>
  );
}

function SecondWave() {
  return <Grid container></Grid>;
}
function ThirdWave() {
  return <Grid container></Grid>;
}

export function WaveEffect() {
  return (
    <Grid container>
      <Grid container item>
        <Grid item>
          <FirstWave />
        </Grid>
      </Grid>
      <SecondWave />
      <ThirdWave />
    </Grid>
  );
}
