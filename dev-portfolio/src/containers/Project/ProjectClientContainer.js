"use client";

import { createContext } from "react";

export const ProjectContext = createContext();

export default function ProjectClientContainer(props) {
  const { children } = props;

  const ProjectValues = {};

  return (
    <ProjectContext.Provider value={ProjectValues}>
      {children}
    </ProjectContext.Provider>
  );
}
