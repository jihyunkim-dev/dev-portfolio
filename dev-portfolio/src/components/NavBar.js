"use client";

import { NavBarHooks } from "@/hooks/NavBarHooks";
import { styled, keyframes } from "@mui/material/styles";
import theme from "@/configs/customTheme";

import Link from "next/link";
import Image from "next/image";

import Grid from "@mui/material/Grid2";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { butterflyIconUrl } from "@/configs/urls";
import { useEffect, useState } from "react";

const navBarAnimation = keyframes({
  "0%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 150%)",
    borderRadius: "50%",
    opacity: 0,
  },

  "20%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 0)",
    borderRadius: "50%",
    opacity: 1,
  },
  "50%": {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  "75%": {
    width: "280px",
    height: "80px",
    borderRadius: "40px",
  },
  "100%": {
    width: "min(500px, 85%)",
    height: "80px",
    borderRadius: "30px",
  },
});

const navBarDisappear = keyframes({
  "0%": {
    width: "min(500px, 85%)",
    height: "80px",
    opacity: 1,
    borderRadius: "30px",
  },
  "25%": {
    width: "280px",
    height: "80px",
    borderRadius: "40px",
  },
  "50%": {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  "75%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 100%)",
    borderRadius: "50%",
    opacity: 0.8,
  },
  "100%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 150%)",
    borderRadius: "50%",
    opacity: 0,
  },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const NavBarContainer = styled("div")({
  position: "fixed",
  bottom: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 30,
  margin: "0 auto",
  width: "min(500px, 85%)",
  // visibility: "hidden",
  // opacity: 0,
});

const NavBarContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  height: "100%",
  opacity: 0,
  animation: `${fadeIn} 0.4s ease-out 0.5s forwards`,
});

const NavBarGridContainer = styled(Grid)({
  backgroundColor: theme.palette.darkGray[200],
  height: "80px",
  width: "100%",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

const NavItem = styled(Grid)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  flex: 1,
});

const NavListTypo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  color: isactive !== false ? theme.palette.gray[700] : theme.palette.grey[700],
  fontFamily: isactive !== false ? "NanumSquareNeoHeavy" : "NanumSquareNeoBold",
  "&:hover": {
    color: "#ffffff",
  },
  cursor: "pointer",
}));

export default function NavBar() {
  const { isVisible, activeSection } = NavBarHooks();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isVisible]);

  return (
    <NavBarContainer
      sx={{
        visibility: isVisible || isAnimating ? "visible" : "hidden",
        opacity: isVisible || isAnimating ? 1 : 0,
        animation: isVisible
          ? `${navBarAnimation} 0.8s ease-in-out forwards`
          : `${navBarDisappear} 0.7s ease-in-out forwards`,
      }}
    >
      <NavBarGridContainer container>
        <NavBarContent
          sx={{
            opacity: 0,
            animation: isVisible
              ? `${fadeIn} 0.4s ease-out 0.5s forwards`
              : "none",
          }}
        >
          <NavItem>
            <Link href="#main">
              <IconButton>
                <Image
                  src={butterflyIconUrl}
                  alt="main"
                  width={40}
                  height={40}
                />
              </IconButton>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#experience">
              <ButtonBase>
                <NavListTypo isactive={activeSection === "experience"}>
                  EXPERIENCE
                </NavListTypo>
              </ButtonBase>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#works">
              <ButtonBase>
                <NavListTypo isactive={activeSection === "works"}>
                  WORKS
                </NavListTypo>
              </ButtonBase>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contact">
              <ButtonBase>
                <NavListTypo isactive={activeSection === "contact"}>
                  CONTACT
                </NavListTypo>
              </ButtonBase>
            </Link>
          </NavItem>
        </NavBarContent>
      </NavBarGridContainer>
    </NavBarContainer>
  );
}
