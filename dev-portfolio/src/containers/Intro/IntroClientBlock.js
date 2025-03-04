"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const LargeSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "100px",
  height: "100px",
  background: theme.palette.primary.main,
});

const MediumSignal = styled("div")({
  display: "flex",
  backgroundColor: theme.palette.main,
});

const SmallSignal = styled("div")({
  display: "flex",
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
