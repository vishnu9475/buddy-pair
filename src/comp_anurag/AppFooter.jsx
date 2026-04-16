import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Compass,
  Plus,
  Users,
  MessageCircle,
} from "lucide-react";

export default function AppFooter() {
  const [active, setActive] = useState("home");

  return (
    <div style={styles.wrapper}>
      <div style={styles.innerContainer}>
        <div style={styles.footer}>

          <button
            onClick={() => setActive("home")}
            style={{
              ...styles.iconBtn,
              ...(active === "home" ? styles.activeBtn : {}),
            }}
          >
            <Home size={22} />
          </button>

          <button
            onClick={() => setActive("explore")}
            style={{
              ...styles.iconBtn,
              ...(active === "explore" ? styles.activeBtn : {}),
            }}
          >
            <Compass size={22} />
          </button>

          <button style={styles.centerBtn}>
            <Plus size={24} />
          </button>

          <button
            onClick={() => setActive("users")}
            style={{
              ...styles.iconBtn,
              ...(active === "users" ? styles.activeBtn : {}),
            }}
          >
            <Users size={22} />
          </button>

          <button
            onClick={() => setActive("chat")}
            style={{
              ...styles.iconBtn,
              ...(active === "chat" ? styles.activeBtn : {}),
            }}
          >
            <MessageCircle size={22} />
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: 20, // floating
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  innerContainer: {
    width: "100%",
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    width: "90%",
    maxWidth: "500px",
    height: "58px",
    background: "#ffffff", // solid background
    borderRadius: "35px", // slight curve
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },

  iconBtn: {
    background: "none",
    border: "none",
    color: "#888",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "all 0.2s ease",
  },

  activeBtn: {
    background: "#d36ad6",
    color: "#ffffff",
  },

  centerBtn: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #ffdd00, #ff4ecd, #6f5bff)",
  },
};