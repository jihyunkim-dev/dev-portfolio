"use client";

import { NavBarHooks } from "@/hooks/NavBarHooks";
import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Butterfly from "./Butterfly";
import theme from "@/configs/customTheme";

const navBarAnimation = keyframes({
  "0%": {
    width: "60px",
    transform: "translate(-50%, 100%)",
    borderRadius: "50%",
  },
  "50%": {
    width: "60px",
    transform: "translate(-50%, 0)",
    borderRadius: "50%",
  },
  "75%": {
    width: "min(600px, 80%)",
    transform: "translate(-50%, 0)",
    borderRadius: "30px",
  },
  "100%": {
    width: "min(600px, 80%)",
    transform: "translate(-50%, 0)",
    borderRadius: "30px",
  },
});

const NavBarContainer = styled("div")({
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 30,
  margin: "0 auto",
  width: "min(600px, 80%)",
  visibility: "hidden",
  opacity: 0,
});

const NavBarGridContainer = styled(Grid)({
  backgroundColor: theme.palette.darkGray[200],
  height: "60px",
  width: "100%",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

const NavItem = styled("div")(({ active }) => ({
  padding: "10px 15px",
  color: active ? "#000000" : "rgba(255, 255, 255, 0.7)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  transition: "0.3s",
  cursor: "pointer",
  flex: 1,
  "&:hover": {
    color: "#ffffff",
  },
}));

export default function NavBar() {
  const { isVisible, activeSection } = NavBarHooks();
  return (
    <NavBarContainer
      container
      sx={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `${navBarAnimation} 2.5s ease-out forwards`
          : "none",
      }}
    >
      <NavBarGridContainer container>
        <NavItem active={activeSection === "intro"}>
          <Link href="#intro">Intro</Link>
        </NavItem>
        <NavItem active={activeSection === "experience"}>
          <Link href="#experience">Skills</Link>
        </NavItem>
        <NavItem active={activeSection === "works"}>
          <Link href="#works">Projects</Link>
        </NavItem>
        <NavItem active={activeSection === "contact"}>
          <Link href="#contact">Contact</Link>
        </NavItem>
      </NavBarGridContainer>
    </NavBarContainer>
  );
}
