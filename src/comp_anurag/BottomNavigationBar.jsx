import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaUsers,
  FaComments,
} from "react-icons/fa";

const BottomNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.navWrapper}>
      <div style={styles.navBar}>
        
        {/* Home */}
        <div
          onClick={() => {
            handleClick("home");
            navigate("/page12");
          }}
          style={activeTab === "home" ? styles.active : styles.navIcon}
        >
          <FaHome
            color={activeTab === "home" ? "white" : "#999"}
            size={18}
          />
        </div>

        {/* Compass */}
        <div
          onClick={() => {
            handleClick("compass");
              navigate("/page19");
          }}
          style={activeTab === "compass" ? styles.active : styles.navIcon}
        >
          <FaCompass
            color={activeTab === "compass" ? "white" : "#999"}
            size={18}
          />
        </div>

        {/* Center Circle */}
        <div
          style={styles.centerCircle}
          onClick={() => {
            handleClick("center");
            navigate("/page23");
          }}
        />

        {/* Users */}
        <div
          onClick={() => {
            handleClick("users");
            navigate("/page28");
          }}
          style={activeTab === "users" ? styles.active : styles.navIcon}
        >
          <FaUsers
            color={activeTab === "users" ? "white" : "#999"}
            size={18}
          />
        </div>

        {/* Comments */}
        <div
          onClick={() => {
            handleClick("comments");
            navigate("/page43");
          }}
          style={activeTab === "comments" ? styles.active : styles.navIcon}
        >
          <FaComments
            color={activeTab === "comments" ? "white" : "#999"}
            size={18}
          />
        </div>

      </div>
    </div>
  );
};

const styles = {
  navWrapper: {
    position: "fixed",
    bottom: 15,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  navBar: {
    width: "90%",
    backgroundColor: "#ECECEC",
    padding: "14px 25px",
    borderRadius: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  navIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  active: {
    backgroundColor: "#C26AC3",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  centerCircle: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    background:
      "linear-gradient(45deg, red, orange, yellow, green, blue, purple)",
    cursor: "pointer",
  },
};

export default BottomNavigationBar;