import React from 'react'
import { useNavigate} from "react-router-dom";
import "../images/backimg.jpeg"

export default function Home() {

    const navigate = useNavigate();

  return (
    <div className='container-fluid xxx'>
        <div className='row'>
            <div className='col-12' style={{fontWeight:'700',fontSize:'28px', color:'white', padding:'15px 20px',backgroundColor: "#5C4FFF"}}><span>Health Pulse</span></div>
            <div className='col-12 text-center' style={{color:'#5C4FFF', position:'absolute', top:'30%'}}><span style={{fontSize: "4vmax", fontWeight: "bold" }}>Age is Just a Number,<br/> Health is Your True Measure</span><br/></div>
            <div className='col-12 text-center' ><button className='button-07' onClick={()=>{navigate('../HealthForm')}} style={{position:'absolute',top:'360px',left:'700px', borderRadius:'8px'}}>Track Your Health</button></div>
            <div  className='col-12 text-center' style={{position:'absolute', top:'80%',fontSize:'30px', fontWeight:600}}>Discover Your Vitality, Track Your Wellness</div>
        </div>
      
    </div>
  )
}
