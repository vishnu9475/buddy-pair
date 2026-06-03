import React from "react";
import SearchHeader from "../compo_sanjo/SearchHeader.jsx"
import NavButton from '../comp_vishnu/AppFooter.jsx';
import ContactList from "../comp_anurag/ContactList";

function Reject() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#4B164C] font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-10">
        <SearchHeader 
          title="Reject" 
          variant="reject"
        />
      </header>

      {/* MAIN */}
      <main className="
        flex-grow 
        bg-white 
        rounded-t-[80px] 
        -mt-10 
        z-20 
        relative 
        shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.35)]
        pb-36
      ">
        <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mt-6 mb-8"></div>

        <div className="w-[92%] md:w-[85%] max-w-[1100px] mx-auto flex flex-col">
          <ContactList showActions={false} />
        </div>
      </main>

      {/* FLOATING NAV FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
        <div className="pointer-events-auto w-full max-w-[800px]">
          <NavButton />
        </div>
      </footer>
    </div>
  );
}

export default Reject;