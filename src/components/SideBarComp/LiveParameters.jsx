import React from 'react'
import heart from "../../assets/heart.svg"
import blood from "../../assets/blood.svg"
import weight from "../../assets/weight.svg"
import height from "../../assets/height.svg"
import temperature from "../../assets/temperature.svg"
import glucometer from "../../assets/glucometer.svg"
import spo2 from "../../assets/spo2.png"
import Ecg from "../../components/Ecg"
const LiveParameters = () => {
  return (
      <div className="w-[60%] h-full flex flex-col ">
        <div className="w-full h-1/2 p-6">
          <span className="font-roman font-bold text-3xl text-gray-900 ml-9 tracking-wide ">Heart Ecg</span>
          <Ecg />
        </div>
        <div className="w-full h-1/2 flex flex-wrap   p-6 gap-x-6">
          <div className="flex flex-col bg-red-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-hex(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={blood} alt="" className="h-16 w-16" />
            <span className="text-red-500">Blood Pressure</span>
            <span className="text-red-800 font-bold">110/70</span>
          </div>
          <div className="flex flex-col bg-blue-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={heart} alt="" className="h-16 w-16" />
            <span className="text-blue-500">Heart</span>
            <span className="text-blue-800 font-bold">85 Bmps</span>
          </div>
          <div className="flex flex-col bg-pink-100 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={spo2} alt="" className="h-16 w-16" />
            <span className="text-pink-700">SpO<span className="text-xs top-1 relative">2</span></span>
            <span className="text-pink-800 font-bold">95%</span>
          </div>
          <div className="flex flex-col bg-cyan-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={weight} alt="" className="h-16 w-16" />
            <span className="text-cyan-500  mt-1">Weight</span>
            <span className="text-cyan-800 font-bold">65 Kg</span>
          </div>
          <div className="flex flex-col bg-lime-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={height} alt="" className="h-16 w-16" />
            <span className="text-lime-500">Height</span>
            <span className="text-lime-800 font-bold">170.18 Cm</span>
          </div>
          <div className="flex flex-col bg-emerald-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={glucometer} alt="" className="h-16 w-16" />
            <span className="text-emerald-500">Sugar</span>
            <span className="text-emerald-800 font-bold">99 mg/dL</span>
          </div>
          <div className="flex flex-col bg-rose-50 rounded-3xl w-1/5 h-2/5 px-5 py-3 shadow-xl hover:scale-105 duration-200 cursor-pointer hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
            <img src={temperature} alt="" className="h-16 w-16" />
            <span className="text-rose-500">Temperature</span>
            <span className="text-rose-800 font-bold">85°C</span>
          </div>
        </div>
      </div>
    )
  
}

export default LiveParameters