import React from 'react';

// Dashboard component: Main dashboard UI for the application
const Dashboard = () => {
  return (
    <div className="relative p-6 bg-[#19191A] min-h-screen text-white">
      {/* Header section: Logo, search bar, and notification bell */}
      <div className="flex justify-between items-center mb-8">
        {/* Logo and title */}
        <h1 className="text-3xl font-bold font-beyno flex items-center">
          {/* Dashboard title, styled with custom font and SVG logo */}
          <svg width="208" height="31" viewBox="0 0 208 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
          {/* TERRA */}
          <path d="M12.8067 1.25262C13.1723 1.25262 13.4566 1.49633 13.5379 1.8619V3.85224C13.5379 4.33967 13.2535 4.62401 12.8067 4.62401H4.2767V29.686C4.2767 30.011 3.99237 30.3359 3.58618 30.3359H1.55522C1.18965 30.3359 0.905314 30.0516 0.905314 29.686V1.8619C0.905314 1.49633 1.18965 1.25262 1.55522 1.25262H12.8067ZM14.7961 30.3359C14.3493 30.3359 14.1462 30.1328 14.1462 29.686V1.82128C14.1462 1.41509 14.3899 1.25262 14.7961 1.25262H34.009C34.4152 1.25262 34.6183 1.45571 34.6183 1.8619V3.89286C34.6183 4.38029 34.4152 4.62401 33.9684 4.62401H17.5582V9.49831H30.597C30.9625 9.49831 31.2063 9.82326 31.2063 10.1888V12.2198C31.2063 12.5854 30.9625 12.9103 30.597 12.9103H17.5582V17.9471H30.597C30.9625 17.9471 31.2063 18.2314 31.2063 18.597V20.6686C31.2063 20.9935 30.9625 21.3591 30.597 21.3591H17.5582V26.9645H33.8465C34.2527 26.9645 34.5776 27.2083 34.5776 27.6551V29.6454C34.5776 30.0922 34.3339 30.3359 33.8871 30.3359H14.7961ZM35.8625 16.2005H47.6827C50.5667 15.9974 53.0038 13.2759 53.0038 10.3919C53.0038 7.42673 50.4854 4.58339 47.3984 4.58339H37.6092C37.1624 4.58339 36.9593 4.29905 36.9593 3.89286V1.8619C36.9593 1.45571 37.203 1.25262 37.6092 1.25262H47.439C52.2727 1.25262 56.4158 5.43639 56.4158 10.3513C56.4158 14.4538 53.4913 18.1908 49.5106 19.3281L55.8472 29.8891C55.9284 30.0516 55.969 30.1328 55.969 30.2141C55.969 30.2953 55.8472 30.3359 55.6035 30.3359H52.557C52.1508 30.3359 51.8665 30.0516 51.6634 29.7267L45.5299 19.5312H38.584V29.7267C38.584 30.1328 38.3809 30.3359 37.9747 30.3359H35.8625C35.4157 30.3359 35.2126 30.1328 35.2126 29.7267V16.891C35.2126 16.4848 35.497 16.2005 35.8625 16.2005ZM57.6827 16.2005H69.5028C72.3868 15.9974 74.8239 13.2759 74.8239 10.3919C74.8239 7.42673 72.3056 4.58339 69.2185 4.58339H59.4293C58.9825 4.58339 58.7794 4.29905 58.7794 3.89286V1.8619C58.7794 1.45571 59.0231 1.25262 59.4293 1.25262H69.2591C74.0928 1.25262 78.2359 5.43639 78.2359 10.3513C78.2359 14.4538 75.3114 18.1908 71.3307 19.3281L77.6673 29.8891C77.7485 30.0516 77.7891 30.1328 77.7891 30.2141C77.7891 30.2953 77.6673 30.3359 77.4236 30.3359H74.3771C73.9709 30.3359 73.6866 30.0516 73.4835 29.7267L67.35 19.5312H60.4041V29.7267C60.4041 30.1328 60.201 30.3359 59.7948 30.3359H57.6827C57.2358 30.3359 57.0327 30.1328 57.0327 29.7267V16.891C57.0327 16.4848 57.3171 16.2005 57.6827 16.2005ZM92.8258 1.74004C92.8258 1.74004 104.768 29.3205 104.768 29.3611C104.89 29.6454 104.89 29.7267 104.89 29.8485C104.89 30.1735 104.646 30.3359 104.199 30.3359H79.6246C79.1778 30.3359 78.8529 30.0922 78.8529 29.7267C78.8529 29.6048 78.8529 29.4829 78.9341 29.3611L91.0386 1.74004C91.2417 1.33385 91.4448 1.212 91.8916 1.212H92.0135C92.5415 1.212 92.6227 1.33385 92.8258 1.74004ZM91.9322 7.54858L83.6865 26.8833H100.137L91.9322 7.54858Z" fill="white"/>
          {/* S */}
          <path d="M110.874 5.72072C110.63 5.96444 109.249 8.11725 109.249 9.7014C109.249 10.7575 109.615 11.8542 110.346 12.8291C112.336 15.4693 114.733 17.3784 114.733 21.3185C114.733 26.0303 111.077 30.2141 106.162 30.4984C105.715 30.4984 105.512 30.1735 105.512 29.7673V27.98C105.512 27.6145 105.797 27.3707 106.162 27.3301C109.046 26.9645 111.565 23.8775 111.565 21.0341C111.565 17.744 108.153 15.8755 106.853 13.2353C106.243 12.0167 105.959 10.7575 105.959 9.53892C105.959 4.90834 109.777 0.562089 114.733 0.318375C115.18 0.318375 115.383 0.643329 115.383 1.04952V2.918C115.383 3.32419 115.098 3.48667 114.733 3.52729C113.189 3.73038 111.89 4.58339 110.874 5.72072Z" fill="#0B50FF"/>
          {/* P */}
          <path d="M119.301 1.25262H129.131C134.412 1.25262 137.783 5.27391 137.783 10.2701C137.783 14.9413 134.33 19.5312 128.969 19.5312H120.073V29.7267C120.073 30.1328 119.87 30.3359 119.423 30.3359H117.352C116.905 30.3359 116.702 30.1328 116.702 29.7267V16.891C116.702 16.4848 116.986 16.2005 117.352 16.2005L129.091 16.2411C132.015 16.038 134.493 13.3165 134.493 10.4325C134.493 7.42673 131.974 4.58339 128.887 4.58339H119.301C118.895 4.58339 118.651 4.29905 118.651 3.9741V1.94314C118.651 1.53695 118.936 1.25262 119.301 1.25262Z" fill="#FF9601"/>
          {/* O */}
          <path d="M153.391 0.358993C161.637 0.358993 168.38 7.10177 168.38 15.3475C168.38 23.5932 161.637 30.3359 153.391 30.3359C145.105 30.3359 138.403 23.5932 138.403 15.3475C138.403 7.10177 145.105 0.358993 153.391 0.358993ZM153.391 27.0458C159.809 27.0458 165.049 21.7653 165.049 15.3475C165.049 8.88902 159.809 3.64915 153.391 3.64915C146.933 3.64915 141.693 8.88902 141.693 15.3475C141.693 21.7653 146.933 27.0458 153.391 27.0458Z" fill="#9900CC"/>
          {/* R */}
          <path d="M169.481 16.2005H181.301C184.185 15.9974 186.622 13.2759 186.622 10.3919C186.622 7.42673 184.103 4.58339 181.016 4.58339H171.227C170.78 4.58339 170.577 4.29905 170.577 3.89286V1.8619C170.577 1.45571 170.821 1.25262 171.227 1.25262H181.057C185.891 1.25262 190.034 5.43639 190.034 10.3513C190.034 14.4538 187.109 18.1908 183.129 19.3281L189.465 29.8891C189.546 30.0516 189.587 30.1328 189.587 30.2141C189.587 30.2953 189.465 30.3359 189.221 30.3359H186.175C185.769 30.3359 185.485 30.0516 185.281 29.7267L179.148 19.5312H172.202V29.7267C172.202 30.1328 171.999 30.3359 171.593 30.3359H169.481C169.034 30.3359 168.831 30.1328 168.831 29.7267V16.891C168.831 16.4848 169.115 16.2005 169.481 16.2005Z" fill="#E30B5C"/>
          {/* T */}
          <path d="M206.411 1.25262C206.777 1.25262 207.061 1.49633 207.142 1.8619V3.85224C207.142 4.33967 206.858 4.62401 206.411 4.62401H197.881V29.686C197.881 30.011 197.597 30.3359 197.19 30.3359H195.159C194.794 30.3359 194.51 30.0516 194.51 29.686V1.8619C194.51 1.49633 194.794 1.25262 195.159 1.25262H206.411Z" fill="#05C7FC"/>
          </svg>

        </h1>
        {/* Search bar and notification bell */}
        <div className="flex items-center space-x-4">
          {/* Header controls: Search bar and notification bell */}
          {/* Search bar container, positions icon and input */}
          <div className="relative">
            {/* Search icon (magnifying glass), absolutely positioned */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* SVG for search icon */}
              <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </span>
            {/* Search input field, styled for light/dark mode */}
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm text-white border-none rounded-[1.5rem] bg-[#23262F] placeholder-gray-400"
              placeholder="Search"
              style={{ minWidth: 200 }}
            />
          </div>
          {/* Notification bell */}
          <button className="p-2 bg-[#23262F] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="white" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main dashboard grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Top row cards */}
        {/* Admin Card */}
        <div className="col-span-1 bg-[#0EA0FF] rounded-[24px] rounded-tl-[10rem] p-0 shadow-2xl relative overflow-hidden min-h-[160px] flex items-center">
          {/* Background illustration */}
          <img
            src="#"
            alt="Terrasport Icon"
            className="absolute left-0 top-0 w-full h-full object-cover rounded-[24px] opacity-90"
            style={{ zIndex: 0 }}
          />
          {/* Admin info */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full p-6">
            <h2 className="text-4xl font-bold text-white mb-2">Karan Admin</h2>
            <p className="text-2xl text-white">No Notifications</p>
          </div>
        </div>
        {/* Create Certificate Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg flex flex-col justify-center items-center min-h-[160px]">
          <h2 className="text-2xl font-semibold mb-8 text-center">Lets Create a Certificate</h2>
          <button className="bg-[#2DEBAE] text-black text-2xl font-semibold px-12 py-4 rounded-[20px] w-full max-w-xs cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
        {/* Member Requests Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg min-h-[160px] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">Member Requests</h2>
          <p className="text-lg mb-2">No Request</p>
          <p className="text-gray-400 text-base">Once any request is received, it will reflect here</p>
        </div>
        {/* Upcoming Events Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-lg mb-2">No Upcoming Events</p>
          <p className="text-gray-400 text-base">Once any event is created, it will reflect here</p>
        </div>
      </div>

      {/* Bottom grid: Total Activity and Ongoing Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Activity Card */}
        <div className="col-span-2 bg-[#23262F] rounded-[40px] rounded-bl-[10rem] p-0 shadow-lg relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          {/* Background SVG */}
          <div className="absolute left-0 bottom-0 w-full h-full z-0">
            <svg width="100%" height="100%" viewBox="0 0 800 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="800" cy="20" r="150" fill="#91A4F7" />
              <circle cx="120" cy="350" r="200" fill="#23262F" />
            </svg>
          </div>
          {/* Bar chart and stats */}
          <div className="relative z-10 flex flex-col h-full p-8">
            <h2 className="text-3xl font-bold mb-8">Total Activity</h2>
            <div className="flex flex-row items-end justify-between h-full w-full">
              {/* Bar: Students */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Students</span>
                <div className="bg-[#FFA726] w-10 h-32 rounded-t-lg"></div>
              </div>
              {/* Bar: Members */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Members</span>
                <div className="bg-[#FF6F61] w-10 h-48 rounded-t-lg"></div>
              </div>
              {/* Bar: Coaches */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Coaches</span>
                <div className="bg-[#42A5F5] w-10 h-40 rounded-t-lg"></div>
              </div>
              {/* Bar: Events */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Events</span>
                <div className="bg-[#2563EB] w-10 h-40 rounded-t-lg"></div>
              </div>
              {/* Bar: Certificates */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Certificates</span>
                <div className="bg-[#B39DDB] w-10 h-20 rounded-t-lg"></div>
              </div>
              {/* Bar: Number of sports */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Number of sports</span>
                <div className="bg-[#B94DDB] w-10 h-32 rounded-t-lg"></div>
              </div>
            </div>
            {/* Members count overlay */}
            <div className="absolute top-0 right-0 mt-8 mr-8 bg-[#91A4F7] rounded-[10px] flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">248</span>
              <span className="text-xl text-white">Members</span>
            </div>
          </div>
        </div>
        {/* Ongoing Events Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[32px] rounded-br-[10rem] p-0 shadow-lg relative overflow-hidden flex flex-col justify-between">
          {/* Tab navigation for events */}
          <div className="flex w-full">
            <button className="bg-[#0B50FF] text-white font-semibold flex-1">Event 1</button>
            <button className="bg-[#0EA0FB] text-white border border-[#393C44] flex-1">Event 2</button>
            <button className="bg-[#9B04CC] text-white border border-[#393C44] flex-1">Event 3</button>
            <button className="bg-[#FF9601] text-white border border-[#393C44] flex-1">Event 4</button>
            <button className="bg-[#30DFA0] text-black font-25px flex-1">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 6.5625H9.5V0.9375C9.5 0.68886 9.39464 0.450403 9.20711 0.274588C9.01957 0.0987722 8.76522 0 8.5 0C8.23478 0 7.98043 0.0987722 7.79289 0.274588C7.60536 0.450403 7.5 0.68886 7.5 0.9375V6.5625H1.5C1.23478 6.5625 0.98043 6.66127 0.792893 6.83709C0.605357 7.0129 0.5 7.25136 0.5 7.5C0.5 7.74864 0.605357 7.9871 0.792893 8.16291C0.98043 8.33873 1.23478 8.4375 1.5 8.4375H7.5V14.0625C7.5 14.3111 7.60536 14.5496 7.79289 14.7254C7.98043 14.9012 8.23478 15 8.5 15C8.76522 15 9.01957 14.9012 9.20711 14.7254C9.39464 14.5496 9.5 14.3111 9.5 14.0625V8.4375H15.5C15.7652 8.4375 16.0196 8.33873 16.2071 8.16291C16.3946 7.9871 16.5 7.74864 16.5 7.5C16.5 7.25136 16.3946 7.0129 16.2071 6.83709C16.0196 6.66127 15.7652 6.5625 15.5 6.5625Z" fill="#19191A"/>
              </svg>
            </button>
          </div>
          {/* Ongoing Events content */}
          <div className="relative z-10 flex flex-col h-full px-8 pb-8 pt-4">
            <h2 className="text-3xl font-bold mb-4">Ongoing Events</h2>
            <p className="text-lg mb-2">No Ongoing Events</p>
            <p className="text-gray-400 text-base mb-4">Once any event becomes live, it will reflect here</p>
            {/* Decorative background */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 z-0">
              {/* <img
                src="#"
                alt="Ongoing Events BG"
                className="object-cover w-full h-full rounded-b-[32px]"
                style={{ opacity: 1 }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom left floating menu and bottom right settings button */}
      {/* Floating menu button (bottom left) */}
      <button
        className="left-2 transition-colors rounded-full flex items-center justify-center z-50"
        aria-label="Main Menu"
      >
        <svg width="107" height="100" viewBox="6 -5 107 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dddd_4037_114968)">
            <rect x="23" y="3" width="73" height="73" rx="36.5" fill="#23282E" class="hover:fill-[#393C44]"/>
            <path d="M44.7264 41.2635H55.0845C55.5423 41.2635 55.9814 41.0816 56.3052 40.7579C56.6289 40.4341 56.8108 39.995 56.8108 39.5372V25.7264C56.8108 25.2685 56.6289 24.8294 56.3052 24.5056C55.9814 24.1819 55.5423 24 55.0845 24H44.7264C44.2685 24 43.8294 24.1819 43.5056 24.5056C43.1819 24.8294 43 25.2685 43 25.7264V39.5372C43 39.995 43.1819 40.4341 43.5056 40.7579C43.8294 41.0816 44.2685 41.2635 44.7264 41.2635ZM43 53.348C43 53.8058 43.1819 54.2449 43.5056 54.5687C43.8294 54.8924 44.2685 55.0743 44.7264 55.0743H55.0845C55.5423 55.0743 55.9814 54.8924 56.3052 54.5687C56.6289 54.2449 56.8108 53.8058 56.8108 53.348V46.4426C56.8108 45.9847 56.6289 45.5456 56.3052 45.2219C55.9814 44.8981 55.5423 44.7162 55.0845 44.7162H44.7264C44.2685 44.7162 43.8294 44.8981 43.5056 45.2219C43.1819 45.5456 43 45.9847 43 46.4426V53.348ZM60.2635 53.348C60.2635 53.8058 60.4454 54.2449 60.7691 54.5687C61.0929 54.8924 61.532 55.0743 61.9899 55.0743H72.348C72.8058 55.0743 73.2449 54.8924 73.5687 54.5687C73.8924 54.2449 74.0743 53.8058 74.0743 53.348V41.2635C74.0743 40.8057 73.8924 40.3666 73.5687 40.0428C73.2449 39.719 72.8058 39.5372 72.348 39.5372H61.9899C61.532 39.5372 61.0929 39.719 60.7691 40.0428C60.4454 40.3666 60.2635 40.8057 60.2635 41.2635V53.348ZM61.9899 36.0845H72.348C72.8058 36.0845 73.2449 35.9026 73.5687 35.5788C73.8924 35.2551 74.0743 34.816 74.0743 34.3581V25.7264C74.0743 25.2685 73.8924 24.8294 73.5687 24.5056C73.2449 24.1819 72.8058 24 72.348 24H61.9899C61.532 24 61.0929 24.1819 60.7691 24.5056C60.4454 24.8294 60.2635 25.2685 60.2635 25.7264V34.3581C60.2635 34.816 60.4454 35.2551 60.7691 35.5788C61.0929 35.9026 61.532 36.0845 61.9899 36.0845Z" fill="#30DFA0"/>
          </g>
          <defs>
            <filter id="filter0_dddd_4037_114968" x="0" y="0" width="107" height="135" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="3"/>
              <feGaussianBlur stdDeviation="3"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4037_114968"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-1" dy="10"/>
              <feGaussianBlur stdDeviation="5.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_4037_114968" result="effect2_dropShadow_4037_114968"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-3" dy="23"/>
              <feGaussianBlur stdDeviation="7"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="effect2_dropShadow_4037_114968" result="effect3_dropShadow_4037_114968"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-6" dy="42"/>
              <feGaussianBlur stdDeviation="8.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
              <feBlend mode="normal" in2="effect3_dropShadow_4037_114968" result="effect4_dropShadow_4037_114968"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_4037_114968" result="shape"/>
            </filter>
          </defs>
        </svg>


      </button>
      {/* Settings button (bottom right) */}
      <button
        className="absolute bottom-12 right-14 bg-[#23262F] transition-colors rounded-2xl flex items-center justify-center shadow-lg z-50"
        aria-label="Settings"
      >
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="19" fill="#23282E" class="hover:fill-[#393C44]"/>
          <path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" fill="white" stroke="white" stroke-width="1.5"/>
          <path d="M20.7655 9.152C20.3985 9 19.9325 9 19.0005 9C18.0685 9 17.6025 9 17.2355 9.152C16.9926 9.25251 16.772 9.3999 16.5862 9.58572C16.4003 9.77155 16.253 9.99218 16.1525 10.235C16.0605 10.458 16.0235 10.719 16.0095 11.098C16.0032 11.372 15.9275 11.6399 15.7893 11.8766C15.6511 12.1132 15.455 12.3109 15.2195 12.451C14.9803 12.585 14.7111 12.6561 14.437 12.6575C14.1629 12.6589 13.8929 12.5906 13.6525 12.459C13.3165 12.281 13.0735 12.183 12.8325 12.151C12.3068 12.0819 11.7752 12.2243 11.3545 12.547C11.0405 12.79 10.8065 13.193 10.3405 14C9.87445 14.807 9.64045 15.21 9.58945 15.605C9.55509 15.8655 9.57237 16.1301 9.64032 16.3839C9.70826 16.6377 9.82554 16.8756 9.98545 17.084C10.1335 17.276 10.3405 17.437 10.6615 17.639C11.1345 17.936 11.4385 18.442 11.4385 19C11.4385 19.558 11.1345 20.064 10.6615 20.36C10.3405 20.563 10.1325 20.724 9.98545 20.916C9.82554 21.1244 9.70826 21.3623 9.64032 21.6161C9.57237 21.8699 9.55509 22.1345 9.58945 22.395C9.64145 22.789 9.87445 23.193 10.3395 24C10.8065 24.807 11.0395 25.21 11.3545 25.453C11.5629 25.6129 11.8008 25.7302 12.0546 25.7981C12.3083 25.8661 12.573 25.8834 12.8335 25.849C13.0735 25.817 13.3165 25.719 13.6525 25.541C13.8929 25.4094 14.1629 25.3411 14.437 25.3425C14.7111 25.3439 14.9803 25.415 15.2195 25.549C15.7025 25.829 15.9895 26.344 16.0095 26.902C16.0235 27.282 16.0595 27.542 16.1525 27.765C16.253 28.0078 16.4003 28.2284 16.5862 28.4143C16.772 28.6001 16.9926 28.7475 17.2355 28.848C17.6025 29 18.0685 29 19.0005 29C19.9325 29 20.3985 29 20.7655 28.848C21.0083 28.7475 21.2289 28.6001 21.4147 28.4143C21.6006 28.2284 21.7479 28.0078 21.8484 27.765C21.9404 27.542 21.9775 27.282 21.9915 26.902C22.0115 26.344 22.2985 25.828 22.7815 25.549C23.0206 25.415 23.2898 25.3439 23.5639 25.3425C23.838 25.3411 24.108 25.4094 24.3484 25.541C24.6844 25.719 24.9274 25.817 25.1674 25.849C25.4279 25.8834 25.6926 25.8661 25.9463 25.7981C26.2001 25.7302 26.438 25.6129 26.6465 25.453C26.9615 25.211 27.1944 24.807 27.6604 24C28.1264 23.193 28.3604 22.79 28.4114 22.395C28.4458 22.1345 28.4285 21.8699 28.3606 21.6161C28.2926 21.3623 28.1754 21.1244 28.0154 20.916C27.8674 20.724 27.6605 20.563 27.3395 20.361C27.1052 20.2186 26.911 20.019 26.775 19.7809C26.6391 19.5428 26.566 19.2741 26.5625 19C26.5625 18.442 26.8665 17.936 27.3395 17.64C27.6605 17.437 27.8684 17.276 28.0154 17.084C28.1754 16.8756 28.2926 16.6377 28.3606 16.3839C28.4285 16.1301 28.4458 15.8655 28.4114 15.605C28.3594 15.211 28.1264 14.807 27.6614 14C27.1944 13.193 26.9615 12.79 26.6465 12.547C26.438 12.3871 26.2001 12.2698 25.9463 12.2019C25.6926 12.1339 25.4279 12.1166 25.1674 12.151C24.9274 12.183 24.6845 12.281 24.3475 12.459C24.1071 12.5904 23.8373 12.6586 23.5634 12.6572C23.2895 12.6558 23.0204 12.5849 22.7815 12.451C22.5459 12.3109 22.3498 12.1132 22.2116 11.8766C22.0734 11.6399 21.9977 11.372 21.9915 11.098C21.9775 10.718 21.9414 10.458 21.8484 10.235C21.7479 9.99218 21.6006 9.77155 21.4147 9.58572C21.2289 9.3999 21.0083 9.25251 20.7655 9.152Z" stroke="white" stroke-width="1.5"/>
        </svg>


      </button>

      {/* Log Out button (bottom right) */}
      <button
        className="absolute bottom-12 right-2 bg-[#23262F] hover:bg-[#393C44] transition-colors rounded-2xl flex items-center justify-center shadow-lg z-50"
        aria-label="Log Out"
      >

        <svg width="38" height="38" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover:fill-[#393C44]">
          <path d="M12.4993 3.38477C12.7065 3.38477 12.9053 3.46708 13.0518 3.61359C13.1983 3.7601 13.2806 3.95882 13.2806 4.16602C13.2806 4.37322 13.1983 4.57193 13.0518 4.71844C12.9053 4.86496 12.7065 4.94727 12.4993 4.94727C10.4964 4.94727 8.57551 5.74293 7.15922 7.15922C5.74293 8.57551 4.94727 10.4964 4.94727 12.4993C4.94727 14.5023 5.74293 16.4232 7.15922 17.8395C8.57551 19.2558 10.4964 20.0514 12.4993 20.0514C12.7065 20.0514 12.9053 20.1337 13.0518 20.2803C13.1983 20.4268 13.2806 20.6255 13.2806 20.8327C13.2806 21.0399 13.1983 21.2386 13.0518 21.3851C12.9053 21.5316 12.7065 21.6139 12.4993 21.6139C10.082 21.6139 7.76368 20.6537 6.05437 18.9443C4.34505 17.235 3.38477 14.9167 3.38477 12.4993C3.38477 10.082 4.34505 7.76368 6.05437 6.05437C7.76368 4.34505 10.082 3.38477 12.4993 3.38477Z" fill="#E30B5C"/>
          <path d="M17.1556 9.92713C17.0176 9.77903 16.9425 9.58315 16.946 9.38075C16.9496 9.17835 17.0316 8.98524 17.1747 8.84211C17.3179 8.69897 17.511 8.61697 17.7134 8.6134C17.9158 8.60983 18.1117 8.68496 18.2598 8.82296L21.3848 11.948C21.5311 12.0944 21.6132 12.293 21.6132 12.5C21.6132 12.7071 21.5311 12.9056 21.3848 13.0521L18.2598 16.1771C18.1882 16.2539 18.102 16.3155 18.0062 16.3582C17.9103 16.4008 17.8069 16.4238 17.702 16.4257C17.5971 16.4275 17.4929 16.4082 17.3956 16.3689C17.2983 16.3296 17.21 16.2711 17.1358 16.197C17.0616 16.1228 17.0031 16.0344 16.9638 15.9371C16.9245 15.8398 16.9052 15.7356 16.9071 15.6308C16.9089 15.5259 16.9319 15.4224 16.9746 15.3266C17.0173 15.2307 17.0788 15.1445 17.1556 15.073L18.9473 13.2813H10.416C10.2088 13.2813 10.0101 13.199 9.86359 13.0525C9.71708 12.906 9.63477 12.7072 9.63477 12.5C9.63477 12.2928 9.71708 12.0941 9.86359 11.9476C10.0101 11.8011 10.2088 11.7188 10.416 11.7188H18.9473L17.1556 9.92713Z" fill="#E30B5C"/>
        </svg>

      </button>
    </div>
  );
};

export default Dashboard;