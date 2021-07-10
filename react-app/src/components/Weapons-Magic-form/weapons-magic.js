import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import formStepReducer from "../../store/characterFormStep";
import { getModalClass } from "../../store/modalStore";
import { classes } from "../Customizeform/context";

export default function WeaponsandMagic() {
  const charClass = "warlock";
  const classInfo = classes[charClass];
  const startingWeapons = classInfo.starting_weapons;
  const startingEquipment =classInfo.starting_equip;
  const equipOptions =classInfo.starting_equip_options;
  const dispatch = useDispatch();
  const [weaponChoicesStore, setWeaponChoicesStore] = useState({ 1: 0, 2: 0 });
   const [equipChoicesStore, setEquipChoicesStore] = useState({ 1: 0, 2: 0 });
  const [spellChoices, setSpellChoices] = useState([]);
  const [cantripChoices, setCantripChoices] = useState([]);
  const [numCantrips, setNumCantrips] = useState(0);
  const [numSpells, setNumSpells] = useState(0);
  const [weapons, setWeapons]= useState(startingWeapons)
  const [equipment, setEquipment] = useState(startingEquipment);
  const [tempWeaponsArr, setTempWeaponsArr] = useState([]);
  const [tempEquipArr, setTempEquipArr] = useState([]);

  const [step, setStep] = useState(2);

  const submitWeapons=()=>{
    console.log(tempWeaponsArr)
    setWeapons([...weapons, ...tempWeaponsArr])
    console.log(weapons)
    equipOptions.length? setStep(2):setStep(3)
  }
  const submitEquip = () => {
    setEquipment([...equipment, ...tempEquipArr]);
    setStep(3)
  };
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
    console.log("ADDING ", cantrip);
    const newArr = cantripChoices;
    let cantripNum = numCantrips;
    newArr.push(cantrip);
    cantripNum += 1;
    setNumCantrips(cantripNum);
    setCantripChoices(newArr);
  };
  const addSpell = (spell) => {
    console.log("ADDING ", spell);
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
    <div>
      <div>
        <div>Weapons:</div>
        {weapons.map((weapon) => (
          <div>
            {weapon.quantity} {weapon.weapon.name}
          </div>
        ))}
      </div>
      <div>
        <div>Cantrips:</div>
        {cantripChoices?.map((cantrip) => (
          <div>{cantrip?.name}</div>
        ))}
        <div>Spells:</div>
        {spellChoices?.map((spell) => (
          <div>{spell?.name}</div>
        ))}
      </div>
      <div>
        <div>Equipment:</div>
        {equipment.map((equip) => (
          <div>{equip.name}</div>
        ))}
      </div>
      {step === 0 && (
        <div>
          <div>This class has magic options.</div>
          <div>
            You get {classInfo.starting_spell_options?.cantrip_options?.choose}{" "}
            cantrips. Choose from the following:
            {classInfo.starting_spell_options?.cantrip_options?.from?.map(
              (cantrip) => (
                <div>
                  <input
                    type="checkbox"
                    checked={cantripChoices?.includes(cantrip)}
                    id={`${cantrip?.name}`}
                    disabled={
                      cantripChoices.includes(cantrip) ||
                      numCantrips ===
                        classInfo.starting_spell_options.cantrip_options.choose
                    }
                    onClick={() => addCantrip(cantrip)}
                  ></input>
                  <label for={`${cantrip?.name}`}>{cantrip?.name}</label>
                </div>
              )
            )}
          </div>
          <div>
            You get {classInfo.starting_spell_options.spell_options?.choose}{" "}
            spells. Choose from the following:
            {classInfo.starting_spell_options.spell_options?.from?.map(
              (spell) => (
                <div>
                  <input
                    type="checkbox"
                    checked={spellChoices.includes(spell)}
                    id={`${spell?.name}`}
                    disabled={
                      spellChoices.includes(spell) ||
                      numSpells ===
                        classInfo.starting_spell_options?.spell_options?.choose
                    }
                    onClick={() => addSpell(spell)}
                  ></input>
                  <label for={`${spell?.name}`}>{spell?.name}</label>
                </div>
              )
            )}
          </div>
          <button type="button" onClick={resetSpells}>
            Reset Spells
          </button>
          {classInfo.starting_spell_options.spell_options?.choose ===
            numSpells &&
            classInfo.starting_spell_options.cantrip_options?.choose ===
              numCantrips && (
              <div>
                <button type="button" onClick={() => setStep(1)}>
                  Submit Spells
                </button>
              </div>
            )}
        </div>
      )}

      {step === 1 && (
        <div>
          <div>Now we'll pick weapons for your character</div>
          <div>
            {classInfo.starting_weap_options?.map((option) => (
              <div>
                <div>
                  <div>
                    {option.option})Pick {option.choose} of the following:
                  </div>
                  {option.from.map((weapon) => (
                    <div>
                      <input
                        id={`${weapon.weapon.name}${option.option}`}
                        type="checkbox"
                        checked={tempWeaponsArr.includes(weapon)}
                        disabled={
                          weaponChoicesStore[option.option] === option.choose
                        }
                        onClick={() => {
                          console.log(weapon);
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
        <div>
          <div>Finally we'll pick equipment for your character</div>
          <div>
            {equipOptions.map((option) => (
              <div>
                <div>
                  <div>
                    {option.option})Pick {option.choose} of the following:
                  </div>
                  {option.from.map((equip) => (
                    <div>
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
      {step === 3 && <div>everything chosen</div>}
    </div>
  );
}
