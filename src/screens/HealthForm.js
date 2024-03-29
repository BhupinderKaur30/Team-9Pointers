import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import scoreApi from './detect';

import "../z.css"
import '../App.css'


export default function HealthForm() {

  const navigate = useNavigate();

  
  const [credentials, setcredentials] = useState({
    physicalActivity:0,
    dietQuality:0,
    sleepDuration:0,
    stressLevels:0,
    bmi:0,
    bloodPressure:0,
    cholesterol:0,
    smokingStatus:0,
    alcoholConsumption:0,
    age:0
  })

  
  const handleSignUp = async (e) => {
    const parameters= credentials
    console.log(parameters);
    const response = await fetch("http://localhost:5000/getdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters),
    });
    const json = await response.json();
    console.log(json);
    if (json.Predicted_Age) {
      toast.success("Data sent successfully!");
      setTimeout(() => {
        const p_score=scoreApi(credentials)
        const data={
          Predicted_Age:p_score,
          age:credentials.age
        }
        navigate('../health-score',{state:data})
      }, 1000);
    }

    if (!json.Predicted_Age) {
      toast.error("Something went wrong");
    }
  };


  const onChangeHander = (event) => {
    setcredentials({ ...credentials, [event.target.name]: parseInt(event.target.value) });
  };

  const submit=()=>{
    if(credentials.alcoholConsumption,credentials.bloodPressure,credentials.bmi,credentials.cholesterol,credentials.dietQuality,credentials.physicalActivity,credentials.sleepDuration,credentials.smokingStatus,credentials.stressLevels){
      handleSignUp()
    }else{
      console.log("credentials missing")
    }
  }

  return (
    <div className='container'>
      <Toaster toastOptions={{ duration: 2000 }} />
      <div className=' text-center' style={{fontSize:'26px', fontWeight:700,padding:'15px',position:'sticky', top:'0px', zIndex:2, backgroundColor:'white', borderBottom:'1px solid lightgrey'}}>Fill Your Health Detail</div>
      <div className='row mt-3'>
        <div className='col-4 p-3 m-3 normal-box' style={{backgroundColor:'#c0f1c7'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'green'}}>Physical Activity level</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='Sedentary' name='physicalActivity' value={10}/>
            <label htmlFor="Sedentary"> Sedentary <small> (0-60 minutes/day)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Moderate Activity' name='physicalActivity'value={5}/>
            <label htmlFor="Moderate Activity"> Moderate Activity <small> (60-150 minutes/day)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Vigorous Activity' name='physicalActivity' value={1}/>
            <label htmlFor="Vigorous Activity"> Vigorous Activity <small> (150+ minutes/day)</small></label>
          </div>
        </div>

        <div className='col-7 p-3 m-3 normal-box' style={{backgroundColor:'#ffd6cc'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'red'}}>Diet Quality</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='Poor' name='dietQuality' value={1}/>
            <label htmlFor="Poor"> Poor <small> (high intake of processed foods, low intake of fruits and vegetables)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Good' name='dietQuality' value={5}/>
            <label htmlFor="Good"> Good <small> (regular consumption of fruits, vegetables, whole grains)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Excellent' name='dietQuality' value={10}/>
            <label htmlFor="Excellent"> Excellent <small> (well-balanced diet with minimal processed foods)</small></label>
          </div>
        </div>

        <div className='col-3 p-3 m-3 normal-box' style={{backgroundColor:'#b3e6ff'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'blue'}}>Sleep Duration</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='Short' name='sleepDuration' value={10}/>
            <label htmlFor="Short"> {'<'} 6 hours</label><br/>
            <input onChange={onChangeHander}type='radio' id='Normal' name='sleepDuration' value={1}/>
            <label htmlFor="Normal"> 6-8 hours</label><br/>
            <input onChange={onChangeHander}type='radio' id='Long' name='sleepDuration' value={5}/>
            <label htmlFor="Long"> {'>'} 8 hours</label>
          </div>
        </div>

        <div className='col-3 p-3 m-3 normal-box' style={{backgroundColor:'#ffcc99'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'orange'}}>Stress Levels</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='LowStress' name='stressLevels' value={1}/>
            <label htmlFor="LowStress"> Low</label><br/>
            <input onChange={onChangeHander}type='radio' id='ModerateStress' name='stressLevels' value={5}/>
            <label htmlFor="ModerateStress"> Moderate</label><br/>
            <input onChange={onChangeHander}type='radio' id='HighStress' name='stressLevels' value={10}/>
            <label htmlFor="HighStress"> High</label>
          </div>
        </div>

        <div className='col-4 p-3 m-3 normal-box' style={{backgroundColor:'#ffccff', float:'right'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'purple'}}>Body Mass Index (BMI)</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='Underweight' name='bmi' value={5}/>
            <label htmlFor="Underweight"> Underweight <small> ({'<'} 18.5)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='NormalWeight' name='bmi' value={1}/>
            <label htmlFor="NormalWeight"> Normal Weight <small> (18.5-24.9)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Overweight' name='bmi' value={10}/>
            <label htmlFor="Overweight"> Overweight <small> (25-29.9)</small></label><br/>
          </div>
        </div>

        <div className='col-6 p-3 m-3 normal-box' style={{backgroundColor:'#ff9999'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'red'}}>Blood Pressure</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='NormalBP' name='bloodPressure' value={1}/>
            <label htmlFor="NormalBP"> Normal <small> (Systolic {'<'} 120 mmHg, Diastolic {'<'} 80 mmHg)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Prehypertension' name='bloodPressure' value={5}/>
            <label htmlFor="Prehypertension"> Prehypertension <small> (Systolic 120-139 mmHg, Diastolic 80-89 mmHg)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='Stage1Hypertension' name='bloodPressure' value={10}/>
            <label htmlFor="Stage1Hypertension"> Hypertension <small> (Systolic 140-159 mmHg, Diastolic 90-99 mmHg)</small></label><br/>
            
          </div>
        </div>

        <div className='col-5 p-3 m-3 normal-box' style={{backgroundColor:'#99ccff'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'blue'}}>Cholesterol Levels</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='DesirableCholesterol' name='cholesterol' value={1}/>
            <label htmlFor="DesirableCholesterol"> Desirable <small> (Total cholesterol {'<'} 200 mg/dL, LDL {'<'} 100 mg/dL, HDL {'>'} 60 mg/dL)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='BorderlineHighCholesterol' name='cholesterol' value={5}/>
            <label htmlFor="BorderlineHighCholesterol"> Borderline High <small> (Total cholesterol 200-239 mg/dL, LDL 100-129 mg/dL, HDL 40-59 mg/dL)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='HighCholesterol' name='cholesterol' value={10}/>
            <label htmlFor="HighCholesterol"> High <small> (Total cholesterol ≥ 240 mg/dL, LDL ≥ 130 mg/dL, HDL {'<'} 40 mg/dL)</small></label>
          </div>
        </div>

        <div className='col-4 p-3 m-3 normal-box' style={{backgroundColor:'#ffffcc'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'#666633'}}>Smoking Status</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='NonSmoker' name='smokingStatus' value={1}/>
            <label htmlFor="NonSmoker"> Non-smoker <small>(No smoking history)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='FormerSmoker' name='smokingStatus' value={5}/>
            <label htmlFor="FormerSmoker"> Former smoker <small>(Previously smoked but quit)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='CurrentSmoker' name='smokingStatus' value={10}/>
            <label htmlFor="CurrentSmoker"> Current smoker <small>(Currently smoking)</small></label>
          </div>
        </div>

        <div className='col-4 p-3 m-3 normal-box' style={{backgroundColor:'#ccffcc'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'#009933'}}>Alcohol Consumption</span> <hr/>
          <div style={{fontWeight:500}}>
            <input onChange={onChangeHander}type='radio' id='NonDrinker' name='alcoholConsumption' value={1}/>
            <label htmlFor="NonDrinker"> Non-drinker <small>(No alcohol consumption)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='ModerateDrinker' name='alcoholConsumption' value={5}/>
            <label htmlFor="ModerateDrinker"> Moderate drinker <small>(up to 2 drinks per day)</small></label><br/>
            <input onChange={onChangeHander}type='radio' id='HeavyDrinker' name='alcoholConsumpUion' value={10}/>
            <label htmlFor="HeavyDrinker"> Heavy drinker <small>(Exceeds moderate drinking guidelines)</small></label>
          </div>
        </div>

        <div className='col-3 p-3 m-3 normal-box' style={{backgroundColor:'#ffcccc'}}>
          <span style={{fontSize:'18px', fontWeight:700, color:'#ff6666'}}>Real Age</span> <hr/>
          <div style={{fontWeight:500}}>
            <label htmlFor="age">Age</label><br/>
            <input onChange={onChangeHander}type='number' id='age' name='age' value={credentials.age}/>
            
            {/* Add more checkboxes for other chronic health conditions if needed */}
          </div>
        </div>
      </div>
      <div className='row mt-3 mb-5'>
        <div className='col-12 mb-5 text-center'><button className='button-07' onClick={submit}>Submit Details</button></div>
      </div>
    </div>
  )
}
