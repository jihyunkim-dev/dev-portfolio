"use client";

import { useRouter } from "next/navigation";
import { createContext } from "react";

export const MainContext = createContext();

export default function ContactClientContainer(props) {
  const { children } = props;

  const router = useRouter();

  const ContactValues = {};

  return (
    <ContactContext.Provider value={ContactValues}>
      {children}
    </ContactContext.Provider>
  );
}
