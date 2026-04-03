import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); // submenu toggle
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const mainMenuName = "Services"; // professional name

  const serviceNames: { [key: string]: string } = {
    "/product1": "Consulting",
    "/product2": "Development",
    "/product3": "Design",
  };

  const displayName = serviceNames[currentPath] || mainMenuName;

  // Toggle submenu when main menu is clicked
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div style={navStyle}>
      <div style={menuStyle}>
        <span style={linkStyle} onClick={() => navigate("/home")}>
          Home
        </span>

        <div style={dropdownStyle}>
          {/* Main menu clickable */}
          <span style={linkStyle} onClick={handleMenuClick}>
            {displayName} <span style={{ fontSize: "12px" }}>▼</span>
          </span>

          {/* Show submenu only on click */}
          {showMenu && (
            <div style={submenuStyle}>
              {Object.entries(serviceNames).map(([path, name]) => (
                <p
                  key={path}
                  style={{
                    ...subItem,
                    fontWeight: currentPath === path ? "bold" : "normal",
                    textDecoration:
                      currentPath === path ? "underline" : "none",
                  }}
                  onClick={() => {
                    navigate(path);
                    setShowMenu(false); // close submenu after click
                  }}
                >
                  {name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// --- Styles ---
const navStyle: React.CSSProperties = {
  backgroundColor: "#dea53a",
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const linkStyle: React.CSSProperties = {
  cursor: "pointer",
  fontWeight: "bold",
};

const dropdownStyle: React.CSSProperties = {
  position: "relative",
};

const submenuStyle: React.CSSProperties = {
  position: "absolute",
  top: "30px",
  backgroundColor: "white",
  color: "black",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
};

const subItem: React.CSSProperties = {
  margin: "5px 0",
  cursor: "pointer",
};