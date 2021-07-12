// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import session from "./session";

const SET_STEP = "characterForm/SET_STEP";
const SET_STEP_1 = "characterForm/SET_STEP_1";
const SET_STEP_2 = "characterForm/SET_STEP_2";
const SET_STEP_3 = "characterForm/SET_STEP_3";
const SET_STEP_4 = "characterForm/SET_STEP_4";
const GET_USER_CHARACTERS = "characterForm/GET_USER_CHARACTERS";

const getCharacters = (chars) => ({
  type: GET_USER_CHARACTERS,
  chars,
});
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
  step2Details: {
    race: step2Details,
  },
});
const setStep3 = (step3Details) => ({
  type: SET_STEP_3,
  step3Details: {
    charClass: step3Details,
  },
});
const setStep4 = (step4Details) => ({
  type: SET_STEP_4,
  step4Details: {
    charStats: step4Details,
  },
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
  const res = dispatch(setStep2(step2Details));
  return res;
};
export const step3Submit = (step3Details) => async (dispatch) => {
  const res = dispatch(setStep3(step3Details));
  return res;
};
export const step4Submit = (step4Details) => async (dispatch) => {
  const res = dispatch(setStep4(step4Details));
  return res;
};
export const getOneCharacter = (charId) => async (dispatch) => {
  const res = await fetch(`/api/characters/${charId}`);
  if (res.ok) {
    const data = await res.json();

    dispatch(getCharacters(data));
  }
};

export const DeleteCharacter = (charId) => async () => {
  await fetch(`/api/characters/delete/${charId}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
};

export const getUserCharacters = (userId) => async (dispatch) => {
  const res = await fetch(`/api/characters/users/${userId}`);
  if (res.ok) {
    const data = await res.json();

    dispatch(getCharacters(data));
  }
};
export const getAllCharacters = () => async (dispatch) => {
  const res = await fetch(`/api/characters/all`);
  if (res.ok) {
    const data = await res.json();

    dispatch(getCharacters(data));
  }
};
export const createCharacter =
  (
    user_id,
    name,
    alignment,
    race,
    background,
    charClass,
    charStats,
    spellChoices,
    cantripChoices,
    equipment,
    weapons
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/characters/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        name,
        alignment,
        race,
        background,
        charClass,
        charStats,
        spellChoices,
        cantripChoices,
        equipment,
        weapons,
      }),
    });
    const data = await response.json();
    if (data.errors) {
      return;
    }
  };

export default function formStepReducer(state = {}, action) {
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
    case SET_STEP_3:
      const step3Details = action.step3Details;
      newState = { ...state, step3Details };
      return newState;
    case SET_STEP_4:
      const step4Details = action.step4Details;
      newState = { ...state, step4Details };
      return newState;
    case GET_USER_CHARACTERS:
      const chars = action.chars;
      newState = [chars];
      return newState;
    default:
      return state;
  }
}
