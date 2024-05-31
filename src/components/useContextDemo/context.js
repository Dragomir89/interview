import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("Not provided user value");
  }

  return user;
}
