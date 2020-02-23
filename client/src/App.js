import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import SetUsername from "./components/SetUsername";
import {useProfile} from "./utilities/profile";
import history from "./utilities/history";
import Rooms from "./components/Rooms";


function App() {
  const { profile, setProfile } = useProfile();
  if(!profile) {
      history.push("/set-profile");
  }

  return (
    <div>
      <div>
        {profile ? <div>Logged in as: {profile.username}</div> : null}
      </div>
      <Router history={history}>
        <Switch>
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
