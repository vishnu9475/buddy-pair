import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader.jsx"
import Footer from '../comp_vishnu/AppFooter.jsx';
import ContactList from "../comp_anurag/ContactList";

function Shortlist() {
  return (
    <div style={styles.page}>
      <SearchHeader title="Shortlist" variant="shortlist" />
      <ContactList />
      {/* Footer - moved outside */}
                <Footer />
    </div>
  );
}

export default Shortlist;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#4B164C",
    display: "flex",
    flexDirection: "column",
  },
};