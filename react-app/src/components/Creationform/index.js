import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
const CreationForm= () => {
const step = useSelector(state=> state.formStepReducer.step)
console.log(step)
return(
    <div>
     <Step1/>
    {step > 1 &&
    <Step2/>
    }
    </div>
)
}
export default CreationForm
