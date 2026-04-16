import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader.jsx"
import Footer from '../comp_vishnu/AppFooter.jsx';
import ContactList from "../comp_anurag/ContactList";

function Reject() {
  return (
    <div style={styles.page}>
      <SearchHeader title="Reject" variant="reject" />

      {/* Buttons hidden */}
      <ContactList showActions={false} />

       {/* Footer - moved outside */}
            <Footer />
    </div>
  );
}

export default Reject;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#4B164C",
    display: "flex",
    flexDirection: "column",
  },
};