import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { getUserCharacters } from "../../store/characterFormStep";
import "./profile.css";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;
  useEffect(() => {
    dispatch(getUserCharacters(userId));
  }, [dispatch]);
  const characters = useSelector(
    (state) => state.formStepReducer[0]?.characters
  );

  return (
    <div>
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
        <div className="charContain">
          <NavLink to="/characters/create">Create new</NavLink>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
