import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
// import formStepReducer from "../../store/characterFormStep";
// import { getModalClass } from "../../store/modalStore";
import { races, classes} from "../public/context";
import { createCharacter } from "../../store/characterFormStep";
import "./weapons.css";

export default function WeaponsandMagic() {
  const dispatch = useDispatch();
  const history= useHistory();
  // const dummydata = {
  //   step1Details: { name: "Jimbo", alignment: "CN" },
  //   step2Details: { race: "dwarf" },
  //   step3Details: { charClass: "bard" },
  //   step4Details: {
  //     charStats: {
  //       ac: 8,
  //       armorStats: {
  //         armorName: "Leather Armor",
  //         armorType: "light_armor",
  //         index: "leather",
  //       },

  //      background: "Acolyte",
  //       stats:{ basestats: { CHA: 14, CON: 15, DEX: 5, INT: 10, STR: 8, WIS: 11 }, mods:{STRMOD:-1,DEXMOD:-1,CONMOD:-1,INTMOD:-1,WISMOD:-1,CHAMOD:-1}, speed:30},
  //       hitDie: 8,
  //       max_hp: 10,
  //       passive_perception: 10,
  //       prof_bonus: 2,
  //       saving_throws: { CHA: 4, CON: 2, DEX: -1, INT: 0, STR: -1, WIS: 0 },
  //       skillProficiencies: ["Insight", "Religion"],
  //       skills: {
  //         acrobatics: -3,
  //         animal_handling: 0,
  //         arcana: 0,
  //         athletics: -1,
  //         deception: 2,
  //         history: 0,
  //         insight: 0,
  //         intimidation: 2,
  //         investigation: 0,
  //         medicine: 0,
  //         nature: 0,
  //         perception: 0,
  //         performance: 2,
  //         persuasion: 2,
  //         religion: 0,
  //         sleight_of_hand: -3,
  //         stealth: -3,
  //         survival: 0,
  //       },
  //     },
  //   },
  // };const charDetails = dummydata;
  const charDetails = useSelector((state) => state.formStepReducer);
  const user = useSelector((state) => state.session.user);

  const { name, alignment } = charDetails?.step1Details;
  const { background, stats, skills, saving_throws } =
    charDetails?.step4Details.charStats;
  const { charStats } = charDetails?.step4Details;
  //! getting race info from state
  const { race } = charDetails?.step2Details;
  const raceInfo = races[race];
  const displayRace = raceInfo?.name;
  //! getting class info form state
  const { charClass } = charDetails?.step3Details;
  const classInfo = classes[charClass];
  const displayClass = classInfo?.name;
  const startingWeapons = classInfo.starting_weapons;
  const startingEquipment = classInfo.starting_equip;
  const equipOptions = classInfo.starting_equip_options;

  const [weaponChoicesStore, setWeaponChoicesStore] = useState({ 1: 0, 2: 0 });
  const [equipChoicesStore, setEquipChoicesStore] = useState({ 1: 0, 2: 0 });
  const [spellChoices, setSpellChoices] = useState([]);
  const [cantripChoices, setCantripChoices] = useState([]);
  const [numCantrips, setNumCantrips] = useState(0);
  const [numSpells, setNumSpells] = useState(0);
  const [weapons, setWeapons] = useState(startingWeapons);
  const [equipment, setEquipment] = useState(startingEquipment);
  const [tempWeaponsArr, setTempWeaponsArr] = useState([]);
  const [tempEquipArr, setTempEquipArr] = useState([]);

  const [step, setStep] = useState(2);

  const submitWeapons = () => {

    if (weapons) setWeapons([...weapons, ...tempWeaponsArr]);
    else setWeapons([...tempWeaponsArr]);

    equipOptions.length ? setStep(2) : setStep(3);
  };
  const user_id = user.id;
  const submitEquip = () => {
    setEquipment([...equipment, ...tempEquipArr]);
    setStep(3);

  };
  const finishCharacter=()=>{
dispatch(
  createCharacter(
    user_id,
    name,
    alignment,
    race,
    background,
    charClass,
    charStats,
    spellChoices,
    cantripChoices,
    equipment,
    weapons
  )

);history.push("/myProfile")
  }
  const addEquip = (equip, option) => {
    const newObj = equipChoicesStore;
    const newArr = tempEquipArr;
    newObj[option] += 1;
    newArr.push(equip);
    setEquipChoicesStore({ ...newObj });
    setTempEquipArr([...newArr]);
  };

  const addWeapon = (weapon, option) => {
    const newObj = weaponChoicesStore;
    const newArr = tempWeaponsArr;
    newObj[option] += 1;
    newArr.push(weapon);
    setWeaponChoicesStore({ ...newObj });
    setTempWeaponsArr([...newArr]);
  };
  const addCantrip = (cantrip) => {
    const newArr = cantripChoices;
    let cantripNum = numCantrips;
    newArr.push(cantrip);
    cantripNum += 1;
    setNumCantrips(cantripNum);
    setCantripChoices(newArr);
  };
  const addSpell = (spell) => {
    const newArr = spellChoices;
    let spellNum = numSpells;
    newArr.push(spell);
    spellNum += 1;
    setNumSpells(spellNum);
    setSpellChoices(newArr);
  };
  const resetWeapons = () => {
    setWeaponChoicesStore({ 1: 0, 2: 0 });
    setTempWeaponsArr([]);
  };
  const resetEquip = () => {
    setEquipChoicesStore({ 1: 0, 2: 0 });
    setTempEquipArr([]);
  };
  const resetSpells = () => {
    setSpellChoices([]);
    setCantripChoices([]);
    setNumCantrips(0);
    setNumSpells(0);
  };

  useEffect(() => {
    classInfo.starting_spell_options.hasOptions ? setStep(0) : setStep(1);
  }, []);

  return (
    <div className="weaponForm">
      <div className="topBar2">
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
            <div className="infoFill">{user.username}</div>
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

      <div className="lowerBar">
        <div className="col1">
          <div className="baseStats2">
            <div className="statDiv2">
              <div className="statTitle2">STR</div>
              <div className="statNum2">{stats.basestats?.STR}</div>
              <div className="statMod">{stats.mods.STRMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">DEX</div>
              <div className="statNum2">{stats.basestats?.DEX}</div>
              <div className="statMod">{stats.mods.DEXMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">CON</div>
              <div className="statNum2">{stats.basestats?.CON}</div>
              <div className="statMod">{stats.mods.CONMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">INT</div>
              <div className="statNum2">{stats.basestats?.INT}</div>
              <div className="statMod">{stats.mods.INTMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">WIS</div>
              <div className="statNum2">{stats.basestats?.WIS}</div>
              <div className="statMod">{stats.mods.WISMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">CHA</div>
              <div className="statNum2"> {stats.basestats?.CHA}</div>
              <div className="statMod">{stats.mods.CHAMOD}</div>
            </div>
          </div>
          <div className="profAndsave">
            <div className="inspiration">
              Inspiration:<div className="bigSkillNum">00</div>
            </div>
            <div className="profBonus">
              Proficiency Bonus:<div className="bigSkillNum">00</div>
            </div>
            <div className="saves">
              <div className="skillTitle">Saving Throws</div>
              <div className="skills">
                Strength:<div className="skillNum">{saving_throws.STR}</div>
              </div>
              <div className="skills">
                Dexterity:<div className="skillNum">{saving_throws.DEX}</div>
              </div>
              <div className="skills">
                Constitution:<div className="skillNum">{saving_throws.CON}</div>
              </div>
              <div className="skills">
                Intelligence:<div className="skillNum">{saving_throws.INT}</div>
              </div>
              <div className="skills">
                Wisdom:<div className="skillNum">{saving_throws.WIS}</div>
              </div>
              <div className="skills">
                Charisma:<div className="skillNum">{saving_throws.CHA}</div>
              </div>
            </div>
            <div className="profs">
              <div className="skillTitle">Skills</div>
              <div className="skills">
                Acrobatics: <div className="skillNum">{skills.acrobatics}</div>
              </div>
              <div className="skills">
                Animal Handling:{" "}
                <div className="skillNum">{skills.animal_handling}</div>
              </div>
              <div className="skills">
                Arcana: <div className="skillNum">{skills.arcana}</div>
              </div>
              <div className="skills">
                Athletics: <div className="skillNum">{skills.athletics}</div>
              </div>
              <div className="skills">
                Deception: <div className="skillNum">{skills.deception}</div>
              </div>
              <div className="skills">
                History: <div className="skillNum">{skills.history}</div>
              </div>
              <div className="skills">
                Insight: <div className="skillNum">{skills.insight}</div>
              </div>
              <div className="skills">
                Intimidation:{" "}
                <div className="skillNum">{skills.intimidation}</div>
              </div>
              <div className="skills">
                Investigation:{" "}
                <div className="skillNum">{skills.investigation}</div>
              </div>
              <div className="skills">
                Medicine: <div className="skillNum">{skills.medicine}</div>
              </div>
              <div className="skills">
                Nature: <div className="skillNum">{skills.nature}</div>
              </div>
              <div className="skills">
                Perception: <div className="skillNum">{skills.perception}</div>
              </div>
              <div className="skills">
                Performance:{" "}
                <div className="skillNum">{skills.performance}</div>
              </div>
              <div className="skills">
                Persuasion: <div className="skillNum">{skills.persuasion}</div>
              </div>
              <div className="skills">
                Religion: <div className="skillNum">{skills.religion}</div>
              </div>
              <div className="skills">
                Sleight Of Hand:{" "}
                <div className="skillNum">{skills.sleight_of_hand}</div>
              </div>
              <div className="skills">
                Stealth: <div className="skillNum">{skills.stealth}</div>
              </div>
              <div className="skills">
                Survival: <div className="skillNum">{skills.survival}</div>
              </div>
            </div>
          </div>
        </div>

        {step === 0 && (
          <div className="formContainer">
            {!(
              numCantrips ===
              classInfo.starting_spell_options.cantrip_options.choose
            ) && (
              <div className="formInfo">
                <div className="formTitle">
                  You get{" "}
                  {classInfo.starting_spell_options?.cantrip_options?.choose}{" "}
                  cantrips. Choose from the following:
                </div>
                <div className="formGrid">
                  {classInfo.starting_spell_options?.cantrip_options?.from?.map(
                    (cantrip) => (
                      <div
                        className={
                          cantripChoices?.includes(cantrip)
                            ? "formCheckSelected"
                            : "formCheck"
                        }
                      >
                        <input
                          type="checkbox"
                          checked={cantripChoices?.includes(cantrip)}
                          id={`${cantrip?.name}`}
                          disabled={
                            cantripChoices.includes(cantrip) ||
                            numCantrips ===
                              classInfo.starting_spell_options.cantrip_options
                                .choose
                          }
                          onClick={() => addCantrip(cantrip)}
                        ></input>
                        <label for={`${cantrip?.name}`}>{cantrip?.name}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {!(
              numSpells ===
              classInfo.starting_spell_options?.spell_options?.choose
            ) && (
              <div className="formInfo">
                <div className="formTitle">
                  You get{" "}
                  {classInfo.starting_spell_options.spell_options?.choose}{" "}
                  spells. Choose from the following:
                </div>
                <div className="formGrid">
                  {classInfo.starting_spell_options.spell_options?.from?.map(
                    (spell) => (
                      <div
                        className={
                          spellChoices.includes(spell)
                            ? "formCheckSelected"
                            : "formCheck"
                        }
                      >
                        <input
                          type="checkbox"
                          checked={spellChoices.includes(spell)}
                          id={`${spell?.name}`}
                          disabled={
                            spellChoices.includes(spell) ||
                            numSpells ===
                              classInfo.starting_spell_options?.spell_options
                                ?.choose
                          }
                          onClick={() => addSpell(spell)}
                        ></input>
                        <label for={`${spell?.name}`}>{spell?.name}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {classInfo.starting_spell_options.spell_options?.choose ===
              numSpells &&
              classInfo.starting_spell_options.cantrip_options?.choose ===
                numCantrips && (
                <div>
                  <div className="spell-cant">
                    <div className="listBox">
                      <div>Cantrips:</div>
                      {cantripChoices?.map((cantrip) => (
                        <div>{cantrip?.name}</div>
                      ))}
                    </div>
                    <div className="listBox">
                      <div>Spells:</div>
                      {spellChoices?.map((spell) => (
                        <div>{spell?.name}</div>
                      ))}
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <button type="button" onClick={() => setStep(1)}>
                      Submit Spells
                    </button>
                    <button type="button" onClick={resetSpells}>
                      Reset Spells
                    </button>
                  </div>
                </div>
              )}
          </div>
        )}

        {step === 1 && (
          <div className="formContainer">
            <div className="formTitle">
              Now we'll pick weapons for your character
            </div>
            <div>
              {classInfo.starting_weap_options?.map((option) => (
                <div>
                  <div>
                    <div>
                      {option.option})Pick {option.choose} of the following:
                    </div>
                    <div className="formGrid">
                      {option.from.map((weapon) => (
                        <div
                          className={
                            tempWeaponsArr?.includes(weapon)
                              ? "formCheckSelected"
                              : "formCheck"
                          }
                        >
                          <input
                            id={`${weapon.weapon.name}${option.option}`}
                            type="checkbox"
                            checked={tempWeaponsArr.includes(weapon)}
                            disabled={
                              weaponChoicesStore[option.option] ===
                              option.choose
                            }
                            onClick={() => {
                              addWeapon(weapon, option.option);
                            }}
                          ></input>
                          <label for={`${weapon.weapon.name}${option.option}`}>
                            {weapon.quantity} {weapon.weapon.name} Damage: d
                            {weapon.weapon.damage}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={resetWeapons}>
              Reset Weapons
            </button>
            <button type="button" onClick={submitWeapons}>
              Submit Weapons
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="formContainer">
            <div className="formTitle">
              Finally we'll pick equipment for your character
            </div>
            <div>
              {equipOptions.map((option) => (
                <div>
                  <div>
                    <div>
                      {option.option})Pick {option.choose} of the following:
                    </div>
                    <div className="formGrid">
                      {option.from.map((equip) => (
                        <div
                          className={
                            tempEquipArr.includes(equip)
                              ? "formCheckSelected"
                              : "formCheck"
                          }
                        >
                          <input
                            id={`${equip.name}${option.option}`}
                            type="checkbox"
                            checked={tempEquipArr.includes(equip)} //!
                            disabled={
                              equipChoicesStore[option.option] === option.choose
                            }
                            onClick={() => {
                              addEquip(equip, option.option);
                            }}
                          ></input>
                          <label for={`${equip.name}${option.option}`}>
                            {equip.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={resetEquip}>
              Reset Equipment
            </button>
            <button type="button" onClick={submitEquip}>
              Submit Equipment
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <div>
              <button type="button" onClick={finishCharacter}>
                Submit and go to character page
              </button>
            </div>
          </div>
        )}
        <div className="col2">
          <div className="ac-init-speed">
            <div className="statHold">
              <div>{charStats.ac}</div>
              <div>Armor Class</div>
            </div>
            <div className="statHold">
              <div>{stats.mods.DEXMOD}</div>
              <div>Initiative</div>
            </div>
            <div className="statHold">
              <div>{stats.speed}</div>
              <div>Speed</div>
            </div>
          </div>
          <div className="health">
            <div className="statHealth">
              <div>
                {charStats.max_hp}/{charStats.max_hp}
              </div>
              <div>HP</div>
            </div>
            <div className="statHoldMedium">
              <div>00</div>
              <div>Temporary HP</div>
            </div>
          </div>
          <div className="subCol1">
            <div className="weap-equip">
              <div className="listBox">
                <div className="listBoxTitle">Weapons</div>
                {weapons?.map((weapon) => (
                  <div className="listBoxItem">
                    {weapon.quantity} {weapon.weapon.name}
                  </div>
                ))}
              </div>
              <div className="listBox">
                <div className="listBoxTitle">Equipment</div>
                {equipment.map((equip) => (
                  <div>{equip.name}</div>
                ))}
              </div>
            </div>
            <div className="spell-cant">
              <div className="listBox">
                <div className="listBoxTitle">Cantrips</div>
                {cantripChoices?.map((cantrip) => (
                  <div>{cantrip?.name}</div>
                ))}
              </div>
              <div className="listBox">
                <div className="listBoxTitle">Spells</div>
                {spellChoices?.map((spell) => (
                  <div>{spell?.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
