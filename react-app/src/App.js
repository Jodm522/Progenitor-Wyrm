import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import CreationForm from "./components/Creationform";
import CustomizeForm from "./components/Customizeform";
import WeaponsandMagic from "./components/Weapons-Magic-form/weapons-magic";
import ProfilePage from "./components/profile/profilePage";
import CharacterPage from "./components/characterPage/index.js";
import Home from "./components/homePage/home";
function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <ProtectedRoute path="/characters/create" exact>
          <CreationForm />
        </ProtectedRoute>
        <ProtectedRoute path="/characters/customize" exact>
          <CustomizeForm />
        </ProtectedRoute>
        <ProtectedRoute path ="/characters/magic" exact>
          <WeaponsandMagic />
        </ProtectedRoute>
        <Route path="/myProfile">
          <ProfilePage/>
        </Route>
        <ProtectedRoute path="/characters/:charId">
        <CharacterPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
