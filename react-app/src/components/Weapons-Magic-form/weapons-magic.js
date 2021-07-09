import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import formStepReducer from "../../store/characterFormStep";
import { getModalClass } from "../../store/modalStore";
import { classes } from "../Customizeform/context";



export default function WeaponsandMagic() {
  const dispatch = useDispatch();
  const [choicesStore, setChoicesStore] = useState({1:0, 2:0})
  const charClass = "warlock";
  const classInfo = classes[charClass]
  const [weaponsArr,setWeaponsArr] = useState([])
  const [step, setStep] = useState(0)
  const addWeapon=(weapon, option)=>{
  const newObj = choicesStore
  const newArr =  weaponsArr
  newObj[option] += 1
  newArr.push(weapon)
  setChoicesStore({...newObj})
  setWeaponsArr([...newArr])
  }
  const resetWeapons =()=>{
  setChoicesStore({ 1: 0, 2: 0 });
  setWeaponsArr([])
  }

  return (
    <div>
      { step === 0 &&
      <div>
      <div>Now we'll pick weapons for your character</div>
      <div>
        {classInfo.starting_weap_options.map((option) => (
          <div>

              <div>
                <div>
                  {choicesStore[option.option]},{option.choose}{" "}
                </div>
                <div>
                  {option.option})Pick {option.choose} of the following:
                </div>
                {option.from.map((weapon) => (
                  <div >
                    <input
                    checked={false}
                      id={`${weapon.choice.name}${option.option}`}
                      type="checkbox"
                      disabled={choicesStore[option.option] === option.choose}
                      onClick={() => addWeapon(weapon, option.option)}
                    ></input>
                    <label for={`${weapon.choice.name}${option.option}`}>
                      {weapon.quantity} {weapon.choice.name} Damage: d
                      {weapon.choice.damage}
                    </label>
                  </div>
                ))}
              </div>

          </div>
        ))}<button type="button" onClick={resetWeapons}>Reset Weapons</button>
        <button type="button" onClick={()=>setStep(1)}>Submit Weapons</button>
      </div>
      </div>
      }

    </div>
  );
}
