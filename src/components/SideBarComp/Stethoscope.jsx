import React,{useState , useRef } from 'react'
import sound1 from "../../assets/sound/sound1.mp3"
import sound2 from "../../assets/sound/sound2.mp3"
import sound3 from "../../assets/sound/sound3.mp3"
import sound4 from "../../assets/sound/sound4.mp3"
import sound5 from "../../assets/sound/sound5.mp3"
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PlayForWorkOutlinedIcon from '@mui/icons-material/PlayForWorkOutlined';

const Stethoscope = () => {
  const [nowPlaying , setNowPlaying] = useState("")
  let audioRef = useRef(new Audio(""));
  const playit = (sound) =>{
    audioRef.current = new Audio(sound)
    audioRef.current.play();
  }
  const playSoundFunc = (ele) => {
    if(nowPlaying === ""){
      playit(ele.file)
      setNowPlaying(ele.id)
    }else if(nowPlaying === ele.id){
      audioRef.current.pause();
      setNowPlaying("")
    }else{
      audioRef.current.pause();
      playit(ele.file)
      setNowPlaying(ele.id)
    }
  }
  const audio_data = [
    {
      id: 1,
      file: sound1 ,
      name : "Heart Beat 1",
      date : "28/10/2022"
    },
    {
      id: 2,
      file: sound2,
      name : "Heart Beat 2",
      date : "29/10/2022"
    },
    {
      id: 3,
      file: sound3,
      name : "Heart Beat 3",
      date : "30/10/2022"
    },
    {
      id: 4,
      file: sound4,
      name : "Heart Beat 4",
      date : "31/10/2022"
    }
    ,
    {
      id: 5,
      file: sound5,
      name : "Heart Beat 5",
      date : "32/10/2022"
    }
  ]
  return (
    <div className="w-[60%] h-full flex flex-col p-10">
      <div className="bg-white shadow-2xl rounded-2xl w-[90%] h-[60%]  pt-9">
        <span className="text-3xl font-bold text-baby_blue_links text-gray-900 pl-9">Live Stethoscope sound</span>
        <div className="w-full h-full flex flex-col mt-4  pl-7 space-y-2">
          {
            audio_data.map((ele) => (
              <div key={ele.id} className="flex justify-between items-center text-gray-900 rounded-2xl w-[90%] h-12  px-3 bg-baby_blue_bg border-2 target:border-slate-300 shadow-md hover:scale-105 duration-300">
                {
                  ele.id === nowPlaying ?
                  <span className="rounded-2xl shadow-xl bg-white hover:text-baby_blue_links w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-110 duration-200 overflow-hidden" onClick={()=>playSoundFunc(ele)}>
                  <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_hl1mhwst.json"  background="transparent"  speed="1"  style={{width: "100%" ,height: "100%"}}  loop  autoplay></lottie-player>
                </span>
                  :<span className="p-2 rounded-2xl shadow-xl bg-white hover:text-baby_blue_links w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-110 duration-200" onClick={()=>playSoundFunc(ele)}>
                  <PlayArrowOutlinedIcon />
                </span>
                }
                <span>
                  {ele.name}
                </span>
                <span className="text-baby_blue_links font-bold">
                  {ele.date}
                </span>
                <span className="p-2 rounded-2xl shadow-xl bg-white hover:text-baby_blue_links w-9 h-9 flex items-center justify-center cursor-pointer hover:scale-110 duration-200">
                  <PlayForWorkOutlinedIcon />
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Stethoscope