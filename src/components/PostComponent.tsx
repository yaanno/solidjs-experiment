import { PostType } from "../model";

export default function ({ post }: { post: PostType }) {
  return (
    <div class="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
