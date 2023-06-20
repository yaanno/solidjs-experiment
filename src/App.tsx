import {
  createResource,
  Suspense,
  createMemo,
  Show,
  For,
  ErrorBoundary,
} from "solid-js";
import { useStore } from "./store";
import { fetchUser, fetchPosts } from "./service";
import Control from "./Control";
import Post from "./components/post";
import User from "./components/user";

function App() {
  // @ts-ignore
  const [currentUser] = useStore();
  const userId = createMemo(function (): number | undefined {
    return currentUser?.id ?? undefined;
  });
  const [user] = createResource(userId, fetchUser, {
    name: "userResource",
  });
  const [posts] = createResource(user, fetchPosts, {
    name: "postsResource",
  });

  return (
    <>
      <Control />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading user...</p>}>
          <Show
            when={user()?.id && !user.loading}
            fallback={<p>Wait, what?</p>}
          >
            <User user={user()!} />
          </Show>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading posts...</p>}>
          <div>
            <For each={posts()}>{(post) => <Post post={post} />}</For>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
