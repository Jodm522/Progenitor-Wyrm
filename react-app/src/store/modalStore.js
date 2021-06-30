
const LOAD_RACE = "races/LOAD_ONE";


const loadRace = (race) => ({
  type: LOAD_RACE,
  race,
});



// export const getRaces = ()  => async (dispatch) => {
//     const res = await fetch `/api/races`
//     if (res.ok){
//         const raceList = await res.json();
//         dispatch(load(raceList));
//     }

// }

export const getOneRace = (id) => async (dispatch)=>{
  const res = await fetch (`/api/races/${id}`)
  if (res.ok){
    const race = await res.json();
    dispatch(loadRace(race))
}
}

const initialState = { races:[]};
const modalReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOAD_RACE:
        return action.race
        default:
             return state
    }
}
 export default modalReducer;
