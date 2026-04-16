import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader.jsx"
import Footer from '../comp_vishnu/AppFooter.jsx';
import ContactList from "../comp_anurag/ContactList";

function Contacted() {
  return (
    <div style={styles.page}>
      <SearchHeader title="Contacted" variant="contacted" />
      <ContactList />
        {/* Footer - moved outside */}
                  <Footer />
    </div>
  );
}

export default Contacted;

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#4B164C",
    display: "flex",
    flexDirection: "column",
  },
};