import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    <Step3 step4Start={step4Start}/>}
    </div>
)
}
export default CreationForm
