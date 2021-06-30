
const LOAD_ONE = "races/LOAD_ONE";
const LOAD = "races/LOAD";

const load = (allRaces) => ({
  type: LOAD,
  allRaces,
});
const loadOne = (race)=>({
  type: LOAD_ONE,
 race
})


export const getRaces = ()  => async (dispatch) => {
    const res = await fetch `/api/races`
    if (res.ok){
        const raceList = await res.json();
        dispatch(load(raceList));
    }

}

export const getOneRace = (id) => async (dispatch)=>{
  const res = await fetch (`/api/races/${id}`)
  if (res.ok){
    const race = await res.json();
    dispatch(loadOne(race))
}
}

const initialState = { races:[]};
const raceReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOAD:{
        return action.allRaces
        }
        case LOAD_ONE:
        return action.race
        default:
             return state
    }
}
 export default raceReducer
