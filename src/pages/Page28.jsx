import React from "react";
import AppHeader from "../comp_anurag/AppHeader";
import BottomNavigationBar from "../comp_anurag/BottomNavigationBar";
import ContactBuddies from "../comp_anurag/ContactBuddies";

function Buddies() {
  return (
    <div style={styles.page}>
      <AppHeader title="Buddies" variant="reject" />

      {/* Buttons hidden */}
      <ContactBuddies showActions={false} />

      <BottomNavigationBar />
    </div>
  );
}

export default Buddies;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#5B0F4F",
    display: "flex",
    flexDirection: "column",
  },
};