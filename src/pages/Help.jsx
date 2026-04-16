import SearchHeader from '../compo_sanjo/SearchHeader';
import HelpCenter from '../comp_saranya/HelpCenter';
import ContactUs from '../comp_saranya/ContactUs';
import PrivacyPolicy from '../comp_saranya/PrivacyPolicy';
import AppFooter from '../comp_vishnu/AppFooter';
import { useLocation } from 'react-router-dom';

const Help = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase();
    const isContactUs = pathname.includes('contactus');
    const isPrivacyPolicy = pathname.includes('privacypolicy');

    let headerTitle = "Help";
    if (isContactUs) headerTitle = "Contact Us";
    if (isPrivacyPolicy) headerTitle = "Privacy Policy";

    return (
        <div className='w-full h-screen flex flex-col bg-white'>
            <main className="flex-grow w-full overflow-y-auto bg-[#4B164C]">
                <div className="flex flex-col min-h-full">
                    <SearchHeader title={headerTitle} variant='back' align='center' />
                    <HelpCenter />
                    <div className="flex-grow flex flex-col bg-white rounded-t-[40px] overflow-hidden p-6 sm:p-8 md:p-12 mt-4 sm:mt-0">
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
                </div>
            </main>
            <div className="bg-white">
                <AppFooter joined={true} />
            </div>
        </div>
    );
};

export default Help;
