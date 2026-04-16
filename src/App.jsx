import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

//vishnu
import InterestedFeedPage from './pages/InterestedFeedPage.jsx';
import AddInfoMatrimonyPage from './pages/AddInfoMatrimonyPage.jsx';
import InterestedinPage from './pages/InterestedinPage.jsx';
import HomePage from './pages/HomePage.jsx';
import PageGroups from './pages/PageGroups.jsx'

//sravan
import PersonalDetails from "./pages/PersonalDetails";
import WelcomeScreen from "./pages/WelcomeScreen";
import AdditionalSettings from "./pages/AdditionalSettings"

//dhanoop
import JobStatusPage from './pages/JobStatusPage'
import JobDetailsPage from './pages/JobDetailsPage'
import RelationshipGoalsPage from './pages/relationshipGoalsPage'
import JobSeekerPage from './pages/JobSeekerPage'
import Error403Page from './pages/Error403Page'
import Error404Page from './pages/Error404Page'

//neja
import OtherUserProfile from './pages/OtherUserProfile'
import Messages from './pages/Messages'
import ViewStory from './pages/ViewStory'
import Spin from './pages/Spin'
import UserProfile from './pages/UserProfile'
import OtherUserAbout from './pages/OtherUserAbout'
import CreateGroup from './pages/CreateGroup'
import Chat from './pages/Chat'
import MyStory from './pages/MyStory'

//sanjo
import Qualification from "./pages/Qualification";
import Location from "./pages/Location";
import Designation from "./pages/Designation";
import ViewedMyProfile from "./pages/ViewedMyProfile";
import ChangePassword from "./pages/ChangePassword";
import EditMyProfile from "./pages/EditMyProfile";
import Page21 from "./pages/Profile42";
import PaymentMethods from "./pages/PaymentMethods";
import AddCreditCard from "./pages/AddCreditCard";
import Matches from "./pages/Matches.jsx";
import Filter from "./pages/Filter.jsx";

// arjun
import StoryViewer from "./pages/upgradestory"; 
import ProfileViewer from "./pages/upgradeprofile"; 
import Accept from "./pages/accept";
import Sent from "./pages/sent";
import Subscription from "./pages/subscription";

// saranya
import SideMenus from './pages/SideMenus';
import PrivacySettings from './pages/PrivacySettings';
import Settings from './pages/Settings';
import Help from './Pages/Help';
import StorageAndData from './Pages/StorageAndData';
import Invite from './Pages/Invite';

// anurag
import Reject from './pages/Reject';
import Received from './pages/Received';
import Shortlist from './pages/Shortlist';
import Contacted from './pages/Contacted';
import ShortlistedBy from './pages/ShortlistedBy';
import NotificationPage from './pages/Notification';
import Page43 from './pages/Page43';
import Page12 from './pages/Page12';
import Page23 from './pages/Page23';
import Page28 from './pages/Page28';
import Discover from './pages/Discover';

function App() {
  return (
    <>
      {/* ROUTES */}
      <Routes>

        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/additionalSettings" element={<AdditionalSettings />} />

        <Route path="/interestedFeedPage" element={<InterestedFeedPage />} />
        <Route path="/addInfoMatrimonyPage" element={<AddInfoMatrimonyPage />} />
        <Route path="/interestedinPage" element={<InterestedinPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/groups" element={<PageGroups />} />

        <Route path='/jobstatus' element={<JobStatusPage/>}/>
        <Route path='/jobdetails' element={<JobDetailsPage/>}/>
        <Route path='/jobseeker' element={<JobSeekerPage/>}/>
        <Route path='/relationshipgoals' element={<RelationshipGoalsPage/>}/>
        <Route path='/404error' element={<Error404Page/>}/>
        <Route path='/403error' element={<Error403Page/>}/>

        <Route path="/otheruserprofile" element={<OtherUserProfile/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/viewstory" element={<ViewStory/>}/>
        <Route path="/spin" element={<Spin/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/otheruserabout" element={<OtherUserAbout/>}/>
        <Route path="/CreateGroup" element={<CreateGroup/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/mystory" element={<MyStory/>}/>

        <Route path="/edit-profile" element={<EditMyProfile />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/location" element={<Location />} />
        <Route path="/designation" element={<Designation />} />
        <Route path="/viewed-profile" element={<ViewedMyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/profile" element={<Page21 />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/add-card" element={<AddCreditCard />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/filter" element={<Filter />} />

        <Route path="/upgradeview1" element={<StoryViewer/>}/>
        <Route path="/upgradeview2" element={<ProfileViewer/>}/>
        <Route path="/accept" element={<Accept/>}/>
        <Route path="/sent" element={<Sent/>}/>
        <Route path="/subscription" element={<Subscription/>}/>

        <Route path='/privacysettings' element={<PrivacySettings />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/SideMenus' element={<SideMenus />} />
        <Route path='/invite' element={<Invite />} />
        <Route path='/StorageAndData' element={<StorageAndData />} />
        <Route path='/help' element={<Help />} />

        <Route path="/reject" element={<Reject />} />
        <Route path="/received" element={<Received />} />
        <Route path="/shortlist" element={<Shortlist />} />
        <Route path="/contacted" element={<Contacted />} />
        <Route path="/page12" element={<Page12 />} />
        <Route path="/page23" element={<Page23 />} />
        <Route path="/page43" element={<Page43 />} />
        <Route path="/page28" element={<Page28 />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/shortlistedby" element={<ShortlistedBy />} />

      </Routes>
    </>
  );
}

export default App;