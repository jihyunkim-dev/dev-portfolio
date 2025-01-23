"use client";

import { NavBarHooks } from "@/hooks/NavBarHooks";
import { styled, keyframes } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

const NavBarGridContainer = styled(Grid)({
  display: "flex",
  backgroundColor: "#ffffff",
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 50,
  transition: "all 0.3s ease-in-out",
});

const NavItem = styled("div")(({ active }) => ({
  padding: "10px 20px",
  fontWeight: active ? "bold" : "normal",
  borderBottom: active ? "2px solid blue" : "none",
  transition: "0.3s",
}));

export default function NavBar() {
  const { isVisible, activeSection } = NavBarHooks();
  return (
    <NavBarGridContainer
      container
      sx={{ display: isVisible ? "flex" : "none" }}
    >
      <NavItem active={activeSection === "intro"}>
        <Link href="#intro">Intro</Link>
      </NavItem>
      <NavItem active={activeSection === "skills"}>
        <Link href="#skills">Skills</Link>
      </NavItem>
      <NavItem active={activeSection === "projects"}>
        <Link href="#projects">Projects</Link>
      </NavItem>
      <NavItem active={activeSection === "contact"}>
        <Link href="#contact">Contact</Link>
      </NavItem>
    </NavBarGridContainer>
  );
}
