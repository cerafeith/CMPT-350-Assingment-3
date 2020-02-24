import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import SetUsername from "./components/SetUsername";
import { useProfile } from "./utilities/profile";
import history from "./utilities/history";
import Rooms from "./components/Rooms";
import CreateUser from "./components/CreateUser";

function App() {
  const { profile, setProfile, clearProfile } = useProfile();

  return (
    <div>
      <nav>
        <ul>
          {profile ? (
            <li>
              <div>Logged in as: {profile.username}</div>
            </li>
          ) : null}
          {profile ? (
            <li onClick={clearProfile}>
              <button>Logout</button>
            </li>
          ) : null}
          <li>
            <a href="/create-profile">Create Profile</a>{" "}
          </li>
          <li>
            <a href="/set-profile">Set Profile</a>{" "}
          </li>
        </ul>
      </nav>
      <Router history={history}>
        <Switch>
          <Route path="/create-profile">
            <CreateUser setProfile={setProfile} />
          </Route>
          <Route path="/set-profile">
            <SetUsername setProfile={setProfile} />
          </Route>
          <Route path="/rooms">
            <Rooms profile={profile} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
