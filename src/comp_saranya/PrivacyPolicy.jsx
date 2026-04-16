import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-t-3xl min-h-[50vh] flex flex-col items-start justify-start text-left">
            <h3 className="text-xl sm:text-2xl font-['Aldrich'] text-[#4B164C] border-b border-pink-100 pb-2 mb-6 w-full">Privacy Statement</h3>
            <div className="text-gray-500 text-sm sm:text-base md:text-lg max-w-4xl leading-loose font-['Aldrich'] text-justify space-y-6">
                <p>
                    BuddyApp is an online matrimonial portal endeavouring constantly to provide you with dating and matrimonial services. This privacy statement is common to all the matrimonial Website/apps operated under BuddyApp.
                </p>
                <p>
                    Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you. You acknowledge that you are disclosing information voluntarily.
                </p>
                <p>
                    By accessing /using the website/apps and/or by providing your information, you consent to the collection, use, share, store and process the info you disclose on the website/apps in accordance with this Privacy Policy.
                </p>
                <p>
                    If you do not agree for use of your information, please do not use or access this website/apps.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
