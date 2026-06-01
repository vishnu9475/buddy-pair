import { useState } from 'react';
import SearchHeader from '../compo_sanjo/SearchHeader';
import HelpCenter from '../comp_saranya/HelpCenter';
import ContactUs from '../comp_saranya/ContactUs';
import PrivacyPolicy from '../comp_saranya/PrivacyPolicy';
import NavButton from '../comp_vishnu/AppFooter';
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";
import { useLocation } from 'react-router-dom';

const Help = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase();
    const isContactUs = pathname.includes('contactus');
    const isPrivacyPolicy = pathname.includes('privacypolicy');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    let headerTitle = "Help";
    if (isContactUs) headerTitle = "Contact Us";
    if (isPrivacyPolicy) headerTitle = "Privacy Policy";

    return (
        <div className="min-h-screen w-full bg-[#4B164C] font-sans overflow-x-hidden lg:flex">
            
            {/* ✅ LEFT SIDE */}
            <div className="flex-1 flex flex-col">

                {/* HEADER */}
                <header className="sticky top-0 z-10">
                    <SearchHeader 
                        title={headerTitle} 
                        variant='back' 
                        align='center'
                        onProfileClick={() => setIsSidebarOpen(true)}
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
                        <HelpCenter />
                        {isContactUs ? (
                            <ContactUs />
                        ) : isPrivacyPolicy ? (
                            <PrivacyPolicy />
                        ) : (
                            <div className="max-w-3xl mx-auto space-y-8 w-full">
                                <h3 className="text-xl sm:text-2xl font-['Aldrich'] text-[#4B164C] border-b border-pink-100 pb-2">Frequently Asked Questions</h3>

                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-pink-200 transition-colors cursor-pointer">
                                            <p className="font-bold text-[#4B164C] font-['Aldrich'] mb-1">How do I change my profile settings?</p>
                                            <p className="text-sm text-gray-500 line-clamp-2">You can navigate to the Privacy & Settings page from the sidebar to modify your personal information and preferences.</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>

            </div>

            {/* ✅ RIGHT SIDE (DESKTOP ONLY) */}
            <div className="hidden lg:block w-[320px]">
                <ProfileSidebar50 inline sidebarBg="bg-[#4B164C]" />
            </div>

            {/* ✅ MOBILE SIDEBAR (overlay) */}
            <div className="lg:hidden">
                <ProfileSidebar50
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </div>

            {/* 4. FLOATING NAV FOOTER */}
            <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-10 px-4">
                <div className="pointer-events-auto w-full max-w-[800px]">
                    <NavButton />
                </div>
            </footer>
        </div>
    );
};

export default Help;
