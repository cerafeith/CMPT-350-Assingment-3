import { useEffect, useState } from "react";

export function useProfile() {
  const initialState = () => JSON.parse(window.localStorage.getItem("profile") || null);

  const [profile, setProfile] = useState(initialState);

  function setProfileValue(profileValue) {
    setProfile(profileValue);
  }

  function clearProfile() {
    setProfile(null);
  }

  useEffect(
    () => window.localStorage.setItem("profile", JSON.stringify(profile)),
    [profile]
  );

  return { profile, setProfile: setProfileValue, clearProfile };
}
