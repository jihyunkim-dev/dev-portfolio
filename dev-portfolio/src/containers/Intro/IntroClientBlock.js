"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const LargeSignal = styled(Grid)({
  display: "flex",
  backgroundColor: theme.palette.main,
});

const MediumSignal = styled("div")({
  display: "flex",
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

export function signalEffect() {
  return (
    <Grid container>
      <Grid item>
        <Signal />
      </Grid>
    </Grid>
  );
}
