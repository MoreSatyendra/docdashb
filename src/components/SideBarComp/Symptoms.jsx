import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from "../Loader"
import ReactReadMoreReadLess from "react-read-more-read-less";
const Symptoms = () => {
  const [symptoms, setSymptoms] = useState([])
  const [showLoader, setshowLoader] = useState(true)
  useEffect(() => {
    setshowLoader(true)
    axios.get("https://bhc-web-backend.vercel.app/api/global/getsymptomdata").then((res) => {
      setSymptoms(res.data)
      setshowLoader(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (<>
    {
      showLoader=== true ? <div className="w-[60%] h-full">
        <Loader />
      </div> : <div className="w-[60%] h-full flex flex-wrap text-gray-900 gap-x-8 pl-10 py-5  gap-y-8 
      scrollbar-thin scrollbar-thumb-baby_light_blue scrollbar-track-baby_blue_bg overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full  ">
        {
          symptoms.map((ele) => (
            <div key={ele.DiseaseId} className="shadow-2xl w-[30%]  rounded-xl flex flex-col hover:scale-105 duration-200 cursor-pointer bg-white p-7 space-y-5 hover:shadow-[0px_0px_15px_-2px_rgba(0,0,0,0.3)] hover:shadow-baby_blue_links">
              <span className="text-xl font-bold text-baby_blue_links">{ele.DiseaseName}</span>
              <img src={`https://bhc-web-backend.vercel.app/symptom-image/${ele.DiseaseId}.png`} alt="" />
              <span className="text-xs tracking-wider">
                  <ReactReadMoreReadLess charLimit={80} readMoreText={"Read more"} readLessText={"Read less"} readMoreClassName="read-more-less--more" readLessClassName="read-more-less--less"
                    readMoreStyle={{color : "#4c6fff" , fontWeight : "bold"}}
                    readLessStyle={{color : "#4c6fff" , fontWeight : "bold"}}
                  >
                  {ele.DiseaseDescription}
                </ReactReadMoreReadLess>
              </span>
            </div>
          ))
        }
      </div>
    }
  </>
  )
}
export default Symptoms