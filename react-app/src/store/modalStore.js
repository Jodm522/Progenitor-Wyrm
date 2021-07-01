const LOAD_RACE = "modalStore/LOAD_RACE";
const LOAD_CLASS = "modalStore/LOAD_CLASS";
const loadRace = (race) => ({
  type: LOAD_RACE,
  race,
});
const loadClass = (singleClass) => ({
  type: LOAD_CLASS,
  singleClass,
});

export const getModalRace = (id) => async (dispatch) => {
  const res = await fetch(`/api/races/${id}`);
  if (res.ok) {
    const race = await res.json();
    dispatch(loadRace(race));
  }
};
export const getModalClass = (id) => async (dispatch) => {
  const res = await fetch(`/api/classes/${id}`);
  if (res.ok) {
    const singleClass = await res.json();
    dispatch(loadClass(singleClass));
  }
};

const initialState = { modalStore: [] };
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RACE:
      return action.race;
    case LOAD_CLASS:
      return action.singleClass;
    default:
      return state;
  }
};

export default modalReducer;
