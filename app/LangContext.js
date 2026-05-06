"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
