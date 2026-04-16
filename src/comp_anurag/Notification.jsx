import { useState, useEffect } from "react";

function Notification() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [dismissHovered, setDismissHovered] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const notifications = [
    {
      id: 1,
      type: "news",
      badge: "NEWS",
      title: "News Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae ultrices in sed.",
      time: "Today 10:30PM",
    },
    {
      id: 2,
      type: "success",
      message: "Successfully Message",
      time: "Today 10:30PM",
    },
    {
      id: 3,
      type: "alert",
      message: "Alert Message",
      time: "Today 10:30PM",
    },
    {
      id: 4,
      type: "error",
      message: "Error Message",
      time: "Today 10:30PM",
    },
  ];

  const handleDismiss = (id) => {
    console.log("Dismiss notification:", id);
  };

  // ✅ WHITE BACKGROUND
  const containerStyle = {
    minHeight: "100vh",
    background: "#ffffff",
    padding: isMobile ? "16px" : "20px",
    paddingBottom: "100px",
    position: "relative",
    overflowX: "hidden",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 0 24px 0",
    marginBottom: "16px",
  };

  const placeholderStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.1)",
  };

  const bellIconStyle = {
    color: "#111827",
    cursor: "pointer",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 10,
    position: "relative",
  };

  // ✅ ORIGINAL DARK GLASS CARD (UNCHANGED STYLE)
  const getCardStyle = (index) => ({
    background: "rgba(76, 29, 149, 0.9)", // purple glass feel
    backdropFilter: "blur(20px)",
    borderRadius: "16px",
    padding: index === 0 ? (isMobile ? "16px" : "20px") : "16px",
    border:
      index === 0
        ? "2px solid rgba(255,255,255,0.3)"
        : "1px solid rgba(255,255,255,0.15)",
    position: "relative",
    transition: "all 0.2s ease",
    transform: hoveredCard === index ? "translateY(-2px)" : "translateY(0)",
    boxShadow:
      hoveredCard === index
        ? "0 8px 24px rgba(0,0,0,0.3)"
        : "none",
  });

  const getDismissStyle = (index) => ({
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "4px",
    opacity: dismissHovered === index ? 1 : 0.8,
    transition: "opacity 0.2s",
  });

  // Icons
  const renderNotificationIcon = (type) => {
    const iconStyle = {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      background:
        type === "success"
          ? "#10b981"
          : type === "alert"
          ? "#f59e0b"
          : "#ef4444",
      color: "white",
      fontWeight: "bold",
    };

    if (type === "success") return <div style={iconStyle}>✓</div>;
    if (type === "alert") return <div style={iconStyle}>!</div>;
    if (type === "error") return <div style={iconStyle}>✕</div>;

    return null;
  };

  const newsBadgeStyle = {
    background: "rgba(196, 181, 253, 0.3)",
    color: "#e9d5ff",
    padding: "4px 12px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: 600,
    marginBottom: "10px",
    display: "inline-block",
  };

  const newsTitleStyle = {
    color: "white",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: 700,
    marginBottom: "8px",
  };

  const newsContentStyle = {
    color: "rgba(255,255,255,0.85)",
    fontSize: "14px",
    marginBottom: "12px",
  };

  const messageStyle = {
    color: "white",
    fontWeight: 600,
  };

  const timeStyle = {
    color: "rgba(255,255,255,0.7)",
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={placeholderStyle}></div>
        <div style={bellIconStyle}>🔔</div>
      </div>

      {/* Notifications */}
      <div style={listStyle}>
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <button
              style={getDismissStyle(index)}
              onClick={() => handleDismiss(notification.id)}
              onMouseEnter={() => setDismissHovered(index)}
              onMouseLeave={() => setDismissHovered(null)}
            >
              ✕
            </button>

            {notification.type === "news" ? (
              <>
                <div style={newsBadgeStyle}>{notification.badge}</div>
                <h3 style={newsTitleStyle}>{notification.title}</h3>
                <p style={newsContentStyle}>{notification.content}</p>
                <div style={timeStyle}>{notification.time}</div>
              </>
            ) : (
              <div style={{ display: "flex", gap: "12px" }}>
                {renderNotificationIcon(notification.type)}
                <div>
                  <div style={messageStyle}>
                    {notification.message}
                  </div>
                  <div style={timeStyle}>{notification.time}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;