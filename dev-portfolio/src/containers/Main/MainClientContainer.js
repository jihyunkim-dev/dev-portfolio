"use client";

import { useRouter } from "next/navigation";
import { createContext } from "react";

export const MainContext = createContext();

export default function MainClientContainer(props) {
  const { children } = props;

  const router = useRouter();

  const MainValues = {};

  return (
    <MainContext.Provider value={MainValues}>{children}</MainContext.Provider>
  );
}
