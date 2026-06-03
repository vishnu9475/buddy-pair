# ProfileSidebar50 Removal Guide

## ✅ Already Removed From:
1. accept.jsx
2. ChangePassword.jsx
3. Chat.jsx
4. Contacted.jsx
5. Designation.jsx
6. EditMyProfile.jsx
7. Filter.jsx

## ⏳ Remaining Pages to Update:
- Help.jsx
- Invite.jsx
- Location.jsx
- Matches.jsx
- Messages.jsx
- PrivacySettings.jsx
- Qualification.jsx
- Received.jsx
- Reject.jsx
- sent.jsx
- Settings.jsx
- Shortlist.jsx
- ShortlistedBy.jsx
- StorageAndData.jsx
- subscription.jsx
- ViewedMyProfile.jsx

## ❌ DO NOT REMOVE From:
- HomePage.jsx ✅ (Keep sidebar)
- SideMenus.jsx ✅ (Keep sidebar)

## Steps to Remove Sidebar:

### 1. Remove Import
```jsx
// REMOVE THIS LINE:
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";
```

### 2. Remove useState for sidebar
```jsx
// REMOVE THIS LINE:
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
```

### 3. Remove lg:flex from wrapper div
```jsx
// CHANGE:
<div className="min-h-screen w-full bg-[#4B164C] font-sans overflow-x-hidden lg:flex">

// TO:
<div className="min-h-screen w-full flex flex-col bg-[#4B164C] font-sans overflow-x-hidden">
```

### 4. Remove LEFT SIDE wrapper
```jsx
// REMOVE:
<div className="flex-1 flex flex-col">
  {/* HEADER AND MAIN CONTENT */}
</div>

// KEEP ONLY THE CONTENT INSIDE
```

### 5. Remove onProfileClick from SearchHeader/NavHeader
```jsx
// CHANGE:
<SearchHeader 
  title="Title" 
  variant="back"
  onProfileClick={() => setIsSidebarOpen(true)}
/>

// TO:
<SearchHeader 
  title="Title" 
  variant="back"
/>
```

### 6. Remove RIGHT SIDEBAR section
```jsx
// REMOVE THIS ENTIRE SECTION:
{/* ✅ RIGHT SIDE (DESKTOP ONLY) */}
<div className="hidden lg:block w-[320px]">
  <ProfileSidebar50 inline sidebarBg="bg-[#4B164C]" />
</div>
```

### 7. Remove MOBILE SIDEBAR section
```jsx
// REMOVE THIS ENTIRE SECTION:
{/* ✅ MOBILE SIDEBAR (overlay) */}
<div className="lg:hidden">
  <ProfileSidebar50
    open={isSidebarOpen}
    onClose={() => setIsSidebarOpen(false)}
  />
</div>
```

## Quick Find & Replace Pattern:

You can use these patterns in VS Code:

1. Find: `import ProfileSidebar50 from.*;\n`
   Replace: (empty)

2. Find: `const \[isSidebarOpen, setIsSidebarOpen\] = useState\(false\);\n`
   Replace: (empty)

3. Find: `onProfileClick=\{.*?\}`
   Replace: (empty)

## Verification:

After removing, check that:
- No import errors
- No `useState` errors for isSidebarOpen
- Page layout is still intact  
- Footer still shows
- No sidebar appears on desktop or mobile
