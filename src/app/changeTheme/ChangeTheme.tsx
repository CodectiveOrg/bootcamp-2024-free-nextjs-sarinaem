"use client";

import React, { useEffect, useState } from "react";

import MingcuteMoonFill from "@/assets/dark&light-mode/MingcuteMoonFill";
import MingcuteSunLine from "@/assets/dark&light-mode/MingcuteSunLine";

import styles from "./ChangeTheme.module.css";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
      document.body.className = savedTheme;
    } else {
      document.documentElement.className = theme;
      document.body.className = theme;
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button className={styles.changeBackground} onClick={toggleTheme}>
      {theme === "light" ? <MingcuteMoonFill /> : <MingcuteSunLine />}
    </button>
  );
};

export default ChangeTheme;
