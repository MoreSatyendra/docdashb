import React from 'react'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate } from 'react-router-dom';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';

import doct from "../assets/doct.png"

const Sidebar = ({ sidebarComp, setsidebarComp }) => {
  const navigate = useNavigate()
  return (
    <div className="h-full w-[15%] shadow-lg relative text-baby_gray  bg-white ">
      <div className='h-[12%]  flex justify-center items-center space-x-3 cursor-pointer ' onClick={() => navigate("/")}>
        <span className="text-3xl font-bold font-dancing text-blue-900">Bridge Health<span className="text-blue-900">Care</span></span>
      </div>
      <div className="w-full h-[20%]  flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-40 h-40 rounded-full object-cover border-2 border-baby_blue"/>
        <span className="font-dancing font-semibold mt-2"><span className="text-baby_blue_links font-bold"></span> <span className="text-baby_blue_links font-bold text-xl">Divyanshi Mehra</span></span>
      </div>
      <div className="mt-10 h-[54%] flex flex-col items-center py-6 space-y-7 text-sm">
        <div className="flex flex-col text-gray-800">
          {
            sidebarComp === "Profile" ? <span className="flex items-center space-x-5   cursor-pointer bg-baby_blue text-white w-[160px] p-1 rounded-lg" onClick={() => setsidebarComp("Profile")}><PermIdentityOutlinedIcon className="" /> <span>Profile</span></span> : <span className="flex items-center space-x-5   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px] p-1 rounded-lg" onClick={() => setsidebarComp("Profile")}><PermIdentityOutlinedIcon className="" /> <span>Profile</span></span>
          }
          {
            sidebarComp === "Medical Records" ? <span className="flex items-center space-x-5   cursor-pointer bg-baby_blue text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Medical Records")}><TextSnippetOutlinedIcon className=" " /><span>Medical Records</span></span> : <span className="flex items-center space-x-5   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Medical Records")}><TextSnippetOutlinedIcon className=" " /><span>Medical Records</span></span>
          }
          {
            sidebarComp === "Patient History" ? <span className="flex items-center space-x-5   cursor-pointer bg-baby_blue text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Patient History")}><HistoryOutlinedIcon className=" " /><span>Patient History</span></span> : <span className="flex items-center space-x-5   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Patient History")}><HistoryOutlinedIcon className=" " /><span>Patient History</span></span>
          }
          {
            sidebarComp === "Symptoms" ? <span className="flex items-center space-x-5   cursor-pointer bg-baby_blue text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Symptoms")}><CoronavirusOutlinedIcon className=" " /><span>Symptoms</span></span>
              :
              <span className="flex items-center space-x-5   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px] p-1 rounded-lg  mt-2" onClick={() => setsidebarComp("Symptoms")}><CoronavirusOutlinedIcon className=" " /><span>Symptoms</span></span>

          }
          {
            sidebarComp === "Stethoscope" ? <span className="flex items-center space-x-6   cursor-pointer  bg-baby_blue text-white w-[160px]  rounded-lg  mt-2 pl-1 py-1" onClick={() => setsidebarComp("Stethoscope")}>
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" className="h-6 hover:fill-white"><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M49.93,4.3h4.15a1,1,0,0,1,1,1V26.77a7.41,7.41,0,0,1-7.41,7.41H38.8a7.41,7.41,0,0,1-7.41-7.41V5.3a1,1,0,0,1,1-1h4.15" /><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M31.39 25.71v1.06a7.41 7.41 0 0 0 7.41 7.41h8.87a7.41 7.41 0 0 0 7.41-7.41V25.71zM14.42 34.81V45.29A14.41 14.41 0 0 0 28.83 59.7h0A14.41 14.41 0 0 0 43.24 45.29V40" /><circle cx="14.42" cy="29.31" r="5.5" fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.24,40h0a3.85,3.85,0,0,1-3.8-3.2L39,34.18h8.5L47,36.84A3.84,3.84,0,0,1,43.24,40Z" />
              </svg>
              <span>Stethoscope</span>
            </span> : <span className="flex items-center space-x-6   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px]  rounded-lg  mt-2 pl-1 py-1" onClick={() => setsidebarComp("Stethoscope")}>
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" className="h-6 group"><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M49.93,4.3h4.15a1,1,0,0,1,1,1V26.77a7.41,7.41,0,0,1-7.41,7.41H38.8a7.41,7.41,0,0,1-7.41-7.41V5.3a1,1,0,0,1,1-1h4.15" /><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M31.39 25.71v1.06a7.41 7.41 0 0 0 7.41 7.41h8.87a7.41 7.41 0 0 0 7.41-7.41V25.71zM14.42 34.81V45.29A14.41 14.41 0 0 0 28.83 59.7h0A14.41 14.41 0 0 0 43.24 45.29V40" /><circle cx="14.42" cy="29.31" r="5.5" fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><path fill="none" stroke="#222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.24,40h0a3.85,3.85,0,0,1-3.8-3.2L39,34.18h8.5L47,36.84A3.84,3.84,0,0,1,43.24,40Z" />
              </svg>
              <span>Stethoscope</span>
            </span>
          }
          {
            sidebarComp === "Live Parameter" ? <span className="flex items-center space-x-5   cursor-pointer bg-baby_blue text-white w-[160px] p-1 rounded-lg mt-2" onClick={() => setsidebarComp("Live Parameter")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6"><rect width="6" height="6" x="2" y="6" fill="#464646" rx="2" /><rect width="6" height="6" x="9" y="12" fill="#464646" rx="2" /><rect width="6" height="6" x="16" y="7" fill="#464646" rx="2" /><path fill="#464646" d="M4 2h2v2H4zM4 14h2v8H4zM11 20h2v2h-2zM11 2h2v8h-2zM18 2h2v3h-2zM18 15h2v7h-2z" /></svg>
              <span>Live Parameter</span></span> : <span className="flex items-center space-x-5   cursor-pointer hover:bg-baby_blue hover:text-white w-[160px] p-1 rounded-lg mt-2" onClick={() => setsidebarComp("Live Parameter")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6"><rect width="6" height="6" x="2" y="6" fill="#464646" rx="2" /><rect width="6" height="6" x="9" y="12" fill="#464646" rx="2" /><rect width="6" height="6" x="16" y="7" fill="#464646" rx="2" /><path fill="#464646" d="M4 2h2v2H4zM4 14h2v8H4zM11 20h2v2h-2zM11 2h2v8h-2zM18 2h2v3h-2zM18 15h2v7h-2z" /></svg>
              <span>Live Parameter</span>
              </span>
          }
        </div>
      </div>
      <div className="mx-auto w-2/5 h-8 flex items-center justify-center  hover:scale-105 cursor-pointer duration-300 active:scale-90 text-baby_blue_bg bg-baby_blue  rounded-md px-20 hover:text-md hover:bg-baby_blue_links shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] shadow-baby_blue_links">Logout</div>
    </div>
  )
}
export default Sidebar