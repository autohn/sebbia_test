"use client";
import { createContext, useMemo, useState } from "react";
import { NewsType } from "./[id]/page";

type UserContextType = {
  context: NewsType | null;
  setContext: React.Dispatch<React.SetStateAction<NewsType | null>>;
};

const iUserContextState = {
  context: null,
  setContext: () => {},
};

export const LoadingContext = createContext<UserContextType>(iUserContextState);

export default function LoadingProvider({ children }: any) {
  const [context, setContext] = useState<NewsType | null>(null);
  const value = useMemo(() => ({ context, setContext }), [context]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
