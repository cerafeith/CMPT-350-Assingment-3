import { useEffect, useState } from "react";
import history from "./history";

export function useProfile() {
  const initialState = () =>
    JSON.parse(window.localStorage.getItem("profile") || null);

  const [profile, setProfile] = useState(initialState);

  function setProfileValue(profileValue) {
    setProfile(profileValue);
  }

  function clearProfile() {
    if (window.confirm("Are you sure you want to logout?")) {
      setProfile(null);

      history.push("/set-profile");
    }
  }

  useEffect(
    () => window.localStorage.setItem("profile", JSON.stringify(profile)),
    [profile]
  );

  return { profile, setProfile: setProfileValue, clearProfile };
}
