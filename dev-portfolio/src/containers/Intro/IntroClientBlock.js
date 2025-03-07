"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const firstPulse = keyframes({
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.3,
  },
  "50%": {
    transform: "scale(1)",
    opacity: 0.15,
  },
  "100%": {
    transform: "scale(1.2)",
    opacity: 0.3,
  },
});

const secondPulse = keyframes({
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.55,
  },
  "50%": {
    transform: "scale(1)",
    opacity: 0.25,
  },
  "100%": {
    transform: "scale(1.2)",
    opacity: 0.55,
  },
});

const thirdPulse = keyframes({
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.75,
  },
  "50%": {
    transform: "scale(1)",
    opacity: 0.3,
  },
  "100%": {
    transform: "scale(1.2)",
    opacity: 0.75,
  },
});

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
  animation: `${firstPulse} 4s ease-in-out infinite`,
});

const FirstMediumSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.55,
  filter: "blur(9px)",
  flexShrink: 0,
  animation: `${secondPulse} 4s ease-in-out infinite`,
});

const FirstSmallSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.75,
  filter: "blur(7px)",
  flexShrink: 0,
  animation: `${thirdPulse} 4s ease-in-out infinite`,
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
  animation: `${firstPulse} 4s ease-in-out infinite`,
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
  animation: `${secondPulse} 4s ease-in-out infinite`,
});

const SecondSmallSignal = styled("div")({
  display: "flex",
  position: "absolute",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#1CB0FF",
  opacity: 0.75,
  filter: "blur(7px)",
  flexShrink: 0,
  animation: `${thirdPulse} 4s ease-in-out infinite`,
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
