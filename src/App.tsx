import {
  createResource,
  createMemo,
  createSignal,
  createEffect,
} from "solid-js";
import { useUserContext } from "./context";
import { fetchUser, fetchPosts } from "./service";
import { createStore, unwrap } from "solid-js/store";
import Page from "./page";
import { PostType } from "./model";

export const [selectedUser, setSelectedUser] = createSignal<
  number | undefined
>();

// controller-like thing. does the fetch and passes data to "render" component
function App() {
  // @ts-ignore
  const { currentUser, setCurrentUser } = useUserContext();
  const [userPosts, setUserPosts] = createStore<PostType[]>([]);

  const selectedUserId = createMemo(function (): number | undefined {
    return selectedUser();
  });

  const currentUserId = createMemo(function (): number | undefined {
    if (currentUser.id) {
      return unwrap(currentUser).id;
    }
  });

  const [user] = createResource(selectedUserId, fetchUser, {
    name: "userResource",
  });

  const [posts] = createResource(currentUserId, fetchPosts, {
    name: "postsResource",
    initialValue: [],
  });

  createEffect(() => {
    if (user()) {
      setCurrentUser(user());
    }
    if (posts().length) {
      setUserPosts(posts());
    }
  });

  return Page({ currentUser, userPosts });
}

export default App;
