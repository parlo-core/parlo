import BaseDrawer, { type DrawerProps } from "@mui/material/Drawer";
import { PropsWithChildren } from "react"
import gray from "@mui/material/colors/grey";


export const Drawer = ({ children, ...props }: PropsWithChildren<DrawerProps>) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const mode = colorModeFromLocalStorage || systemPreference;

  return (
    <BaseDrawer
      {...props}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: mode === "light" ? gray[100] : "#000",
        },
        ...props.sx,
      }}
    >
      {children}
    </BaseDrawer>
  );
};
