import React from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import SetUsername from "./components/SetUsername";
import { useProfile } from "./utilities/profile";
import history from "./utilities/history";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";
import CreateUser from "./components/CreateUser";

function App() {
  const { profile, setProfile, clearProfile } = useProfile();

  return (
    <div>
      <Router history={history}>
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
              <Link to="/create-profile">Create Profile</Link>
            </li>
            <li>
              <Link to="/set-profile">Set Profile</Link>
            </li>
            <li>
              <Link to="/rooms">View Rooms</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create-profile">
            <CreateUser setProfile={setProfile} />
          </Route>
          <Route path="/set-profile">
            <SetUsername setProfile={setProfile} />
          </Route>
          <Route path="/rooms" exact>
            <Rooms />
          </Route>
          <Route path="/rooms/:id" exact>
            <Chat profile={profile} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
