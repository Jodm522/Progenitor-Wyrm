import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const RollStats = ({ charStats, setRolling, addRolls,setStep }) => {
  const newStats = { ...charStats };
  const [rolls, setRolls] = useState([]);
  const [STR, setSTR] = useState(newStats.STR);
  const [DEX, setDEX] = useState(newStats.DEX);
  const [CON, setCON] = useState(newStats.CON);
  const [INT, setINT] = useState(newStats.INT);
  const [WIS, setWIS] = useState(newStats.WIS);
  const [CHA, setCHA] = useState(newStats.CHA);
  const [rollStep, setRollStep] = useState(0);

  const rollStats = () => {
    const singleRoll = () => Math.floor(Math.random() * 6) + 1;
    const roll1 = singleRoll() + singleRoll() + singleRoll();
    const roll2 = singleRoll() + singleRoll() + singleRoll();
    const roll3 = singleRoll() + singleRoll() + singleRoll();
    const roll4 = singleRoll() + singleRoll() + singleRoll();
    const roll5 = singleRoll() + singleRoll() + singleRoll();
    const roll6 = singleRoll() + singleRoll() + singleRoll();
    setRolls([roll1, roll2, roll3, roll4, roll5, roll6]);
  };
  const strSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setSTR(roll + STR);
    setRolls(newArr);
    setRollStep(2);
  };
  const dexSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setDEX(roll + DEX);
    setRolls(newArr);
    setRollStep(3);
  };
  const conSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setCON(roll + CON);
    setRolls(newArr);
    setRollStep(4);
  };
  const intSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setINT(roll + INT);
    setRolls(newArr);
    setRollStep(5);
  };
  const wisSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setWIS(roll + WIS);
    setRolls(newArr);
    setRollStep(6);
  };
  const chaSet = (roll) => {
    const newArr = rolls;
    const oldIndex = newArr.indexOf(roll);
    newArr.splice(oldIndex, 1);
    setCHA(roll + CHA);
    setRolls(newArr);
    setRollStep(7);
  };
  const finishRolls=()=>{
    addRolls({STR,DEX,CON,INT,WIS,CHA})
    setRolling(false)
    setStep(1)
  }
  return (
    <div className="modal">
      <div className="baseStats">
        <div className="statDiv">
          <div className="statNum">{STR}</div>
          <div className="statTitle">STR</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{DEX}</div>
          <div className="statTitle">DEX</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{CON}</div>
          <div className="statTitle">CON</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{INT}</div>
          <div className="statTitle">INT</div>
        </div>
        <div className="statDiv">
          <div className="statNum">{WIS}</div>
          <div className="statTitle">WIS</div>
        </div>
        <div className="statDiv">
          <div className="statNum"> {CHA}</div>
          <div className="statTitle">CHA</div>
        </div>
      </div>

      {rollStep===0 &&
      <div>
      <div>Would you rather roll stats here or input them yourself?</div>
      <button type="button" onClick={()=>(rollStats(), setRollStep(1))}>
        Roll for me
      </button>
      <button type="button" onClick={rollStats}>
        I want to input
      </button>
      </div>
      }
      <div className="statsRolled">
        {rollStep === 1 && (
          <div>
            <div className="statSet"> First we'll set the STR stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  strSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 2 && (
          <div>
            <div className="statSet"> Next we'll set the DEX stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  dexSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 3 && (
          <div>
            <div className="statSet"> Now we'll set the CON stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  conSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 4 && (
          <div>
            <div className="statSet"> Now we'll set the INT stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  intSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 5 && (
          <div>
            <div className="statSet"> Now we'll set the WIS stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  wisSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 6 && (
          <div>
            <div className="statSet"> Lastly we'll set the CHA stat</div>
            {rolls.map((roll) => (
              <button
                type="button"
                onClick={() => {
                  chaSet(roll);
                }}
              >
                {roll}
              </button>
            ))}
          </div>
        )}
        {rollStep === 7 && (
          <div>
            <div>
              <button type="button" onClick={finishRolls}>
                Complete and continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RollStats;
