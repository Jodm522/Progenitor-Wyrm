const LOAD_ONE = "classes/LOAD_ONE";
const LOAD = "classes/LOAD";

const load = (allClasses) => ({
  type: LOAD,
  allClasses,
});

const loadOne = (singleClass) => ({
  type: LOAD_ONE,
  singleClass,
});

export const getClasses = () => async (dispatch) => {
  const res = await fetch`/api/classes`;
  if (res.ok) {
    const classList = await res.json();
    dispatch(load(classList));
  }
};

export const getOneClass = (id) => async (dispatch) => {
  const res = await fetch(`/api/classes/${id}`);
  if (res.ok) {
    const singleClass = await res.json();
    dispatch(loadOne(singleClass));
  }
};

const initialState = { classes: [] };
const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      return action.allClasses;
    }
    case LOAD_ONE:
      return action.singleClass;
    default:
      return state;
  }
};
export default classReducer;
