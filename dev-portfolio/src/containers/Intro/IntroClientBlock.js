"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const LargeSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "#1CB0FF",
});

const MediumSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "#1CB0FF",
});

const SmallSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "#1CB0FF",
});

function Signal() {
  return (
    <Grid container>
      <LargeSignal />
      <MediumSignal />
      <SmallSignal />
    </Grid>
  );
}

export function SignalEffect() {
  return (
    <Grid container>
      <Signal />
    </Grid>
  );
}
