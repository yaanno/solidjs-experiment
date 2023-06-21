import { ErrorBoundary, For, Show, Suspense, SuspenseList } from "solid-js";
import Control from "../Control";
import User from "../components/UserComponent";
import Post from "../components/PostComponent";
import LoadingComponent from "../components/LoadingComponent";
import { PostType, UserType } from "../model";

interface Props {
  user: () => UserType | undefined;
  posts: () => PostType[];
}

export default function ({ props }: { props: Props }) {
  return (
    <main>
      <Control />
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <ErrorBoundary fallback="Something went wrong">
          <section>
            <Suspense fallback={<LoadingComponent />}>
              <Show when={props.user() !== undefined}>
                <User user={props.user()!}></User>
              </Show>
            </Suspense>
          </section>
        </ErrorBoundary>
        <ErrorBoundary fallback="Something went wrong">
          <section>
            <Suspense fallback={<LoadingComponent />}>
              <Show when={props.posts()}>
                <For each={props.posts()}>{(post) => <Post post={post} />}</For>
              </Show>
            </Suspense>
          </section>
        </ErrorBoundary>
      </SuspenseList>
    </main>
  );
}
