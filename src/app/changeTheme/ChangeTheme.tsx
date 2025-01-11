import React, { useEffect, useState } from "react";

import MingcuteMoonFill from "@/assets/dark&light-mode/MingcuteMoonFill";
import MingcuteSunLine from "@/assets/dark&light-mode/MingcuteSunLine";

import styles from "./ChangeTheme.module.css";

const ChangeTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <button className={styles.changeBackground} onClick={toggleTheme}>
      {theme === "light" ? <MingcuteSunLine /> : <MingcuteMoonFill />}
    </button>
  );
};

export default ChangeTheme;
