import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { formStepFunc } from "../../store/characterFormStep";
import { getClasses } from "../../store/classStore";

import { getModalClass } from "../../store/modalStore";
import ClassDetails from "./classModal";
import { step3Submit } from "../../store/characterFormStep";

const Step3 = ({step4Start}) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [step3Complete, setStep3Complete] = useState(false);
  const [charClass, setCharClass] = useState("");
  const [modal, setModal] = useState(false);

  const openModal = (e) => {

    dispatch(getModalClass(e.target.id));
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const finishStep3 = (e) => {
    setStep3Complete(true);
    dispatch(formStepFunc(4));
    dispatch(step3Submit(charClass));
    step4Start();
  };


  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  const classes = useSelector((state) => {
    return state?.classReducer.results;
  });

  // const step3Edit = (e) => {
  //   setStep3Complete(false);
  // };
  return (
    <div className="step3Div">
      {modal && (
        <div className="modalContainer">
          <ClassDetails modal={modal} closeModal={closeModal} />
        </div>
      )}
      {step3Complete === false && (
        <div>
          <form>
            <div
              className="classButtonMatrix"
              onChange={(e) => {
                setCharClass(e.target.value);
              }}
            >
              {classes && (
                <div className="classButtonMatrix">
                  {classes.map((thisClass) => (
                    <div
                      className={
                        charClass === thisClass.index
                          ? "classButtonSelected"
                          : "classButton"
                      }
                    >
                      <input
                        type="radio"
                        name="raceCheck"
                        value={thisClass.index}
                        id={`${thisClass.name}Check`}
                        required={true}
                      />
                      <label for={`${thisClass.name}Check`}>
                        {thisClass.name}
                      </label>
                      <div>
                        <button
                          id={thisClass.index}
                          className="button"
                          type="button"
                          onClick={openModal}
                        >
                          More info
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button type="button" onClick={finishStep3}>
              Continue to next Step
            </button>
          </form>
        </div>
      )}
      {/* {step3Complete && (
        <div>
          <div>{charClass}</div>
          <button type="button" onClick={step3Edit} onClick={step4Start}>
            Edit Step 3
          </button>
        </div>
      )} */}
    </div>
  );
};
export default Step3;
