"use client";

import { NavBarHooks } from "@/hooks/NavBarHooks";
import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const NavBarGridContainer = styled(Grid)({
  display: "flex",
  backgroundColor: "#ffffff",
});

export default function NavBar() {
  const { isVisible, activeSection } = NavBarHooks();
  return <NavBarGridContainer container></NavBarGridContainer>;
}
