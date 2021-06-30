import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {formStepFunc} from "../../store/characterFormStep"
import {getRaces} from "../../store/races"
import {getModalRace} from "../../store/modalStore"
import RaceDetails from "./raceModal"
import { step2Submit } from "../../store/characterFormStep";


const Step2 = () =>{
const dispatch = useDispatch();
const [step2Complete, setStep2Complete] = useState(false)
const [CharRace, setCharRace] = useState("")
const [modal, setModal] = useState(false);


  const openModal = (e) =>{

  e.preventDefault();
  console.log(e.target.id)
  dispatch(getModalRace(e.target.id))
  setModal(true);
}
  const closeModal = (e) => {
e.preventDefault();
    setModal(false);}


 const finishStep2 = (e) => {
   console.log("SUBMITTEED")
   setStep2Complete(true);
   dispatch(formStepFunc(3));
   dispatch(step2Submit(CharRace))
 };


  useEffect(() => {
    dispatch(getRaces());
  }, [dispatch]);

  const races = useSelector((state) => {
  return state?.raceReducer.results;
  })

const step2Edit=(e)=>{
        e.preventDefault()
        setStep2Complete(false)
    }
        return (
          <div className="step2Div">
            {modal && (
              <div className="modalContainer">
                <button id="close" onClick={closeModal}>
                  X
                </button>
                <RaceDetails modal={modal} closeModal={closeModal} />
              </div>
            )}

            {step2Complete === false && (
              <div className="step2FormContainer">
                {races && (
                  <div>
                    <form>
                      <div
                        className="raceButtonMatrix"
                        onChange={(e) => {
                          setCharRace(e.target.value);
                        }}
                      >
                        {races.map((race) => (
                          <div>
                            <input
                              type="radio"
                              name="raceCheck"
                              value={race.index}
                              id={`${race.name}Check`}
                              required={true}
                            />
                            <label for={`${race.name}Check`}>{race.name}</label>
                            <div>
                              <button
                                id={race.index}
                                className="button"
                                onClick={openModal}
                              >
                                More info
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button type="button" onClick={finishStep2}>
                        Continue to next Step
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        );
}
export default Step2
