import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { races, classes, backgrounds } from "./context";
import { characterBuilder } from "./test.js";
import "./customize.css";
const CustomizeForm = () => {
  const dispatch = useDispatch();
  // const charDetails = useSelector((state)=> state.formStepReducer)
  //! dummy data for now
  const charDetails = {
    step1Details: { name: "Donald Lixakstan", alignment: "LG" },
    step2Details: { race: "dwarf" },
    step3Details: { charClass: "cleric" },
  };
  const rolls = { STR: 14, DEX: 8, CON: 13, INT: 10, WIS: 15, CHA: 12 };
  //! variables from state
  const { name, alignment } = charDetails.step1Details;
  const { charClass } = charDetails.step3Details;
  const { race } = charDetails.step2Details;
  const raceInfo = races[race];
  const displayRace= raceInfo.name
  const raceStatBonuses = raceInfo.statBonuses;
  const classInfo = classes[charClass];
  const displayClass = classInfo.name
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

  let [armorStats, setArmorStats] = useState({});
  const hitDie = classInfo.hitDie;
  const [background, setBackground] = useState("None");
  //! prof checkboxes
  const [profCheckBox, setProfCheckBox] = useState(0);
  let [skillProficiencies, setSkillProficiencies] = useState([]);

  const [tempProfArray, setTempProfArray] = useState([]);
  const handleProfChecks = (e) => {
    console.log(tempProfArray);
    const index = tempProfArray.indexOf(e.target.value);
    console.log(e.target.value);
    console.log(index);

    if (index === -1) {
      tempProfArray.push(e.target.value);
    } else {
      tempProfArray.splice(index, 1);
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
  };

  const setupBackground = (backArr) => {
    // console.log(backArr)
    // console.log(newArr)
    const backgroundToSet = backArr[0];
    setBackground(backArr[0]);
    const backgroundProfs = [backArr[1], backArr[2]];
    backArr[0]
      ? (skillProficiencies = [...skillProficiencies, ...backgroundProfs])
      : (skillProficiencies = skillProficiencies);
    setSkillProficiencies(skillProficiencies);
    setBackground(backgroundToSet);
  };

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
        armorType: armorOptions[0].armortype,
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
      {!hasrolled && (
        <div className ="rollButton">
          <div> First we'll set your base stats</div>
        <button type="button" onClick={addRolls}>
          Set Stats
        </button>
        </div>
      )}
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
                  setArmorStats(newArm);
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
            <button
              type="button"
              onClick={() => {
                skillProficiencies = [...tempProfArray];
                console.log(skillProficiencies);
              }}
            >
              submit profs
            </button>
          </div>
        )}
      </div>
      <div>
        <div>Now, choose a background</div>
        <div>
          For a {classInfo.name} we reccommend the {classInfo.sugg_background}{" "}
          background{" "}
        </div>
        <div>
          {backgrounds.map((bg) => (
            <div onChange={setBackground}>
              <input
                type="radio"
                name="bgCheck"
                id={`${bg.name}Check`}
                onClick={(e) =>
                  setupBackground([bg.name, ...bg.skillProficiencies])
                }
              />
              <label for={`${bg.name}Check`}>{bg.name}</label>
              <div>
                <div>This background's added proficiencies:</div>
                {bg.skillProficiencies.map((prof) => (
                  <div>
                    <div>{prof}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>

      <button
        type="button"
        onClick={(e) => console.log(characterBuilder(initalCharStats))}
      >
        click to print
      </button>
    </div>
  );
};
export default CustomizeForm;
