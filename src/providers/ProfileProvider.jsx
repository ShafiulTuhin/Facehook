import { useReducer } from "react";
import { ProfileContext } from "../context";
import { prodileReducer, initialState } from "../reducers/ProfileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(prodileReducer, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
