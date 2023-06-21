import { createResource, createMemo, createEffect } from "solid-js";
import { useUserContext } from "./context";
import { fetchUser, fetchPosts } from "./service";
import { unwrap } from "solid-js/store";
import Page from "./page";
import { selectedUser, setUserPosts } from "./store";

// controller-like thing. does the fetch and passes data to "render" component
function App() {
  // @ts-ignore
  const { currentUser, setCurrentUser } = useUserContext();

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

  return Page({ props: { user, posts } });
}

export default App;
