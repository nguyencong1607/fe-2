import { Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

function Navbar() {
  const context = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  if (!context || !themeContext) return null;

  const { user, setUser } = context;
  const { theme, toggleTheme } = themeContext;

  const handleLogin = () => {
    // setUser({
    //   name: "congnv",
    // });
    toast.success("Đăng nhập thành công");
  };

  const handleLogout = () => {
    setUser(null);
    toast("Đã đăng xuất");
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="#" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#">Trang chủ</Link>
          <Link to="#">Danh sách</Link>
          <Link to="#">Thêm mới</Link>
        </div>

        <Button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span>👤 {user.name}</span>
              <Button onClick={handleLogout}>Đăng xuất</Button>
            </>
          ) : (
            <Button type="primary" onClick={handleLogin}>
              Đăng nhập
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
