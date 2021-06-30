import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";

const SET_STEP = "characterForm/SET_STEP";
const SET_STEP_1 = "characterForm/SET_STEP_1";
const SET_STEP_2 = "characterForm/SET_STEP_2";

const setStep = (formStep) => ({ type: SET_STEP, formStep });

const setStep1 = (step1Details) => ({
  type: SET_STEP_1,
  step1Details: {
    name: step1Details.name,
    alignment: step1Details.alignment,
  },
});

const setStep2 = (step2Details) => ({
  type: SET_STEP_2,
  step2Details:{
    race : step2Details
  }
});

export const formStepFunc = (formStep) => async (dispatch) => {
  const res = dispatch(setStep(formStep));
  return res;
};

export const step1Submit = (step1Details) => async (dispatch) => {
  const res = dispatch(setStep1(step1Details));
  return res;
};
export const step2Submit = (step2Details) => async (dispatch) => {
    console.log(step2Details)
  const res = dispatch(setStep2(step2Details));
  return res;
};

export default function formStepReducer(state={}, action) {
  let newState = {};
  switch (action.type) {
    case SET_STEP:
      newState = { ...state, step: action.formStep };
      return newState;
    case SET_STEP_1:
      const step1Details = action.step1Details;
      newState = { ...state, step1Details };
      return newState;
    case SET_STEP_2:
      const step2Details = action.step2Details;
      newState = { ...state, step2Details };
      return newState;
    default:
      return state;
  }
}
