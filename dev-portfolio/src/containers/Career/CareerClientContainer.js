"use client";

import { createContext } from "react";

export const CareerContext = createContext();

export default function CareerClientContainer(props) {
  const { children } = props;

  const CareerValues = {};

  return (
    <CareerContext.Provider value={CareerValues}>
      {children}
    </CareerContext.Provider>
  );
}
