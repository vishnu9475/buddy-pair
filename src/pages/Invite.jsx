import React from 'react';
import SearchHeader from '../compo_sanjo/SearchHeader';
import AppFooter from '../comp_vishnu/AppFooter';
import InviteFriendsContent from '../comp_saranya/InviteFriendsContent';

const InvitePage = () => {
    return (
        <div className='w-full h-screen flex flex-col bg-white'>
            <main className="flex-grow w-full overflow-y-auto bg-[#4B164C]">
                <div className="flex flex-col min-h-full">
                    <SearchHeader title='Invite Friends' variant='back' align='center' />
                    <div className="flex-grow flex flex-col bg-white rounded-t-[30px] overflow-hidden">
                        <InviteFriendsContent />
                    </div>
                </div>
            </main>
            <div className="bg-white">
                <AppFooter joined={true} />
            </div>
        </div>
    );
};

export default InvitePage;
