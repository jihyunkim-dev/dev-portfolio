"use client";

import { useRouter } from "next/navigation";
import { createContext } from "react";

export const IntroContext = createContext();

export default function IntroClientContainer(props) {
  const { children } = props;

  const router = useRouter();

  const IntroValues = {};

  return (
    <IntroContext.Provider value={IntroValues}>
      {children}
    </IntroContext.Provider>
  );
}
