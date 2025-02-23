"use client";

import theme from "@/configs/customTheme";
import Grid from "@mui/material/Grid";
import { styled, keyframes } from "@mui/material/styles";

const LargeSignal = styled(Grid)({
  display: "flex",
  backgroundColor: theme.palette.main,
});

function Signal() {
  return <LargeSignal></LargeSignal>;
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
