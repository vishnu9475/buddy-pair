import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader.jsx"
import Footer from '../comp_vishnu/AppFooter.jsx';
import ContactList from "../comp_anurag/ContactList";

function ShortlistedBy() {
  return (
    <div style={styles.page}>
        <SearchHeader title="Shortlisted By" variant="shortlistedBy" />

      {/* Buttons hidden */}
      <ContactList showActions={false} />

      {/* Footer - moved outside */}
                <Footer />
    </div>
  );
}

export default ShortlistedBy;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#4B164C",
    display: "flex",
    flexDirection: "column",
  },
};