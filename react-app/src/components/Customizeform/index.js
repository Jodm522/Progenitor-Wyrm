import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { races, classes, backgrounds } from "../public/context";
import { characterBuilder } from "./statCalc.js";
import { step4Submit } from "../../store/characterFormStep";

import "./customize.css";
import RollStats from "./statsRoll";
const CustomizeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const charDetails = useSelector((state) => state.formStepReducer);
  //! dummy data for now
  //  const  charDetails={
  //    step1Details:{name:"SSSSS", alignment:"SADF"},
  //    step3Details:{charClass:"cleric"},
  //   step2Details:{race:"dragonborn"}
  //  }
  //! variables from state
  const { name, alignment } = charDetails?.step1Details;
  const { charClass } = charDetails?.step3Details;
  const { race } = charDetails?.step2Details;
  const raceInfo = races[race];
  const displayRace = raceInfo?.name;
  const raceStatBonuses = raceInfo?.statBonuses;
  const classInfo = classes[charClass];
  const displayClass = classInfo?.name;
  const armorOptions = classInfo?.startingArmorOptions;
  const classProfs = classInfo?.skillProficiencies;
  //! varibles to be passed to the character builder
  const [charStats, setCharStats] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });
  const speed = raceInfo.speed;
  const prof_bonus = 2;
  const savingThrows = classes[charClass]?.savingThrows;

  let [armorStats, setArmorStats] = useState({ armorName: "None" });
  const hitDie = classInfo?.hitDie;
  const [background, setBackground] = useState("None");
  const [armorHold, setArmorHold] = useState("");
  //! prof checkboxes
  const [profCheckBox, setProfCheckBox] = useState(0);

  const [rolling, setRolling] = useState(false);
  const [step, setStep] = useState(0);
  const [tempProfArray, setTempProfArray] = useState([]);
  const [tempProfArray2, setTempProfArray2] = useState([]);
  let [skillProficiencies, setSkillProficiencies] = useState([]);

  const addProf = (prof) => {
    const newArr = tempProfArray2;
    newArr.push(prof);
    setTempProfArray2([...newArr]);
  };

  const setupBackground = (backArr) => {
    setTempProfArray([]);
    setTempProfArray(backArr);
    setStep(3);
  };
  const finishProfs = () => {
    setSkillProficiencies([...tempProfArray, ...tempProfArray2]);
    setStep(4);
  };
  const backgroundFormSubmit = () => {
    setStep(4);
    const newSkillProfs = [...skillProficiencies];
    setSkillProficiencies([newSkillProfs]);
  };

  const armorFunc = (armor) => {
    setArmorHold(armor.index);
    setArmorStats({ ...armor });
  };

  //! other state variables
  const [hasrolled, setHasRolled] = useState(false);
  //!seeing if armor can be automatically set

  //! get base stats based on race
  const SetRaceStats = () => {
    const finalobj = charStats;
    for (const key in raceStatBonuses) {
      finalobj[key] += raceStatBonuses[key];

      setCharStats({ ...finalobj });
    }
  };
  const SetClassStats = () => {
    if (armorOptions?.length === 1) {
      const newArmor = {
        ...armorOptions[0],
      };
      setArmorStats({ ...newArmor });
    }
  };

  //! add rolls to stats
  const addRolls = (rolls) => {
    // const finalobj = charStats;
    // for (const key in rolls) {
    //   finalobj[key] += rolls[key];
    setCharStats({ ...rolls });
    setHasRolled(true);
  };

  //! obj to be passed to the character creator function
  let initalCharStats = {
    baseStats: charStats,
    background,
    prof_bonus,
    skillProficiencies,
    savingThrows,
    armorStats,
    hitDie,
    speed,
  };
  useEffect(() => {
    SetRaceStats();
    SetClassStats();
  }, []);

  const finishStep4 = () => {
    const stats = characterBuilder(initalCharStats);

    dispatch(step4Submit(stats));
    history.push("/characters/magic");
  };

  return (
    <div>
      <div className="topBar">
        <div className="nameHolder">
          <div className="infoFill">{name}</div>
          <div className="infoTitle">Character name</div>
        </div>
        <div className="charInfo">
          <div classname="headClassHolder">
            <div className="infoFill">{displayClass}</div>
            <div className="infoTitle">Class</div>
          </div>
          <div>
            <div className="infoFill">{background}</div>
            <div className="infoTitle">Background</div>
          </div>
          <div>
            <div className="infoFill">PLACEHOLDER</div>
            <div className="infoTitle">Player Name</div>
          </div>
          <div>
            <div className="infoFill">{displayRace}</div>
            <div className="infoTitle">Race</div>
          </div>
          <div>
            <div className="infoFill">{alignment}</div>
            <div className="infoTitle">Alignment</div>
          </div>
          <div>
            <div className="infoFill">0</div>
            <div className="infoTitle">Experience Points</div>
          </div>
        </div>
      </div>

      <div className="baseStats">
        <div className="statDiv">
          <div className="statNum">{charStats.STR}</div>
          <div className="statTitle">STR</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{charStats.DEX}</div>
          <div className="statTitle">DEX</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{charStats.CON}</div>
          <div className="statTitle">CON</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{charStats.INT}</div>
          <div className="statTitle">INT</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{charStats.WIS}</div>
          <div className="statTitle">WIS</div>
        </div>
        <div className="statDiv">
          <div className="statNum"> {charStats.CHA}</div>
          <div className="statTitle">CHA</div>
        </div>
      </div>

      {step === 0 && (
        <div className="rollButton">
          <div className="modalContainer">
            {rolling && (
              <RollStats
                charStats={charStats}
                setRolling={setRolling}
                addRolls={addRolls}
                setStep={setStep}
              />
            )}
          </div>
          <div> First we'll set your base stats</div>
          <button type="button" onClick={() => setRolling(true)}>
            Set Stats
          </button>
        </div>
      )}
      {step === 1 && (
        <div className="customizeFormContainer">
          <div>
            {armorOptions?.length > 1 && (
              <div className="customizeFormContainer">
                <div>
                  This class has armor options, choose one of the following:
                </div>
                <form>
                  <div className="armorOps">
                    {armorOptions.map((arm) => (
                      <div
                        className={
                          armorHold === arm.index
                            ? "armorOpSelected"
                            : "armorOp"
                        }
                      >
                        <input
                          onClick={() => armorFunc(arm)}
                          type="radio"
                          name="armorCheck"
                          id={`${arm?.index}`}
                          required={true}
                        />
                        <label for={`${arm?.index}`}>{arm?.armorName}</label>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            )}

            {armorOptions?.length <= 1 && (
              <div>
                <div>This class doesn't have any armor options...</div>
                <div>You have {armorStats?.armorName}</div>
              </div>
            )}
          </div>
          <button type="button" onClick={() => setStep(2)}>
            Submit Armor
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="profFormDiv">
          {!(profCheckBox === classProfs.choose) && (
            <div>
              <div>Now choose {classProfs.choose} profeciencies</div>
              <div className="profsGrid">
                {classProfs.options.map((prof) => (
                  <div
                    className={
                      tempProfArray.includes(prof.name) ||
                      tempProfArray2.includes(prof.name)
                        ? "profBoxSelected"
                        : "profBox"
                    }
                  >
                    <input
                      type="checkbox"
                      value={prof.name}
                      id={`${prof.name}Check`}
                      isChecked={true}
                      disabled={
                        tempProfArray.includes(prof.name) ||
                        tempProfArray2.includes(prof.name) ||
                        tempProfArray2.length === classProfs.choose
                      }
                      onClick={() => addProf(prof.name)}
                    />
                    <label for={`${prof.name}Check`}>{prof.name}</label>
                  </div>
                ))}
              </div>
              {tempProfArray2.length === classProfs.choose && (
                <button type="button" onClick={finishProfs}>
                  submit profs
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="backgroundsFormContainer">
          <div>Now, choose a background</div>
          <div>
            For a {classInfo.name} we reccommend the {classInfo.sugg_background}{" "}
            background{" "}
          </div>
          <div className="backgroundsForm">
            {backgrounds.map((bg) => (
              <div className="backgroundOp">
                <input
                  type="radio"
                  name="bgCheck"
                  id={`${bg.name}Check`}
                  onClick={(e) => {
                    setupBackground([...bg.skillProficiencies]);
                    setBackground(bg.name);
                  }}
                />
                <label for={`${bg.name}Check`}>{bg.name}</label>
                <div>
                  <div>Added proficiencies:</div>
                  {bg.skillProficiencies.map((prof) => (
                    <div>
                      <div>{prof}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {tempProfArray.length > 0 && (
              <button type="button" onClick={backgroundFormSubmit}>
                SetProfs
              </button>
            )}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="backgroundsFormContainer">
          <button type="button" onClick={finishStep4}>
            Continue to next step
          </button>
        </div>
      )}
    </div>
  );
};
export default CustomizeForm;
