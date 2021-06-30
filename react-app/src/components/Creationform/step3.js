import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {formStepFunc} from "../../store/characterFormStep"
import {getOneRace} from "../../store/races"

const Step3 = () =>{
const dispatch = useDispatch();
const [step3Complete, setStep3Complete] = useState(false)
const race = useSelector((state) => {
  return state?.formStepReducer.step2Details.race;
});

useEffect(() => {
  dispatch(getOneRace(race));
}, [dispatch]);

const step3Submit=()=>{
  setStep3Complete(true)
  dispatch(formStepFunc(3))
}
useEffect(() => {
  dispatch(getOneRace(race));
}, [dispatch]);

return(<div>
{race && <div>{race}</div>}
</div>
)
}
export default Step3
