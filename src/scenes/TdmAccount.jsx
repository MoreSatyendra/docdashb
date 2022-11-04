import React from 'react'
import { Box } from "@mui/material";
import Header from "../components/Header";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from 'react-router-dom';
const TdmAccount = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full pt-[30px] flex flex-col">
        <span className="text-5xl font-sans text-baby_light_blue ml-[180px]  font-bold tracking-wide">TDM Accounts</span>
        <div className="ml-[160px] flex flex-wrap w-[90%]  h-[89%] p-5 pt-10 gap-x-10 mt-6">
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm1")}>
                <span className="text-4xl font-bold tracking-wider" >TDM 1</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm2")}>
                <span className="text-4xl font-bold tracking-wider">TDM 2</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm3")}>
                <span className="text-4xl font-bold tracking-wider">TDM 3</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm4")}>
                <span className="text-4xl font-bold tracking-wider">TDM 4</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm5")}>
                <span className="text-4xl font-bold tracking-wider">TDM 5</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm6")}>
                <span className="text-4xl font-bold tracking-wider">TDM 6</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm7")}>
                <span className="text-4xl font-bold tracking-wider">TDM 7</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm8")}>
                <span className="text-4xl font-bold tracking-wider">TDM 8</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl  duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white flex items-center justify-center bg-slate-700" onClick={()=>navigate("/TdmAccount/Tdm9")}>
                <span className="text-4xl font-bold tracking-wider">TDM 9</span>
            </div>
            <div className="w-1/5 h-[170px] rounded-2xl   flex items-center justify-center ">
                <div className="rounded-full h-20 w-20 bg-slate-600 flex items-center justify-center duration-300 hover:scale-105 cursor-pointer
              shadow-[0px_0px_12px_-5px_rgba(0,0,0,0.3)] shadow-white
                hover:shadow-[0px_0px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-white" >
                    <AddOutlinedIcon fontSize="large"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TdmAccount