import React from 'react'
import heart from "../../assets/heart.svg"
import blood from "../../assets/blood.svg"
import weight from "../../assets/weight.svg"
import height from "../../assets/height.svg"
import temperature from "../../assets/temperature.svg"
import glucometer from "../../assets/glucometer.svg"
import spo2 from "../../assets/spo2.png"
import Ecg from "../../components/Ecg"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import ElderlyWomanOutlinedIcon from '@mui/icons-material/ElderlyWomanOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
const Profile = () => {
  const user_data = [
    {
      x: "Phone Number",
      y: "96253368070",
      z: <LocalPhoneOutlinedIcon fontSize="small"/>
    },
    {
      x: "Email",
      y: "divyanshi@gmail.com",
      z: <EmailOutlinedIcon fontSize="small"/>
    },
    {
      x: "Registered Date",
      y: "21 / 01 / 22",
      z: <EventOutlinedIcon fontSize="small"/>
    },
    {
      x: "ZIP Code",
      y: "121002",
      z: <NearMeOutlinedIcon fontSize="small"/>
    },
    {
      x: "Age", 
      y: "86",
      z: <Person2OutlinedIcon fontSize="small"/>
    },
    {
      x: "Gender",
      y: "Female",
      z: <ElderlyWomanOutlinedIcon fontSize="small"/>
    },
    {
      x: "State",
      y: "Uttarakhand",
      z: <LocationOnOutlinedIcon fontSize="small"/>
    }, {
      x: "Address",
      y: "R-39 / Yuho street",
      z: <HomeOutlinedIcon fontSize="small"/>
    },
  ]
  return (
    <div className="w-[60%] h-full flex flex-col pl-3 pt-2 font-open_sans">
      <div className="bg-white shadow-2xl rounded-2xl w-[99%] h-[99%]  pt-9  p-10 flex flex-col">
        <div className="flex h-32 items-center space-x-8">
          <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-lg object-cover h-16 w-16" />
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-2xl  text-baby_blue_links">Divyanshi Mehra</span>
            <span className="text-green-500 bg-green-100 rounded-xl w-24 text-md flex items-center justify-center space-x-3">
              <span className="w-2 h-2 bg-green-500 block rounded-2xl animate-pulse"></span>
              <span >active</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3  p-4 bg-baby_blue_bg rounded-2xl w-4/5 shadow-[0px_0px_12px_-2px_rgba(0,0,0,0.3)] shadow-baby_blue_links pl-9">
          {
            user_data.map((ele) => (
              <div className="flex  items-center space-x-9" key = {ele.x}>
                <span className="w-1/3 flex items-center space-x-2 text-gray-600 text-sm">
                  <span>{ele.z}</span>
                  <span>
                    {ele.x}
                  </span>
                </span>
                <span className="w-1/3 text-gray-900 tracking-wide font-medium">
                  {ele.y}
                </span>
              </div>
            ))
          }
        </div>
        <div className="flex flex-grow  pt-8 pl-3 flex-col space-y-8">
            <span className="text-2xl tracking-wide font-bold text-baby_blue_links">Next Appointments</span>
            <div className="flex  space-x-8">
              <div className="flex flex-col bg-green-100 p-6 rounded-xl space-y-2 shadow-2xl hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-green-500 pl-9 cursor-pointer duration-200">
                <span className="text-2xl font-bold text-green-900">31 October</span>
                <span className="text-md text-green-700">12:40 PM</span>
              </div>
              <div className="flex flex-col bg-purple-100 p-6 rounded-xl space-y-2 shadow-2xl hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-purple-500 cursor-pointer duration-200 pl-9">
                <span className="text-2xl font-bold text-purple-900">1 November</span>
                <span className="text-md text-purple-800">5:20 PM</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Profile