import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session"

const SET_STEP= "characterForm/SET_STEP"

const setStep = (formStep) => ({
    type: SET_STEP,
   payload: formStep
})


export const formStepFunc = (formStep) => async(dispatch)=>{
const res =dispatch(setStep(formStep))
return res
}

export default function formStepReducer(state={}, action){
switch(action.type){
    case SET_STEP:
        return {step: action.payload}
    default:
    return state
}

}
