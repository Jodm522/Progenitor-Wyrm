import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {races} from "./context"

const CustomizeForm=()=>{
const charSetup={ baseStats:{STR:0,DEX:0,CON:0,INT:0,WIS:0,CHA:0},mods:{}}

const char = useSelector((state)=> state)
const race = char.race

return(
    <div></div>
)


}
export default CustomizeForm
