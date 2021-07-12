import React from "react";
import {  useSelector } from "react-redux";

import "./modal.css";
import "./classModal.css";
import "./create-form.css";

export default function RaceDetails({closeModal}) {
  const classToShow = useSelector((state) => {
    return state?.modalReducer;
  });

  return (
    <div className="modal">
      <button onClick={closeModal}>Close</button>
      <div className="classModalTitle">{classToShow.name}</div>
      <div className="modalDetails">
        <div className="classBox1">
          <div className="hitDieDiv">
            Hit Die:
            <div> d{classToShow.hit_die}</div>
          </div>
          <div className="savingThrows">
            <div className="savingThrowsHead">Saving throws:</div>
            <div className="eachSavingThrow">
              {classToShow?.saving_throws?.map((sThrow) => (
                <div>{sThrow.name}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="proficiencies">
          <div className="profTitle">{classToShow.name} proficiencies:</div>
          <div className="eachProf">
            {classToShow?.proficiencies?.map((prof) => (
              <div>{prof.name}</div>
            ))}
          </div>
        </div>

        <div className="startingEquip">
          <div className="startingEquipHead">
            {classToShow.name} starting equipment:
          </div>
          <div className="startingEquipText">
            {classToShow?.starting_equipment?.map((equip) => (
              <div>{equip.equipment.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
