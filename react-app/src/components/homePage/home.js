import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { getAllCharacters } from "../../store/characterFormStep";
import "./homepage.css";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  const characters = useSelector(
    (state) => state.formStepReducer[0]?.characters
  );

  return (
    <div>
        <h1 className="homeHead">Recent Wyrm Creations</h1>
      <div className="charactersGrid">
        {characters?.map((char) => (
          <div className="charContain">
            <NavLink to={`/characters/${char.id}`}>
              <div>{char.name}</div>
              <div>{char.race}</div>
              <div>{char.charClass}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
