import SearchHeader from '../compo_sanjo/SearchHeader';
import Component55 from '../comp_saranya/Component55';
import AppFooter from '../comp_vishnu/AppFooter';

const PSettings = () => {
    return (
        <div className='w-full h-screen flex flex-col bg-white'>
            <main className="flex-grow w-full overflow-y-auto bg-[#4B164C]">
                <div className="flex flex-col min-h-full">
                    <SearchHeader title='Privacy & Settings' variant='back' align='center' />
                    <div className="flex-grow flex flex-col bg-white rounded-t-[30px] overflow-hidden">
                        <Component55 />
                    </div>
                </div>
            </main>
            <div className="bg-white">
                <AppFooter joined={true} />
            </div>
        </div>
    );
};

export default PSettings;
