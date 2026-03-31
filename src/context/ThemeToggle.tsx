import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "antd";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { toggleTheme } = context;

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={toggleTheme}>🌙 Toggle Theme</Button>
    </div>
  );
};

export default ThemeToggle;
