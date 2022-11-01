import React, { useState,useRef, useEffect } from 'react'
import Sidebar from "../../components/Sidebar"
import Chat from "../../components/Chat"
// logo - images
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import prescription from "../../assets/prescription.svg"
import report from "../../assets/report.svg"
// sidebar components 
import LiveParameters from "../../components/SideBarComp/LiveParameters"
import MedicalRecords from "../../components/SideBarComp/MedicalRecords"
import PatientHistory from "../../components/SideBarComp/PatientHistory"
import Profile from "../../components/SideBarComp/Profile"
import Stethoscope from "../../components/SideBarComp/Stethoscope"
import Symptoms from "../../components/SideBarComp/Symptoms"
// modals
import Medications from '../../components/Medications'
import Prescriptions from '../../components/Prescriptions'
import Record from "../../components/Record"
//video-call
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import { CopyToClipboard } from "react-copy-to-clipboard"
import '../../css/meeting.css';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Peer from "simple-peer"
import io from "socket.io-client"
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import Prescription from '../prescription/prescription';
import MedPres from '../../components/MedPres';
import CommentSec from '../../components/CommentSec';
const socket = io.connect('http://localhost:5000')
const Home = () => {
  //video-call-logic
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ me, setMe ] = useState("")
  const [ stream, setStream ] = useState()
  const [ receivingCall, setReceivingCall ] = useState(false)
  const [ caller, setCaller ] = useState("")
  const [ callerSignal, setCallerSignal ] = useState()
  const [ callAccepted, setCallAccepted ] = useState(false)
  const [ idToCall, setIdToCall ] = useState("")
  const [ callEnded, setCallEnded] = useState(false)
  const [ name, setName ] = useState("")
  // const [videoOn,setVideoOn]= useState(false)
  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef= useRef()
    useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      setStream(stream)
        myVideo.current.srcObject = stream
    })

    socket.on("me", (id) => {
        setMe(id)
    })

    socket.on("callUser", (data) => {
      setReceivingCall(true)
      setCaller(data.from)
      setName(data.name)
      setCallerSignal(data.signal)
    })
  }, [])

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    })
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name
      })
    })
    peer.on("stream", (stream) => {
      
        userVideo.current.srcObject = stream
      
    })
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const answerCall =() =>  {
    setCallAccepted(true)
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    })
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller })
    })
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream
    })

    peer.signal(callerSignal)
    connectionRef.current = peer
  }

  const leaveCall = () => {
    setCallEnded(true)
    connectionRef.current.destroy()
  }
  const toggleVideo= async ()=>{
      let videoTrack = stream.getTracks().find(track => track.kind === 'video');
      if(videoTrack.enabled){
          videoTrack.enabled=false;
      }else{
          videoTrack.enabled=true;
      }
  }
  const toggleAudio= async()=>{
      let audioTrack = stream.getTracks().find(track => track.kind === 'audio');
      if(audioTrack.enabled){
          audioTrack.enabled=false;
      }else{
          audioTrack.enabled=true;
      }
  }

  const [openPrescriptions , setopenPrescriptions] = useState(false)
  const [openMedications , setopenMedications] = useState(false) 
  const [records , setrecords] = useState(false) 
  let [isOpen, setIsOpen] = useState(false)

  // comment sections
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  // prescriptions
  function closePres() {
    setopenPrescriptions(false)
  }
  function openPres() {
    setopenPrescriptions(true)
  }
  // medications
  function closeMeds() {
    setopenMedications(false)
  }
  function openMeds() {
    setopenMedications(true)
  }
   // records
   function closeRecords() {
    setrecords(false)
  }
  function openRecords() {
    setrecords(true)
  }
  const [sidebarComp, setsidebarComp] = useState("Profile")
  const showSideComp = () => {
    if (sidebarComp === "Live Parameter") {
      return <LiveParameters />
    } else if (sidebarComp === "Medical Records") {
      return <MedicalRecords records={records} setrecords={setrecords} closeRecords={closeRecords} openRecords={openRecords}/>
    } else if (sidebarComp === "Patient History") {
      return <PatientHistory />
    } else if (sidebarComp === "Symptoms") {
      return <Symptoms />
    } else if (sidebarComp === "Stethoscope") {
      return <Stethoscope />
    } else {
      if(sidebarComp==='Prescription'){
        return <MedPres/>
      }else if(sidebarComp==='CommentSec'){
        return <CommentSec />
      }
      return <Profile/>
    }
  }
  
  useEffect(() => {
    window.onbeforeunload = function(event) {
      setsidebarComp("Profile")
    };
}, []);
  return (
    <div className="w-screen h-screen flex bg-baby_blue_bg  top-0 z-50">
      <Sidebar setsidebarComp={setsidebarComp} sidebarComp={sidebarComp}/>
      <div className="w-[85%] h-full flex ">
        {
          showSideComp()
        }
        <div className=" w-[40%] h-[90%]  flex py-9 justify-center relative shadow-2xl rounded-xl bg-white">
            {stream &&  <video playsInline muted ref={myVideo} autoPlay className="w-[90%] h-[90%] object-cover rounded-lg" />}
          {/* <img src="https://images.unsplash.com/photo-1598257006408-538c27529235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBjYWxsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-[90%] h-[90%] object-cover rounded-lg" /> */}
          
          <div className="flex absolute space-x-4 bottom-2 w-[90%] items-center justify-center py-4 px-10  rounded-2xl bg-white">
            <div className="shadow-xl  rounded-full p-3 group hover:cursor-pointer hover:text-blue-700 text-gray-900"  onClick={toggleVideo}><VideocamOutlinedIcon /></div>
            <div className="shadow-xl  rounded-full p-3 group hover:cursor-pointer hover:text-blue-700 text-gray-900" onClick={toggleAudio}><MicOutlinedIcon /></div>
            {/* <div className="shadow-xl rounded-full p-3 group hover:cursor-pointer hover:text-blue-700 text-gray-900"><ScreenShareOutlinedIcon /></div> */}
            <div className="shadow-xl  rounded-full p-3 group hover:cursor-pointer hover:text-blue-700 text-gray-900" onClick={openModal}><MarkUnreadChatAltOutlinedIcon /></div>
            <div className="shadow-xl rounded-full p-3 group hover:cursor-pointer hover:text-blue-700 text-gray-900"><ExitToAppOutlinedIcon /></div>
            {
              <>
                  <div className="shadow-xl bg-white rounded-full p-2 group hover:cursor-pointer hover:text-blue-700" onClick={() => setsidebarComp("Prescription")}><img src={prescription} alt="" className="h-9 w-9"/></div>
                  <div className="shadow-xl bg-white rounded-full p-2 group hover:cursor-pointer hover:text-blue-700" onClick={() => setsidebarComp("CommentSec")}><img src={report} alt="" className="h-9 w-9"/></div>
              </>
            }
          </div>
          <div className="w-[20%] h-[20%] absolute bottom-32 left-12 rounded-2xl shadow-2xl overflow-hidden bg-white">
            {callAccepted && !callEnded ?
            <video className=" w-[100%] h-[100%] object-cover rounded-lg" playsInline ref={userVideo}  autoPlay />:
            null}
            {/* <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="" srcSet="" className="w-full h-full object-cover " /> */}
          </div>
            <div className="myId absolute top-0 ">
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "0px", width:"150px" }}
              />
              <CopyToClipboard text={me} style={{ marginBottom: "0.5rem" }}>
                <Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="small" />}>
                  {/* Copy ID */}
                </Button>
              </CopyToClipboard>
              <TextField
                id="filled-basic"
                label="ID to call"
                variant="filled"
                value={idToCall}
                style={{ marginBottom: "0px", width:"60px" }}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              <div className="call-button">
                {callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" onClick={leaveCall}>
                    <PhoneIcon fontSize="medium" />
                  </Button>
                ) : ( 
                  <IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                    <PhoneIcon fontSize="medium" />
                  </IconButton>
                )}
                {/* {idToCall} */}
              </div>
            </div>
            {/*answer the call */}
        </div>
            <div className='absolute bottom-9 right-9'>
              {receivingCall && !callAccepted ? (
                  <div className="caller">
                  <h1 >{name} is calling...</h1>
                  <Button className='flex justify-center items-center' variant="contained" color="primary"  onClick={answerCall} >
                    Answer
                  </Button>
                </div>
              ) :null}
			      </div>
        <Chat isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={openModal}/>
        <Medications openMedications={openMedications} setopenMedications={setopenMedications} closeMeds={closeMeds} openMeds={openMeds}/>
        <Prescriptions openPrescriptions={openPrescriptions} setopenPrescriptions={setopenPrescriptions} closePres={closePres} openPres={openPres}/>
        <Record records={records} setrecords={setrecords} closeRecords={closeRecords} openRecords={openRecords}/>
      </div>
    </div>
  )
}
export default Home