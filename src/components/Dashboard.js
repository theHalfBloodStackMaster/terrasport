import React, { useState } from 'react';
import {ReactComponent as SportKeyzIconSvg} from '..//svg_icons//sportskeyz_icon.svg'

function openLogoutPopup() 
{
  document.getElementById("logout-button").style.display = "flex"; // Or "block"
}

function closeLogoutPopup() 
{
  document.getElementById("logout-cancel").style.display = "none";
}


// Dashboard component: Main dashboard UI for the application
const Dashboard = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

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
        <div className="col-span-1 bg-[#0EA0FF] rounded-[24px] rounded-tl-[10rem] p-0 shadow-2xl relative overflow-hidden min-h-[160px] flex">
          {/* Admin info */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full">
            <h2 className="text-3xl text-white text-nowrap flex absolute start-20 top-8 z-10">Karan Admin</h2>
            <p className="text-xl text-white text-nowrap flex absolute start-28 top-16 z-10">No Notifications</p>
            <span class="flex z-0 absolute left-0 bottom-0">
              <SportKeyzIconSvg />
            </span>
          </div>
        </div>
        {/* Create Certificate Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg flex flex-col justify-center items-center min-h-[160px]">
          <h2 className="text-xl text-nowrap mb-8 text-center">Lets Create a Certificate</h2>
          <button className="bg-[#2DEBAE] text-black text-xs text-nowrap px-12 py-4 rounded-[20px] w-full max-w-xs cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
        {/* Member Requests Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg min-h-[160px] flex flex-col justify-center">
          <h2 className="text-2xl mb-2">Member Requests</h2>
          <p className="text-lg mb-2">No Request</p>
          <p className="text-gray-400 text-base">Once any request is received, it will reflect here</p>
        </div>
        {/* Upcoming Events Card */}
        <div className="col-span-1 bg-[#23262F] rounded-[24px] p-8 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl mb-2">Upcoming Events</h2>
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
                <div className="bg-[#FFA726] w-10 h-1 rounded-t-lg"></div>
              </div>
              {/* Bar: Members */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Members</span>
                <div className="bg-[#FF6F61] w-10 h-1 rounded-t-lg"></div>
              </div>
              {/* Bar: Coaches */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Coaches</span>
                <div className="bg-[#42A5F5] w-10 h-41 rounded-t-lg"></div>
              </div>
              {/* Bar: Events */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Events</span>
                <div className="bg-[#2563EB] w-10 h-1 rounded-t-lg"></div>
              </div>
              {/* Bar: Certificates */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Certificates</span>
                <div className="bg-[#B39DDB] w-10 h-1 rounded-t-lg"></div>
              </div>
              {/* Bar: Number of sports */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-base text-white mb-2">Number of sports</span>
                <div className="bg-[#B94DDB] w-10 h-1 rounded-t-lg"></div>
              </div>
            </div>
            {/* Members count overlay */}
            <div className="absolute top-0 right-0 mt-8 mr-8 bg-[#91A4F7] rounded-[10px] flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2"></span>
              <span className="text-xl text-white"></span>
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
        onClick={() => { setIsMenuOpen(!isMenuOpen); setIsSettingsOpen(false); setIsLogoutOpen(false); }}
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
        {/* Menu options overlay */}
        {isMenuOpen === true && (
          <div className="absolute justify-self-start bottom-32 left-15 bg-[#23262F] rounded-2xl shadow-lg p-4 z-50 w-48">
            {/* Creating menu options based on reference image */}
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                Super User
              </span>
            </button>
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4037_115360)">
                    <path d="M1.75 16.625C1.75 18.1125 2.8875 19.25 4.375 19.25H16.625C18.1125 19.25 19.25 18.1125 19.25 16.625V9.625H1.75V16.625ZM16.625 3.5H14.875V2.625C14.875 2.1 14.525 1.75 14 1.75C13.475 1.75 13.125 2.1 13.125 2.625V3.5H7.875V2.625C7.875 2.1 7.525 1.75 7 1.75C6.475 1.75 6.125 2.1 6.125 2.625V3.5H4.375C2.8875 3.5 1.75 4.6375 1.75 6.125V7.875H19.25V6.125C19.25 4.6375 18.1125 3.5 16.625 3.5Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4037_115360">
                      <rect width="21" height="21" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>Events
              </span>
            </button>
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0299 2.25H17.0612V1.59375C17.0608 1.24578 16.9224 0.912167 16.6763 0.666112C16.4303 0.420057 16.0967 0.281648 15.7487 0.28125H5.24869C4.90072 0.281648 4.56711 0.420057 4.32106 0.666112C4.075 0.912167 3.93659 1.24578 3.9362 1.59375V2.25H1.95703C1.60906 2.2504 1.27545 2.38881 1.02939 2.63486C0.783338 2.88092 0.644929 3.21453 0.644531 3.5625V4.875C0.645526 5.74494 0.991548 6.57896 1.60669 7.1941C2.22182 7.80923 3.05585 8.15525 3.92578 8.15625H4.25751C5.0485 10.612 7.22233 12.4503 9.84245 12.7158V14.7188H7.8737C7.69965 14.7188 7.53273 14.7879 7.40966 14.911C7.28659 15.034 7.21745 15.201 7.21745 15.375C7.21745 15.549 7.28659 15.716 7.40966 15.839C7.53273 15.9621 7.69965 16.0312 7.8737 16.0312H13.1237C13.2977 16.0312 13.4647 15.9621 13.5877 15.839C13.7108 15.716 13.7799 15.549 13.7799 15.375C13.7799 15.201 13.7108 15.034 13.5877 14.911C13.4647 14.7879 13.2977 14.7188 13.1237 14.7188H11.1549V12.7177C12.433 12.5884 13.6451 12.0875 14.6415 11.2768C15.6379 10.4662 16.3749 9.38126 16.7614 8.15625H17.0612C17.9311 8.15525 18.7652 7.80923 19.3803 7.1941C19.9954 6.57896 20.3414 5.74494 20.3424 4.875V3.5625C20.342 3.21453 20.2036 2.88092 19.9576 2.63486C19.7115 2.38881 19.3779 2.2504 19.0299 2.25ZM3.92578 6.84375C3.40382 6.84315 2.90341 6.63554 2.53432 6.26646C2.16524 5.89737 1.95763 5.39696 1.95703 4.875V3.5625H3.9362V6.11332C3.93654 6.35736 3.95021 6.6012 3.97713 6.84375H3.92578ZM19.0299 4.875C19.0293 5.39696 18.8217 5.89737 18.4527 6.26646C18.0836 6.63554 17.5832 6.84315 17.0612 6.84375H17.029C17.0504 6.62709 17.0611 6.40834 17.0612 6.1875V3.5625H19.0299V4.875Z" fill="white"/>
                </svg>Certificates
              </span>
            </button>
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73641 0.00404382C9.60915 0.0131312 9.48335 0.0358743 9.36134 0.0718502C9.21509 0.0718502 9.05669 0.135107 8.91584 0.207246C8.86094 0.207246 8.80559 0.225227 8.75159 0.297582H8.70479C8.57204 0.369721 8.43209 0.428429 8.30609 0.500784H8.23566C8.19899 0.572923 8.17806 0.586571 8.14184 0.658926C8.03924 0.731065 7.93394 0.717417 7.83719 0.861912C7.74944 0.934267 7.66169 1.01572 7.57911 1.08786C7.30079 1.37685 7.07241 1.65219 6.87577 2.01332C6.53759 2.51916 6.27862 3.16927 6.17219 3.81961H6.03157C5.68732 3.9641 5.59619 4.54663 5.82052 5.19675C5.95214 5.63023 6.18344 5.93287 6.40664 6.07736C6.70657 7.23331 7.33814 8.16354 8.16546 8.7413V9.39618L7.50891 9.96051L6.19559 10.6152C5.13494 11.121 4.0896 11.6223 3.03007 12.1279C2.44282 12.4169 2.20027 13.153 2.25607 13.731C2.28352 14.1643 2.12985 14.6656 2.53755 14.8824C2.92522 15.0991 3.4065 14.95 3.82725 14.95H12.7613C14.3138 14.95 15.8517 15.0224 17.4042 14.95C17.9077 14.95 18.0393 14.4578 17.9905 14.0243C17.9995 13.4464 18.0441 12.7874 17.5684 12.3537C17.1805 11.9925 16.6349 11.8524 16.1615 11.5634C15.4658 11.2744 14.7694 10.9042 14.0746 10.6152L12.7613 9.96051L12.1048 9.39618V8.7413C12.9325 8.16332 13.5641 7.2331 13.8636 6.07736C14.087 5.93287 14.2949 5.63023 14.4261 5.19675C14.6506 4.54663 14.5831 3.9641 14.2387 3.81961H14.098C13.9914 3.16927 13.7329 2.51916 13.3945 2.01332C13.1978 1.65219 12.9467 1.37663 12.6677 1.08764C12.5851 1.0155 12.5215 0.934267 12.433 0.861912H12.4096C12.1531 0.645279 11.8633 0.442077 11.5654 0.297582C11.4905 0.297582 11.4084 0.207246 11.331 0.207246C11.2763 0.207246 11.223 0.13944 11.1667 0.13944C10.9996 0.067301 10.8495 0.0763994 10.6744 0.00404382H10.1351C10.0024 0.00404382 9.86668 -0.00505478 9.73641 0.00404382ZM4.69484 3.09713C4.53667 3.09713 4.37534 3.10623 4.22594 3.14241C4.13842 3.16364 4.05225 3.19982 3.9681 3.23253C3.93547 3.24553 3.90622 3.26329 3.87427 3.27781C3.86077 3.28366 3.86392 3.29405 3.85087 3.30034C3.77145 3.33825 3.69112 3.36554 3.6162 3.4132C3.60585 3.4197 3.57975 3.42902 3.5694 3.43573C3.54735 3.45025 3.54397 3.46563 3.5226 3.48079C3.46117 3.52325 3.39232 3.56831 3.33495 3.61641C3.28252 3.6619 3.24337 3.72407 3.19432 3.77455C3.02827 3.93832 2.86582 4.11293 2.74882 4.31613C2.54671 4.65831 2.41157 5.03331 2.35012 5.42248C2.31934 5.41494 2.28708 5.41494 2.2563 5.42248C2.0511 5.4866 2.00542 5.86268 2.13907 6.25781C2.21737 6.48961 2.33437 6.67375 2.46735 6.77709C2.64577 7.4454 3.02985 8.00865 3.5226 8.35743V8.7413L3.1239 9.10264L2.3499 9.4863C1.71855 9.78764 1.08135 10.0881 0.450677 10.3897C0.101028 10.5924 -0.0281223 10.9861 0.00517762 11.3602C0.0213776 11.595 -0.0735721 11.9035 0.169427 12.0601C0.400052 12.1743 0.692552 12.1091 0.943201 12.1279H2.3031C2.43945 11.9559 2.61 11.7969 2.81902 11.6762L2.84242 11.6537H2.86582C3.92467 11.1533 4.97002 10.6425 6.03157 10.1412L7.25084 9.57664C7.18177 9.54349 7.10886 9.5188 7.03979 9.4863L6.26579 9.10264L5.86732 8.7413V8.35743C6.17917 8.13711 6.44264 7.81801 6.64132 7.4545C6.37357 7.03835 6.16792 6.5598 6.03157 6.05461C5.80499 5.83061 5.59259 5.58235 5.46862 5.21927C5.34127 4.8458 5.30482 4.45976 5.35162 4.13568C5.39279 3.84842 5.53612 3.57676 5.82052 3.43573C5.73659 3.38331 5.62769 3.34258 5.53904 3.30034C5.49427 3.27911 5.46772 3.25051 5.42182 3.23253C5.38919 3.21975 5.36107 3.22105 5.32799 3.21C5.22832 3.17686 5.12684 3.13678 5.02312 3.11966C5.01524 3.11815 5.00782 3.12118 4.99972 3.11966C4.8989 3.10422 4.79694 3.09668 4.69484 3.09713Z" fill="white"/>
                </svg>Members
              </span>
            </button>
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.96875 14.4375V5.90625C1.62065 5.90625 1.28681 6.04453 1.04067 6.29067C0.794531 6.53681 0.65625 6.87065 0.65625 7.21875V16.4062C0.65625 16.7543 0.794531 17.0882 1.04067 17.3343C1.28681 17.5805 1.62065 17.7188 1.96875 17.7188H8.12437C6.89512 16.8648 5.43427 16.4068 3.9375 16.4062C3.41535 16.4062 2.9146 16.1988 2.54538 15.8296C2.17617 15.4604 1.96875 14.9596 1.96875 14.4375ZM19.0312 5.90625V14.4375C19.0312 14.9596 18.8238 15.4604 18.4546 15.8296C18.0854 16.1988 17.5846 16.4062 17.0625 16.4062C15.5657 16.4068 14.1049 16.8648 12.8756 17.7188H19.0312C19.3793 17.7188 19.7132 17.5805 19.9593 17.3343C20.2055 17.0882 20.3438 16.7543 20.3438 16.4062V7.21875C20.3438 6.87065 20.2055 6.53681 19.9593 6.29067C19.7132 6.04453 19.3793 5.90625 19.0312 5.90625Z" fill="white"/>
                  <path d="M3.9375 3.28125C3.76345 3.28125 3.59653 3.35039 3.47346 3.47346C3.35039 3.59653 3.28125 3.76345 3.28125 3.9375V14.4375C3.28125 14.6115 3.35039 14.7785 3.47346 14.9015C3.59653 15.0246 3.76345 15.0938 3.9375 15.0938C5.91178 15.0958 7.82713 15.7666 9.37125 16.9969L9.84375 17.3775V3.39937C9.63331 3.32297 9.41138 3.28302 9.1875 3.28125H3.9375ZM17.7188 14.4375V3.9375C17.7188 3.76345 17.6496 3.59653 17.5265 3.47346C17.4035 3.35039 17.2365 3.28125 17.0625 3.28125H11.8125C11.5886 3.28302 11.3667 3.32297 11.1562 3.39937V17.3775L11.6287 16.9969C13.1729 15.7666 15.0882 15.0958 17.0625 15.0938C17.2365 15.0938 17.4035 15.0246 17.5265 14.9015C17.6496 14.7785 17.7188 14.6115 17.7188 14.4375Z" fill="white"/>
                </svg>Directory
              </span>
            </button>
          </div>
        )}
      {/* Settings button (bottom right) */}
      <button
        className="absolute bottom-12 right-14 bg-[#23262F] transition-colors rounded-2xl flex items-center justify-center shadow-lg z-50"
        aria-label="Settings"
        onClick={() => {setIsSettingsOpen(!isSettingsOpen); setIsMenuOpen(false); setIsLogoutOpen(false);}}
      >
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="19" fill="#23282E" class="hover:fill-[#393C44]"/>
          <path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" fill="white" stroke="white" stroke-width="1.5"/>
          <path d="M20.7655 9.152C20.3985 9 19.9325 9 19.0005 9C18.0685 9 17.6025 9 17.2355 9.152C16.9926 9.25251 16.772 9.3999 16.5862 9.58572C16.4003 9.77155 16.253 9.99218 16.1525 10.235C16.0605 10.458 16.0235 10.719 16.0095 11.098C16.0032 11.372 15.9275 11.6399 15.7893 11.8766C15.6511 12.1132 15.455 12.3109 15.2195 12.451C14.9803 12.585 14.7111 12.6561 14.437 12.6575C14.1629 12.6589 13.8929 12.5906 13.6525 12.459C13.3165 12.281 13.0735 12.183 12.8325 12.151C12.3068 12.0819 11.7752 12.2243 11.3545 12.547C11.0405 12.79 10.8065 13.193 10.3405 14C9.87445 14.807 9.64045 15.21 9.58945 15.605C9.55509 15.8655 9.57237 16.1301 9.64032 16.3839C9.70826 16.6377 9.82554 16.8756 9.98545 17.084C10.1335 17.276 10.3405 17.437 10.6615 17.639C11.1345 17.936 11.4385 18.442 11.4385 19C11.4385 19.558 11.1345 20.064 10.6615 20.36C10.3405 20.563 10.1325 20.724 9.98545 20.916C9.82554 21.1244 9.70826 21.3623 9.64032 21.6161C9.57237 21.8699 9.55509 22.1345 9.58945 22.395C9.64145 22.789 9.87445 23.193 10.3395 24C10.8065 24.807 11.0395 25.21 11.3545 25.453C11.5629 25.6129 11.8008 25.7302 12.0546 25.7981C12.3083 25.8661 12.573 25.8834 12.8335 25.849C13.0735 25.817 13.3165 25.719 13.6525 25.541C13.8929 25.4094 14.1629 25.3411 14.437 25.3425C14.7111 25.3439 14.9803 25.415 15.2195 25.549C15.7025 25.829 15.9895 26.344 16.0095 26.902C16.0235 27.282 16.0595 27.542 16.1525 27.765C16.253 28.0078 16.4003 28.2284 16.5862 28.4143C16.772 28.6001 16.9926 28.7475 17.2355 28.848C17.6025 29 18.0685 29 19.0005 29C19.9325 29 20.3985 29 20.7655 28.848C21.0083 28.7475 21.2289 28.6001 21.4147 28.4143C21.6006 28.2284 21.7479 28.0078 21.8484 27.765C21.9404 27.542 21.9775 27.282 21.9915 26.902C22.0115 26.344 22.2985 25.828 22.7815 25.549C23.0206 25.415 23.2898 25.3439 23.5639 25.3425C23.838 25.3411 24.108 25.4094 24.3484 25.541C24.6844 25.719 24.9274 25.817 25.1674 25.849C25.4279 25.8834 25.6926 25.8661 25.9463 25.7981C26.2001 25.7302 26.438 25.6129 26.6465 25.453C26.9615 25.211 27.1944 24.807 27.6604 24C28.1264 23.193 28.3604 22.79 28.4114 22.395C28.4458 22.1345 28.4285 21.8699 28.3606 21.6161C28.2926 21.3623 28.1754 21.1244 28.0154 20.916C27.8674 20.724 27.6605 20.563 27.3395 20.361C27.1052 20.2186 26.911 20.019 26.775 19.7809C26.6391 19.5428 26.566 19.2741 26.5625 19C26.5625 18.442 26.8665 17.936 27.3395 17.64C27.6605 17.437 27.8684 17.276 28.0154 17.084C28.1754 16.8756 28.2926 16.6377 28.3606 16.3839C28.4285 16.1301 28.4458 15.8655 28.4114 15.605C28.3594 15.211 28.1264 14.807 27.6614 14C27.1944 13.193 26.9615 12.79 26.6465 12.547C26.438 12.3871 26.2001 12.2698 25.9463 12.2019C25.6926 12.1339 25.4279 12.1166 25.1674 12.151C24.9274 12.183 24.6845 12.281 24.3475 12.459C24.1071 12.5904 23.8373 12.6586 23.5634 12.6572C23.2895 12.6558 23.0204 12.5849 22.7815 12.451C22.5459 12.3109 22.3498 12.1132 22.2116 11.8766C22.0734 11.6399 21.9977 11.372 21.9915 11.098C21.9775 10.718 21.9414 10.458 21.8484 10.235C21.7479 9.99218 21.6006 9.77155 21.4147 9.58572C21.2289 9.3999 21.0083 9.25251 20.7655 9.152Z" stroke="white" stroke-width="1.5"/>
        </svg>
        {/* Setting button Menu Card */}
        <button>
      {isSettingsOpen === true && (
          <div className="absolute justify-self-start bottom-14 right-0 bg-[#23262F] rounded-2xl shadow-lg p-4 z-50 w-48">
            {/* Creating menu options based on reference image */}
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                Profile
              </span>
            </button>
            <button className="w-full text-white hover:bg-[#16CC8A] text-left py-2 rounded">
              <span class="flex items-center gap-2">
                Language
              </span>
            </button>
          </div>
        )}
        </button>


      </button>

      {/* Log Out button (bottom right) */}
      <button id="logout-button"
        className="absolute bottom-12 right-2 bg-[#23262F] hover:bg-[#393C44] transition-colors rounded-2xl flex items-center justify-center shadow-lg z-50"
        aria-label="Log Out"
        onClick={() => { setIsLogoutOpen(!isLogoutOpen); setIsMenuOpen(false); setIsSettingsOpen(false); openLogoutPopup(); }}
      >

        <svg width="38" height="38" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover:fill-[#393C44]">
          <path d="M12.4993 3.38477C12.7065 3.38477 12.9053 3.46708 13.0518 3.61359C13.1983 3.7601 13.2806 3.95882 13.2806 4.16602C13.2806 4.37322 13.1983 4.57193 13.0518 4.71844C12.9053 4.86496 12.7065 4.94727 12.4993 4.94727C10.4964 4.94727 8.57551 5.74293 7.15922 7.15922C5.74293 8.57551 4.94727 10.4964 4.94727 12.4993C4.94727 14.5023 5.74293 16.4232 7.15922 17.8395C8.57551 19.2558 10.4964 20.0514 12.4993 20.0514C12.7065 20.0514 12.9053 20.1337 13.0518 20.2803C13.1983 20.4268 13.2806 20.6255 13.2806 20.8327C13.2806 21.0399 13.1983 21.2386 13.0518 21.3851C12.9053 21.5316 12.7065 21.6139 12.4993 21.6139C10.082 21.6139 7.76368 20.6537 6.05437 18.9443C4.34505 17.235 3.38477 14.9167 3.38477 12.4993C3.38477 10.082 4.34505 7.76368 6.05437 6.05437C7.76368 4.34505 10.082 3.38477 12.4993 3.38477Z" fill="#E30B5C"/>
          <path d="M17.1556 9.92713C17.0176 9.77903 16.9425 9.58315 16.946 9.38075C16.9496 9.17835 17.0316 8.98524 17.1747 8.84211C17.3179 8.69897 17.511 8.61697 17.7134 8.6134C17.9158 8.60983 18.1117 8.68496 18.2598 8.82296L21.3848 11.948C21.5311 12.0944 21.6132 12.293 21.6132 12.5C21.6132 12.7071 21.5311 12.9056 21.3848 13.0521L18.2598 16.1771C18.1882 16.2539 18.102 16.3155 18.0062 16.3582C17.9103 16.4008 17.8069 16.4238 17.702 16.4257C17.5971 16.4275 17.4929 16.4082 17.3956 16.3689C17.2983 16.3296 17.21 16.2711 17.1358 16.197C17.0616 16.1228 17.0031 16.0344 16.9638 15.9371C16.9245 15.8398 16.9052 15.7356 16.9071 15.6308C16.9089 15.5259 16.9319 15.4224 16.9746 15.3266C17.0173 15.2307 17.0788 15.1445 17.1556 15.073L18.9473 13.2813H10.416C10.2088 13.2813 10.0101 13.199 9.86359 13.0525C9.71708 12.906 9.63477 12.7072 9.63477 12.5C9.63477 12.2928 9.71708 12.0941 9.86359 11.9476C10.0101 11.8011 10.2088 11.7188 10.416 11.7188H18.9473L17.1556 9.92713Z" fill="#E30B5C"/>
        </svg>
        {/* Logout Card */}
        {/* Open logout card on complete screen */}
        <button>
          {isLogoutOpen === true && (
          <div className="bg-[#23262F] rounded-2xl shadow-lg p-4 z-50 w-48">
            {/* Creating menu options based on reference image */}
            <h2>Logout</h2>
            <p>Are you sure you want to Logout?</p>
            <button class="bg-[#19191A} text-white hover:bg-[#16CC8A] px-4 py-2 rounded mt-2 flex items-center justify-center w-auto"
            onClick={() => { setIsLogoutOpen(false); setIsMenuOpen(false); setIsSettingsOpen(false);  }}
            >
              Logout
            </button>
            <button id="logout-cancel" 
            class="bg-rose-500 hover:bg-pink-700 text-white px-4 py-2 rounded mt-2 flex items-center justify-center w-auto"
            onClick={() => { setIsLogoutOpen(false); setIsMenuOpen(false); setIsSettingsOpen(false); closeLogoutPopup(); }}
            >
              Cancel
            </button>
                 
          </div>
        )}
        </button>

      </button>
    </div>
  );
};

export default Dashboard;