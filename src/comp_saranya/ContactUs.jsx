import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-t-3xl min-h-[50vh] flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Aldrich'] text-[#4B164C] mb-4">How can we help?</h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed font-['Aldrich']">
                Our team is here to support you. Whether you have a question about features, pricing, or anything else, we're ready to help.
            </p>
            {/* <button className="mt-10 px-10 py-4 bg-[#4B164C] text-white rounded-full font-['Aldrich'] text-lg hover:bg-[#6A2E5E] transition-all transform hover:scale-105 shadow-lg active:scale-95 cursor-pointer">
                                        Send us a message
            </button> */}

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="p-4 rounded-2xl border border-gray-200 text-left">
                    <p className="font-bold text-[#4B164C] font-['Aldrich']">Helpline Number</p>
                    <p className="text-sm text-gray-500">0-8140-97-88-77</p>
                </div>
                <div className="p-4 rounded-2xl border border-gray-200 text-left">
                    <p className="font-bold text-[#4B164C] font-['Aldrich']">Email</p>
                    <p className="text-sm text-gray-500">support@buddypair.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
