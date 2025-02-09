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

const navBarAppear = keyframes({
  "0%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 120px)",
    borderRadius: "50%",
    opacity: 0,
  },
  "30%": {
    opacity: 1,
    transform: "translate(-50%, 60px)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  "70%": {
    width: "200px",
    height: "60px",
    borderRadius: "30px",
    transform: "translate(-50%, 20px)",
  },
  "100%": {
    width: "min(500px, 85%)",
    height: "60px",
    borderRadius: "30px",
    transform: "translate(-50%, 0)",
  },
});

const navBarDisappear = keyframes({
  "0%": {
    width: "min(500px, 85%)",
    height: "60px",
    opacity: 1,
    borderRadius: "30px",
    transform: "translate(-50%, 0)",
  },
  "30%": {
    width: "200px",
    height: "60px",
    borderRadius: "30px",
    transform: "translate(-50%, 20px)",
    opacity: 1,
  },
  "70%": {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    transform: "translate(-50%, 60px)",
  },
  "100%": {
    width: "60px",
    height: "60px",
    transform: "translate(-50%, 120px)",
    borderRadius: "50%",
    opacity: 0,
  },
});

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const fadeOut = keyframes({
  "0%": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
});

const NavBarContainer = styled("div")({
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 30,
  margin: "0 auto",
  width: "min(500px, 85%)",
  transition: "all 0.3s ease-in-out",
});

const NavBarContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  height: "100%",
});

const NavBarGridContainer = styled(Grid)({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  height: "60px",
  width: "100%",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
});

const NavItem = styled(Grid)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  flex: 1,
  "&:hover": {
    transform: "translateY(-2px)",
  },
});

const NavListTypo = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  color: isactive !== false ? theme.palette.gray[700] : theme.palette.grey[700],
  fontFamily: isactive !== false ? "NanumSquareNeoHeavy" : "NanumSquareNeoBold",
  fontSize: "14px",
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.gray[900],
  },
  cursor: "pointer",
}));

export default function NavBar() {
  const { isVisible, activeSection } = NavBarHooks();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let contentTimer;
    let animationTimer;

    if (isVisible) {
      contentTimer = setTimeout(() => setShowContent(true), 400);
    } else {
      setShowContent(false);
      setIsAnimating(true);
      animationTimer = setTimeout(() => setIsAnimating(false), 1000);
    }

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(animationTimer);
    };
  }, [isVisible]);

  return (
    <NavBarContainer
      sx={{
        visibility: isVisible || isAnimating ? "visible" : "hidden",
        animation: isVisible
          ? `${navBarAppear} 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards`
          : `${navBarDisappear} 1s cubic-bezier(0.4, 0.0, 0.2, 1) forwards`,
      }}
    >
      <NavBarGridContainer container>
        <NavBarContent
          sx={{
            visibility: showContent ? "visible" : "hidden",
            animation: showContent
              ? `${fadeIn} 0.4s ease-out forwards`
              : `${fadeOut} 0.3s ease-in forwards`,
          }}
        >
          <NavItem>
            <Link href="#main">
              <IconButton
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
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
