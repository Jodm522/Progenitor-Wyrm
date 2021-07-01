import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const CreationForm= () => {
const history= useHistory()
const step = useSelector(state=> state.formStepReducer.step)
const step4Start = ()=>{
    history.push("/characters/customize");
}
return(
    <div className="formContainer">
     <Step1/>
    {step > 1 &&
    <Step2/>
    }
    {step > 2 &&
    <Step3 />}
    {step > 3 &&
    <div>
    <div>Last chance to edit! Are the above details correct?</div>
    <button type = "button" onClick={step4Start}> Yep, let's keep going</button>
    </div>
    }</div>
)
}
export default CreationForm
