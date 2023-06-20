import { createContext, useContext } from "solid-js";
import type { JSX } from "solid-js";
import { createStore } from "solid-js/store";

const UserContext = createContext();

export function UserProvider(props: any): JSX.Element {
  const [currentUser, setCurrentUser] = createStore();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
