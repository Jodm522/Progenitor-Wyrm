import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { formStepFunc } from "../../store/characterFormStep";
import { step1Submit } from "../../store/characterFormStep";

const Step1 = () => {
  const dispatch = useDispatch();
  const [step1Complete, setStep1Complete] = useState(false);
  const [charName, setCharName] = useState();
  const [charAlign, setCharAlign] = useState();

  const finishStep1 = (e) => {
    setStep1Complete(true);
    dispatch(formStepFunc(2));
    dispatch(step1Submit({ name: charName, alignment: charAlign }));
  };

  const step1Edit = (e) => {
    setStep1Complete(false);
  };

  const selectBox = (e) => {
    e.preventDefault();
    const button = e.target.id;
    
  };

  return (
    <div className="step1Div">
      {step1Complete === false && (
        <div className="step1FormContainer">
          <form>
            <div className="inputName">
              <label>Character Name</label>
              <input
                value={charName}
                onChange={(e) => {
                  setCharName(e.target.value);
                }}
                required={true}
              ></input>
            </div>
            <div
              className="alignmentContainer"
              required
              onMouseDown={selectBox}
            >
              <div>Pick you character's alignment:</div>
              <div
                required={true}
                className="alignmentButtonMatrix"
                onChange={(e) => {
                  setCharAlign(e.target.value);
                }}
              >
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"LG"}
                    id="LGCheck"
                    required={true}
                  />
                  <label for="LGCheck">Lawful Good</label>
                </div>
                <div className="checkboxInput">
                  <input
                    required={true}
                    type="radio"
                    name="alignmentCheck"
                    value={"NG"}
                    id="NGCheck"
                  />
                  <label for="NGCheck">Neutral Good</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"CG"}
                    id="CGCheck"
                  />
                  <label for="CGCheck">Chaotic Good</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"LN"}
                    id="LNCheck"
                  />
                  <label for="LNCheck">Lawful Neutral</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"TN"}
                    id="TNCheck"
                  />
                  <label for="TNCheck">True Neutral</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"CN"}
                    id="CNCheck"
                  />
                  <label for="CNCheck">Chaotic Neutal</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"LE"}
                    id="LECheck"
                  />
                  <label for="LECheck">Lawful Evil</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"NE"}
                    id="NECheck"
                  />
                  <label for="NECheck">Neutral Evil</label>
                </div>
                <div className="checkboxInput">
                  <input
                    type="radio"
                    name="alignmentCheck"
                    value={"CE"}
                    id="CECheck"
                  />
                  <label for="CECheck">Chaotic Evil</label>
                </div>
              </div>
            </div>
            <button onClick={finishStep1}>Continue to next Step</button>
          </form>
        </div>
      )}

      {step1Complete === true && (
        <div>
          <div>{charName}</div>
          <div>{charAlign}</div>
          <button type="button" onClick={step1Edit}>
            Edit Step 1
          </button>
        </div>
      )}
    </div>
  );
};
export default Step1;
