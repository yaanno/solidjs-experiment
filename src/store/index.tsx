import { createContext, useContext } from "solid-js";
import type { JSX } from "solid-js";
import { createStore } from "solid-js/store";

const UserContext = createContext();

export function UserProvider(props: any): JSX.Element {
  const [currentUser, setCurrentUser] = createStore();
  const userObj = [
    currentUser,
    {
      setUser(userId: number) {
        setCurrentUser(function (prev) {
          return (prev = {
            id: userId,
            loggedIn: true,
          });
        });
      },
    },
  ];
  return (
    <UserContext.Provider value={userObj}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useStore() {
  return useContext(UserContext);
}
