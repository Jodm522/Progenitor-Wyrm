const GET_LANGUAGE = "details/GET_LANGUAGE"

const getLanguage = (language)=>{
    type: GET_LANGUAGE
    language
}


export const languageDetails = ()  => async (dispatch) => {
    const res = await fetch `/api/races`
    if (res.ok){
        const raceList = await res.json();
        dispatch(load(raceList));
    }
}
