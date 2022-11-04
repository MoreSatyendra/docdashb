import React from 'react'
import { Box } from "@mui/material";
import Header from "../components/Header";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate, useParams } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import AccessibleRoundedIcon from '@mui/icons-material/AccessibleRounded';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import TdmChart from "../components/TdmChart"

const TdmInfo = () => {
    const navigate = useNavigate()
    const data = [
        {
            x: "Address",
            y: "HNO - 553 / Columbus Street",
            icons: <HomeRoundedIcon />
        },
        {
            x: "Number",
            y: "9625876807",
            icons: <CallRoundedIcon />
        },
        {
            x: "Email",
            y: "sonubatra@gmail.com",
            icons: <LocalPostOfficeRoundedIcon />
        },
        {
            x: "Whats App",
            y: "99813981374",
            icons: <HomeRoundedIcon />
        },
        {
            x: "Patients",
            y: "12",
            icons: <AccessibleRoundedIcon />
        },
        {
            x: "Today's Appointments",
            y: "3",
            icons: <GroupsSharpIcon />
        }
    ]

    const total_patients = [
        {
            "x": "Sunday",
            "y": 0
        },
        {
            "x": "Monday",
            "y": 172
        },
        {
            "x": "Tuesday",
            "y": 62
        },
        {
            "x": "Wednesday",
            "y": 132
        },
        {
            "x": "Thursday",
            "y": 42
        },
        {
            "x": "Friday",
            "y": 112
        },
        {
            "x": "Saturday",
            "y": 12
        }
    ]
    const params = useParams()
    return (
        <div className="w-full h-full pt-[30px] flex">
            <div className="w-1/2 h-full ">
                <span className="text-5xl font-sans text-baby_light_blue ml-[180px]  font-bold tracking-wide flex items-center">
                    <ArrowBackRoundedIcon fontSize="extraLarge" onClick={() => navigate("/TdmAccount")} className="cursor-pointer  duration-300 hover:scale-110 hover:text-emerald-400 " />
                    <span>{params.id}</span>
                </span>
                <div className="ml-[160px] flex flex-col w-[90%]  h-[89%] p-5 pt-10 mt-6">
                    <div className="flex space-x-3 p-3">
                        <img src="https://content.jdmagicbox.com/comp/mumbai/b8/022pxx22.xx22.180426135559.r9b8/catalogue/dr-swaroop-y-choudhari-andheri-east-mumbai-general-physician-doctors-b84a85hxge.jpg" alt="" className="w-32 h-32 rounded-2xl object-cover" />
                        <div className="flex flex-col space-y-1 ">
                            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-blue_purple_grad ">Sonu Batra</span>
                            <span className="text-4xl tracking-wider font-semibold">HR52-01</span>
                        </div>
                    </div>
                    <div className="mt-10 w-4/5 space-y-3 bg-gray-900 rounded-3xl shadow-2xl  p-6  ">
                        {
                            data.map((ele) => (
                                <div className="flex space-x-20" key={ele.x}>
                                    <span className="flex items-center w-1/3">
                                        <span className="text-gray-300">
                                            {ele.icons}
                                        </span>
                                        <span className="text-md text-gray-300">
                                            {ele.x}
                                        </span>
                                    </span>
                                    <span className="w-2/3 text-xl">
                                        {ele.y}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col font-sans">
                <div className="h-3/5 w-full flex flex-col space-y-5 pb-8">
                    <span className="text-5xl font-extrabold text-white">Total Patients Visited</span>
                    <div className="w-[97%] h-[96%] bg-white rounded-2xl overflow-hidden">
                        <TdmChart dataJson={total_patients} />
                    </div>
                </div>
                <div className="h-2/5 w-full flex flex-col">
                    <div className="h-3/5 w-full flex flex-col">
                        <div className="flex flex-wrap gap-x-5 p-8 gap-y-10">
                            <div className=' bg-gray-900  p-4 flex flex-col overflow-hidden rounded-2xl shadow-2xl w-[40%]'>
                                <div className="flex justify-between items-center ">
                                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-blue_purple_grad ">Patients Treated</span>
                                </div>
                                <h1 className="text-6xl text-center">350</h1>
                            </div>
                            <div className=' bg-gray-900  p-4 flex flex-col overflow-hidden rounded-2xl shadow-2xl w-[40%]'>
                                <div className="flex justify-between items-center ">
                                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-blue_purple_grad ">Working Hours</span>
                                </div>
                                <h1 className=" text-center flex items-center">
                                    <span className="text-6xl">
                                        28
                                    </span> <span className="text-3xl">Hrs/week</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TdmInfo