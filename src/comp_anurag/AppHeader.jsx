import { useState, useEffect } from "react";

function AppHeader({
  title = "Matches",
  variant = "default",
  onBack,
  data = [], // 👈 pass names list from parent
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchText("");
  };

  // 🔍 Filter logic
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // ✅ REJECT LAYOUT
  if (variant === "reject") {
    return (
      <div>
        <div style={styles.rejectHeader}>
          {/* Left Search */}
          {!showSearch ? (
            <button style={styles.circleBtn} onClick={handleSearchClick}>
              🔍
            </button>
          ) : (
            <input
              type="text"
              placeholder="Search name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={styles.searchInput}
              autoFocus
            />
          )}

          {/* Center Title */}
          {!showSearch && <h1 style={styles.centerTitle}>{title}</h1>}

          {/* Right Button */}
          {!showSearch ? (
            <button style={styles.circleBtn} onClick={handleBackClick}>
              ←
            </button>
          ) : (
            <button style={styles.circleBtn} onClick={handleCloseSearch}>
              ✕
            </button>
          )}
        </div>

        {/* 🔽 Search Results */}
        {showSearch && (
          <div style={styles.resultsContainer}>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={index} style={styles.resultItem}>
                  {item.name}
                </div>
              ))
            ) : (
              <div style={styles.noResult}>No results found</div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Default Layout
  return (
    <div style={styles.defaultHeader}>
      <h1>{title}</h1>
    </div>
  );
}

export default AppHeader;

const styles = {
  rejectHeader: {
    background: "#5B0F4F",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },

  centerTitle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
  },

  circleBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "transparent",
    color: "white",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  searchInput: {
    flex: 1,
    margin: "0 10px",
    padding: "8px 12px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
  },

  resultsContainer: {
    background: "#fff",
    padding: "10px 20px",
  },

  resultItem: {
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  noResult: {
    padding: "10px 0",
    color: "gray",
  },

  defaultHeader: {
    padding: "16px",
    background: "#ffffff",
  },
};