"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MonitorIcon, MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeMenu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <Button asChild size={"square"} variant={"ghost"}>
        <DropdownMenuTrigger>
          <SunMoonIcon />
        </DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon />
          Hell
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon />
          Dunkel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <MonitorIcon />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
