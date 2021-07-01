import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./modal.css";
import "./create-form.css";



export default function RaceDetails(props){

const classToShow = useSelector((state) => {
  return state?.modalReducer
  })

return (
  <div className="modal">
    <div className="modalTitle">{classToShow.name}</div>
    <div className="hitDieDiv">Hit Die: d{classToShow.hit_die}</div>
    <div className="proficiencies">
      <div className="profTitle">{classToShow.name} proficiencies:</div>
      {classToShow?.proficiencies?.map((prof) => (
        <div>{prof.name}</div>
      ))}
    </div>
    <div className="savingThrows">
      <div className="savingThrowsHead">{classToShow.name} saving throws:</div>
      <div>
        {classToShow?.saving_throws?.map((sThrow) => (
          <div>{sThrow.name}</div>
        ))}
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
