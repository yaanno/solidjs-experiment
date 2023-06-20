import { ErrorBoundary, For, Resource, Show, Suspense } from "solid-js";
import Control from "../Control";
import User from "../components/UserComponent";
import Post from "../components/PostComponent";
import { PostType, UserType } from "../model";

interface Props {
  currentUser: UserType;
  posts: Resource<PostType[]>;
}

export default function (props: Props) {
  return (
    <>
      <Control />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading user...</p>}>
          <Show when={props.currentUser.id} fallback={<p>Wait, what?</p>}>
            <User>
              <h1>{props.currentUser.name}</h1>
              <ul>
                <li>{props.currentUser.username}</li>
                <li>{props.currentUser.email}</li>
                <li>{props.currentUser.website}</li>
              </ul>
            </User>
          </Show>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading posts...</p>}>
          <div>
            <For each={props.posts()}>{(post) => <Post post={post} />}</For>
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
