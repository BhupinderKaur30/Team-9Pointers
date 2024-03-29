import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import { useLocation} from "react-router-dom";


export default function Result() {

  const location = useLocation();
  const state = location.state;
  return (
    <div className='container'>
      <div className='text-center' style={{fontSize:'26px', fontWeight:700,padding:'15px',position:'sticky', top:'0px', zIndex:2, backgroundColor:'white', borderBottom:'1px solid lightgrey'}}>Health Score and Report</div>
      <div className='row'>
        <div className='col-12 mt-5 text-center'>
        <ReactSpeedometer
          maxValue={120}
          value={state.Predicted_Age}
          currentValueText={`Virtual Age: ${state.Predicted_Age}`}
          width={400}
          height={300}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          segmentColors={[
            'green',
            'lightgrey'
          ]}
          customSegmentStops={[0,state.Predicted_Age,120]}
          customSegmentLabels={[
          {
            text: 'Age',
            position: "INSIDE",
            color: "white",
          },
          {
            //   text: team2,
            position: "INSIDE",
            color: "#555",
          },
          ]}/>
          </div>
      <div className='col-6 mt-5 text-center'>
        </div>
        <div className='col-12 normal-box'>
            <div className='mt-3 text-center'><span style={{fontSize:'18px', fontWeight:700, color:'red', padding:'15px'}}>Recommendation</span></div> <hr/>
            <div>
                <ol>
                    <li>Incorporate strength training exercises at least twice a week to improve muscle strength and endurance.</li>
                    <li>Limit intake of processed foods, sugary beverages, and foods high in saturated fats and added sugars.</li>
                    <li>Practice stress-reduction techniques such as deep breathing, meditation, yoga, or tai chi.</li>
                    <li>Schedule regular check-ups with your healthcare provider to monitor blood pressure and cholesterol levels</li>
                    <li>Follow recommended lifestyle changes and medication regimens to manage hypertension and hypercholesterolemia effectively.</li>

                </ol>
            </div>
        </div>
      </div>
    </div>
  )
}
