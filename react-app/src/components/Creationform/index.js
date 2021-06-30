import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const CreationForm= () => {
const step = useSelector(state=> state.formStepReducer.step)
return(
    <div className="formContainer">
     <Step1/>
    {step > 1 &&
    <Step2/>
    }
    {step > 2 &&
    <Step3 />
    }
    </div>
)
}
export default CreationForm
