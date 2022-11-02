import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import '../../css/meeting.css';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Peer from "simple-peer"
import io from "socket.io-client"
import Header from "../../components/Header";
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import Prescription from "../prescription/prescription"
import '../prescription/prescription.css'
const socket = io.connect('http://localhost:5000')
const Meeting = () => {
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
  return (
    <Box m="20px">
      <Header title="Meeting" subtitle="Consult with Your doctor" />
	  <div className="pad-video">
		
	  
	  <div className="padStyle">
		<Prescription/>
	  </div>
      <Box display="flex" justifyContent="space-around">
      <div className="container section">
			<div className="video-container " id="parent">
				<div className="video ">
					{stream &&  <video className="red" playsInline muted ref={myVideo} autoPlay style={{ width: "500px" }} />}
				</div>
				<div className="video ">
					{callAccepted && !callEnded ?
					<video className="red" playsInline ref={userVideo} autoPlay 
					style={{ 
						width: "200px",
						position: "absolute",
						top: "400px",
						left: "520px"}} />:
					null}
				</div>
			</div>
			<div className="myId">
                <IconButton color="primary" aria-label="video-call" onClick={toggleVideo}>
                    <VideocamIcon fontSize="large" color="primary" />
                </IconButton>
                <IconButton color="primary" aria-label="mic" onClick={toggleAudio}>
                    <MicIcon fontSize="large" color="primary" />
                </IconButton>
				<TextField
					id="filled-basic"
					label="Name"
					variant="filled"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ marginBottom: "0px" }}
				/>
				<CopyToClipboard text={me} style={{ marginBottom: "0.5rem" }}>
					<Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
						{/* Copy ID */}
					</Button>
				</CopyToClipboard>
				<TextField
					id="filled-basic"
					label="ID to call"
					variant="filled"
					value={idToCall}
                    style={{ marginBottom: "0px" }}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				<div className="call-button">
					{callAccepted && !callEnded ? (
						<Button variant="contained" color="secondary" onClick={leaveCall}>
							<PhoneIcon fontSize="large" />
						</Button>
					) : ( 
						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
							<PhoneIcon fontSize="large" />
						</IconButton>
					)}
					{/* {idToCall} */}
				</div>
			</div>
			<div>
				{receivingCall && !callAccepted ? (
						<div className="caller">
						<h1 >{name} is calling...</h1>
						<Button variant="contained" color="primary"  onClick={answerCall} >
							Answer
						</Button>
					</div>
				) : null}
			</div>
		</div>
        </Box>
		</div>
      </Box>
    
   
  )
}

export default Meeting