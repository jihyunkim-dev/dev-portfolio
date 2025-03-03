"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const LargeSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "100px",
  height: "100px",
  background: "#000000",
});

const MediumSignal = styled("div")({
  display: "flex",
  backgroundColor: theme.palette.main,
});

const SmallSignal = styled("div")({
  display: "flex",
});

function LargeSignalEffect() {
  return <LargeSignal />;
}

export function SignalEffect() {
  return (
    <Grid container>
      <LargeSignalEffect />
    </Grid>
  );
}
