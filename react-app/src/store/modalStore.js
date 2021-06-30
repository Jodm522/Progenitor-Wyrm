const LOAD_RACE = "modalStore/LOAD_RACE";

const loadRace = (race) => (
{
  type: LOAD_RACE,
  race,
}
);


export const getModalRace = (id) => async (dispatch)=>{
  const res = await fetch (`/api/races/${id}`)
   console.log(id)
  if (res.ok){
    const race = await res.json();
    dispatch(loadRace(race));
}
}

const initialState =  {modalStore:[]}
const modalReducer = (state = initialState, action) =>{
    switch(action.type) {
        case LOAD_RACE:
        return action.race
        default:
             return state
    }
}

 export default modalReducer;
