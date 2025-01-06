"use client";

import { useRouter } from "next/navigation";
import { createContext } from "react";

export const ArchivingContext = createContext();

export default function ArchivingClientContainer(props) {
  const { children } = props;

  const router = useRouter();

  const ArchivingValues = {};

  return (
    <ArchivingContext.Provider value={ArchivingValues}>
      {children}
    </ArchivingContext.Provider>
  );
}
