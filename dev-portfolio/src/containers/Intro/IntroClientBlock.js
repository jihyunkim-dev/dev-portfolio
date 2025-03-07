"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const FirstLargeSignal = styled("div")({
  display: "flex",
  position: "relative",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.3,
  filter: "blur(10px)",
  flexShrink: 0,
});

const FirstMediumSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.55,
  filter: "blur(9px)",
  flexShrink: 0,
});

const FirstSmallSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.75,
  filter: "blur(7px)",
  flexShrink: 0,
});

const SecondLargeSignal = styled("div")({
  display: "flex",
  position: "relative",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.3,
  filter: "blur(10px)",
  flexShrink: 0,
});

const SecondMediumSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.55,
  filter: "blur(9px)",
  flexShrink: 0,
});

const SecondSmallSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.75,
  filter: "blur(7px)",
  flexShrink: 0,
});

function FirstSignal() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <FirstLargeSignal />
      <FirstMediumSignal />
      <FirstSmallSignal />
    </Grid>
  );
}

function SecondSignal() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <SecondLargeSignal />
      <SecondMediumSignal />
      <SecondSmallSignal />
    </Grid>
  );
}

export function SignalEffect() {
  return (
    <Grid container>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={6} justifyContent="flex-start">
          <FirstSignal />
        </Grid>
        <Grid
          item
          xs={4}
          justifyContent="flex-start"
          sx={{ marginTop: "150px" }}
        >
          <SecondSignal />
        </Grid>
      </Grid>
    </Grid>
  );
}
