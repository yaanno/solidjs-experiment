import { ErrorBoundary, For, Resource, Show, Suspense } from "solid-js";
import Control from "../Control";
import User from "../components/UserComponent";
import Post from "../components/PostComponent";
import { UserType } from "../model";

export default function (props: { userPosts: any; currentUser: UserType }) {
  const userPosts = () => props.userPosts;
  const currentUser = () => props.currentUser;
  return (
    <>
      <Control />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Show
          when={currentUser().id !== undefined}
          fallback={<p>Wait, what?</p>}
        >
          <User user={currentUser()}></User>
        </Show>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Show when={!userPosts().loading} fallback={<p>Loading posts...</p>}>
          <div>
            <For each={userPosts()}>{(post) => <Post post={post} />}</For>
          </div>
        </Show>
      </ErrorBoundary>
    </>
  );
}
