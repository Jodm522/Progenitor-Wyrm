import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {formStepFunc} from "../../store/characterFormStep"
import {getRaces} from "../../store/races"

const Step2 = () =>{
const dispatch = useDispatch();
const [step2Complete, setStep2Complete] = useState(false)
const [CharRace, setCharRace] = useState("")
const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);


const step2Submit=()=>{
       setStep2Complete(true)
       dispatch(formStepFunc(2))
    }

    useEffect(() => {
    dispatch(getRaces());
  }, [dispatch]);
  const races = useSelector((state) => {
  return state?.raceReducer.results;
  })

const openRaceModal = ()=>{

}



const step2Edit=(e)=>{
        e.preventDefault()
        setStep2Complete(false)
    }
        return(
     <div className="step2Div">

        {(step2Complete === false) && <div className="step2FormContainer" onSubmit={step2Submit}>
        {races && <div>
            {/* <AddToWishList closeModal={closeModal} show={show} /> */}
            <form>
            <div className="raceButtonMatrix" onChange={(e)=>{ setCharRace(e.target.value)}} >
        {races.map((race)=>(
            <div>
                <input type="radio" name="raceCheck" value={race.name} id={`${race.name}Check`} required={true} />
        <label for={`${race.name}Check`}>{race.name}</label>
        <div>
         {!modal && (
                <button className="button" onClick={openModal}>
                  Add to Wishlist
                </button>
              )}
        </div>
        </div>
        ))

}
</div>




        <button>Continue to next Step</button>
        </form>

        </div>}

        </div>
        }
        </div>
        )
}
export default Step2
