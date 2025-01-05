"use client";

import { createContext } from "react";

export const SkillContext = createContext();

export default function SkillClientContainer(props) {
  const { children } = props;

  const SkillValues = {};

  return (
    <SkillContext.Provider value={SkillValues}>
      {children}
    </SkillContext.Provider>
  );
}
