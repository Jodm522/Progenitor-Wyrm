import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const RollStats = () => {
  const [charStats, setCharStats] = useState({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });
  const rollStats = ()=>{
    const singleRoll = ()=> Math.floor(Math.random() * 6) + 1
    const roll1 = singleRoll() + singleRoll() + singleRoll()
    const roll2 = singleRoll() + singleRoll() + singleRoll();
    const roll3 = singleRoll() + singleRoll() + singleRoll();
    const roll4 = singleRoll() + singleRoll() + singleRoll();
    const roll5 = singleRoll() + singleRoll() + singleRoll();
    const roll6 = singleRoll() + singleRoll() + singleRoll();
    return [roll1,roll2,roll3,roll4,roll5,roll6]
  }
  const rolledStats= rollStats()
  return (
    <div>
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

      <div>Would you rather roll stats here or input them yourself?</div>
      <div>
        {rolledStats.map((stat) => (
          <div>{stat}</div>
        ))}
      </div>
    </div>
  );
};
export default RollStats;
