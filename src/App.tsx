import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; 

function App() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { theme } = themeContext;

  return (
    <>
      <Navbar />

      <div
        className="max-w-6xl mx-auto mt-10 px-4"
        style={{
          background: theme === "dark" ? "#1f1f1f" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard WEB2091
        </h1>
        <Header />
        <Login />
      </div>

      <Toaster />
    </>
  );
}

export default App;
