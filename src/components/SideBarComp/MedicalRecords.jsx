import React from 'react'
import MedicalRecordDropDown from "../DropDownComp/MedicalRecordDropDown"

const MedicalRecords = ({records , setrecords , closeRecords  , openRecords }) => {
  const Records_Data = [
    "Record 1",
    "Record 2",
    "Record 3",
    "Record 4",
    "Record 5",
    "Record 6",
    "Record 7",
    "Record 8",
    "Record 9",
    "Record 10",
    "Record 11",
    "Record 12",
  ]
  return (
    <div className="w-[60%] h-full flex flex-col relative ">
        <MedicalRecordDropDown/>
        <div className="w-full h-[90%] absolute bottom-0  flex flex-wrap  gap-x-4 pl-10 py-5  gap-y-4 
        scrollbar-thin scrollbar-thumb-baby_light_blue scrollbar-track-baby_blue_bg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {
              Records_Data.map((ele)=>(
                <div key={ele} className="shadow-2xl w-[30%] h-1/4 text-gray-900 rounded-xl flex items-center justify-center hover:scale-105 duration-200 cursor-pointer bg-white hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links" onClick={()=>openRecords(true)}>
                  <span>{ele}</span>
                </div>
              ))
            }
        </div>
    </div>
  )
}
export default MedicalRecords