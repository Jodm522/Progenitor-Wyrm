import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { races, classes } from "./context";

const CustomizeForm = () => {
  const dispatch = useDispatch();
  // const charDetails = useSelector((state)=> state.formStepReducer)
  //! dummy data for now
  const charDetails = {
    step1Details: { name: "Donald Lixakstan", alignment: "LG" },
    step2Details: { race: "dragonborn" },
    step3Details: { charClass: "fighter" },
  };
  const rolls = { STR: 15, DEX: 9, CON: 14, INT: 12, WIS: 14, CHA: 14 };
  //! variables from state
  const { name, alignment } = charDetails.step1Details;
  const { charClass } = charDetails.step3Details;
  const { race } = charDetails.step2Details;
  const raceInfo = races[race];
  const raceStatBonuses = raceInfo.statBonuses;
  const classInfo = classes[charClass];
  const armorOptions = classInfo.startingArmorOptions;
  const classProfs = classInfo.skillProficiencies;
  //! varibles to be passed to the character builder
  const [charStats, setCharStats] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });
  const prof_bonus = 2;
  const savingThrows = classes[charClass].savingThrows;

  const [armorStats, setArmorStats] = useState({});
  const [hitDie, setHitDie] = useState(0);

  //! prof checkboxes
  const [profCheckBox, setProfCheckBox] = useState(0);
let [skillProficiencies, setSkillProficiencies] = useState([]);

const[tempProfArray, setTempProfArray] = useState([])
const  handleProfChecks=(e)=>{
console.log(tempProfArray)
const index = tempProfArray.indexOf(e.target.value);
console.log(e.target.value)
console.log(index)

if (index === -1) {
  tempProfArray.push(e.target.value)
}
else{tempProfArray.splice(index, 1);

}

  let checkVal = profCheckBox;
  const checkABox = () => {
    checkVal += 1;
    e.target.isChecked = true;
  };
  const uncheckABox = () => {
    checkVal -= 1;
    e.target.isChecked = false;
  };
  !e.target.isChecked ? checkABox() : uncheckABox();
  setProfCheckBox(checkVal);
  console.log(tempProfArray);
}


  //! other state variables
  const [hasrolled, setHasRolled] = useState(false);
  //!seeing if armor can be automatically set

  //! get base stats based on race
  const SetRaceStats = () => {
    const finalobj = charStats;
    for (const key in raceStatBonuses) {
      finalobj[key] += raceStatBonuses[key];
      console.log(finalobj);
      setCharStats({ ...finalobj });
    }
  };
  const SetClassStats = () => {
    if (armorOptions.length === 1) {
      const newArmor = {
        armorType: armorOptions[0].armorType,
        armor: armorOptions[0].index,
        armorName: armorOptions[0].name,
      };
      setArmorStats({ ...newArmor });
    }
  };

  //! add rolls to stats
  const addRolls = () => {
    const finalobj = charStats;
    for (const key in rolls) {
      finalobj[key] += rolls[key];
      setCharStats({ ...finalobj });
      setHasRolled(true);
    }
  };
  //! obj to be passed to the character creator function
  let initalCharStats = {
    baseStats: charStats,
    prof_bonus,
    skillProficiencies,
    savingThrows,
    armorStats,
    hitDie,
  };
  useEffect(() => {
    SetRaceStats();
    SetClassStats();
  }, []);


  return (
    <div>
      <div>
        <div>{charStats.STR}</div>
        <div>{charStats.DEX}</div>
        <div>{charStats.CON}</div>
        <div>{charStats.INT}</div>
        <div>{charStats.WIS}</div>
        <div>{charStats.CHA}</div>
        {!hasrolled && (
          <button type="button" onClick={addRolls}>
            Roll
          </button>
        )}
        <div>
          {savingThrows.map((st) => (
            <div>{st}</div>
          ))}
        </div>
        <div>{armorStats.armorName}</div>
        <div>
          {armorOptions.length > 1 && (
            <div>
              <div>
                This class has armor options, choose one of the following:
              </div>
              <form>
                <div
                  onChange={(e) => {
                    const newArm = {
                      armorType: e.target.value,
                      armor: e.target.id,
                    };
                    console.log(newArm);
                    // setArmorStats(e.target.value);
                    // console.log(armorStats)
                  }}
                >
                  {armorOptions.map((arm) => (
                    <div>
                      <input
                        type="radio"
                        name="armorCheck"
                        value={arm.armortype}
                        id={`${arm.index}`}
                        required={true}
                      />
                      <label for={`${arm.index}`}>{arm.name}</label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          )}
          {!(profCheckBox === classProfs.choose) && (
            <div>
              <div>Now choose {classProfs.choose} profeciencies</div>
              {classProfs.options.map((prof) => (
                <div>
                  <input
                    type="checkbox"
                    value={prof.name}
                    id={`${prof.name}Check`}
                    isChecked={true}
                    onChange={handleProfChecks}
                  />
                  <label for={`${prof.name}Check`}>{prof.name}</label>
                </div>
              ))}
            </div>
          )}
          {profCheckBox === classProfs.choose && (
            <div>
              <div>Your proficiency choices:</div>
              {tempProfArray.map((prof) => (
                <div>{prof}</div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setProfCheckBox(0);
                  setTempProfArray([]);
                }}
              >
                Reset profs
              </button>
              <button type="button" onClick={()=>{skillProficiencies = [...tempProfArray]; console.log(skillProficiencies)}}>
                submit profs
              </button>
            </div>
          )}
        </div>
      </div>
      <div>{name}</div>
      <div>{alignment}</div>
      <div>{race}</div>
      <div>{charClass}</div>
    </div>
  );
};
export default CustomizeForm;
