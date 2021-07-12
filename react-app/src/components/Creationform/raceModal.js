import React from "react";
import { useSelector } from "react-redux";

import "./raceModal.css";
import "./modal.css";
import "./create-form.css";

export default function RaceDetails({closeModal}) {
  const raceToShow = useSelector((state) => {
    return state?.modalReducer;
  });

  return (
    <div className="modal">
      <button onClick={closeModal}>Close</button>
      <div className="modalTitle">{raceToShow.name}</div>

      <div className="modalDetails">
        <div className="raceStats">
          <div className="raceStatsHead">
            {raceToShow.name} Stats & bonuses:
          </div>
          <div className="raceStatsText">
            <div className="raceBox1">
              <div className="raceSpeedSize">
                <div className="raceSpeed">
                  <div className="raceSpeedText">Speed: {raceToShow.speed}</div>
                </div>
                <div className="raceSize">
                  <div className="raceSizeText">Size: {raceToShow.size}</div>
                </div>
              </div>
            </div>
            <div className="raceAbilityBonuses">
              Ability Bonuses:
              <div className="eachRaceBonus">
                {raceToShow?.ability_bonuses?.map((bonus) => (
                  <div>
                    {bonus.ability_score.name}: {bonus.bonus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="raceAge">
          <div className="raceAgeHead">{raceToShow.name} age:</div>
          <div className="raceAgeText">{raceToShow.age}</div>
        </div>
        <div className="raceAlignment">
          <div className="alignmentHead">
            Suggested {raceToShow.name} alignments:
          </div>
          <div className="raceAlignmentText">{raceToShow.alignment}</div>
        </div>
        <div className="raceLanguages">
          <div className="raceLanguageHead">
            {raceToShow.name} starting languages:
          </div>
          <div clasName="raceLanguageText">{raceToShow.language_desc}</div>
        </div>

        <div className="raceSize">
          <div className="raceSizeHead">{raceToShow.name} size:</div>
          <div className="raceSizeText">{raceToShow.size_description}</div>
        </div>
        {(raceToShow.starting_proficiencies?.length === true) && raceToShow?.starting_proficiencies && (
          <div>
            <div className="raceProficiencies">
              <div className="raceProficienciesHead">
                {raceToShow.name} starting proficiencies:
              </div>


                <div className="raceProficienciesText">
                  {raceToShow?.starting_proficiencies?.map((prof) => (
                    <div>{prof.name}</div>
                  ))}
                </div>

            </div>
          </div>
        )}
        <div className="raceTraits">
          <div className="raceTraitsHead">{raceToShow.name} traits:</div>
          <div className="raceTraitsText">
            {(raceToShow.traits?.length) && raceToShow?.traits?.map((trait) => (
              <div>{trait.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
