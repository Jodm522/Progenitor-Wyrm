import React, { useEffect } from "react";

import {
  // BrowserRouter,
  // Route,
  // Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneCharacter,
  DeleteCharacter,
} from "../../store/characterFormStep";
import "./character.css";
function CharacterPage() {
  const history = useHistory();
  const { charId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCharacter(charId));
  }, [dispatch]);

  const charDetails = useSelector(
    (state) => state.formStepReducer[0]?.characters[0]
  );

  const deleteCharacter = () => {
    dispatch(DeleteCharacter(charId));
    history.push("/myProfile");
  };

  const user = useSelector((state) => state.session.user);
  const creator = charDetails?.user_id;
  const alignment = charDetails?.alignment;
  const cantripChoices = charDetails?.cantripChoices[0];
  const charClass = charDetails?.charClass;
  const stats = charDetails?.charStats[0].stats;
  const charStats = charDetails?.charStats[0];
  const background = charDetails?.background;
  const equipment = charDetails?.equipment[0];
  const name = charDetails?.name;
  const race = charDetails?.race;
  const spellChoices = charDetails?.spellChoices[0];
  const weapons = charDetails?.weapons;
  const skills = charDetails?.charStats[0].skills;
  const saving_throws = charDetails?.charStats[0].saving_throws;
  let displayClass;
  let displayRace;
  if (charClass) {
    displayClass = charClass[0].toUpperCase() + charClass.slice(1);
    displayRace = race[0].toUpperCase() + race.slice(1);
  }
  return (
    <div className="weaponForm">
      <div className="topBar2">
        <div className="nameHolder">
          <div className="infoFill">{name}</div>
          <div className="infoTitle">Character name</div>
        </div>

        {creator === user.id && (
          <button type="button" onClick={deleteCharacter}>
            Delete Character
          </button>
        )}

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
              <div className="statNum2">{stats?.baseStats?.STR}</div>
              <div className="statMod">{stats?.mods.STRMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">DEX</div>
              <div className="statNum2">{stats?.baseStats?.DEX}</div>
              <div className="statMod">{stats?.mods.DEXMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">CON</div>
              <div className="statNum2">{stats?.baseStats?.CON}</div>
              <div className="statMod">{stats?.mods.DEXMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">INT</div>
              <div className="statNum2">{stats?.baseStats?.INT}</div>
              <div className="statMod">{stats?.mods.INTMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">WIS</div>
              <div className="statNum2">{stats?.baseStats?.WIS}</div>
              <div className="statMod">{stats?.mods.WISMOD}</div>
            </div>
            <div className="statDiv2">
              <div className="statTitle2">CHA</div>
              <div className="statNum2"> {stats?.baseStats?.CHA}</div>
              <div className="statMod">{stats?.mods.CHAMOD}</div>
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
                Strength:<div className="skillNum">{saving_throws?.STR}</div>
              </div>
              <div className="skills">
                Dexterity:<div className="skillNum">{saving_throws?.DEX}</div>
              </div>
              <div className="skills">
                Constitution:
                <div className="skillNum">{saving_throws?.CON}</div>
              </div>
              <div className="skills">
                Intelligence:
                <div className="skillNum">{saving_throws?.INT}</div>
              </div>
              <div className="skills">
                Wisdom:<div className="skillNum">{saving_throws?.WIS}</div>
              </div>
              <div className="skills">
                Charisma:<div className="skillNum">{saving_throws?.CHA}</div>
              </div>
            </div>
            <div className="profs">
              <div className="skillTitle">Skills</div>
              <div className="skills">
                Acrobatics: <div className="skillNum">{skills?.acrobatics}</div>
              </div>
              <div className="skills">
                Animal Handling:{" "}
                <div className="skillNum">{skills?.animal_handling}</div>
              </div>
              <div className="skills">
                Arcana: <div className="skillNum">{skills?.arcana}</div>
              </div>
              <div className="skills">
                Athletics: <div className="skillNum">{skills?.athletics}</div>
              </div>
              <div className="skills">
                Deception: <div className="skillNum">{skills?.deception}</div>
              </div>
              <div className="skills">
                History: <div className="skillNum">{skills?.history}</div>
              </div>
              <div className="skills">
                Insight: <div className="skillNum">{skills?.insight}</div>
              </div>
              <div className="skills">
                Intimidation:{" "}
                <div className="skillNum">{skills?.intimidation}</div>
              </div>
              <div className="skills">
                Investigation:{" "}
                <div className="skillNum">{skills?.investigation}</div>
              </div>
              <div className="skills">
                Medicine: <div className="skillNum">{skills?.medicine}</div>
              </div>
              <div className="skills">
                Nature: <div className="skillNum">{skills?.nature}</div>
              </div>
              <div className="skills">
                Perception: <div className="skillNum">{skills?.perception}</div>
              </div>
              <div className="skills">
                Performance:{" "}
                <div className="skillNum">{skills?.performance}</div>
              </div>
              <div className="skills">
                Persuasion: <div className="skillNum">{skills?.persuasion}</div>
              </div>
              <div className="skills">
                Religion: <div className="skillNum">{skills?.religion}</div>
              </div>
              <div className="skills">
                Sleight Of Hand:{" "}
                <div className="skillNum">{skills?.sleight_of_hand}</div>
              </div>
              <div className="skills">
                Stealth: <div className="skillNum">{skills?.stealth}</div>
              </div>
              <div className="skills">
                Survival: <div className="skillNum">{skills?.survival}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="ac-init-speed">
            <div className="statHold">
              <div>{charStats?.ac}</div>
              <div>Armor Class</div>
            </div>
            <div className="statHold">
              <div>{stats?.mods?.DEXMOD}</div>
              <div>Initiative</div>
            </div>
            <div className="statHold">
              <div>{stats?.speed}</div>
              <div>Speed</div>
            </div>
          </div>
          <div className="health">
            <div className="statHealth">
              <div>
                {charStats?.max_hp}/{charStats?.max_hp}
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
                {equipment?.map((equip) => (
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
export default CharacterPage;
