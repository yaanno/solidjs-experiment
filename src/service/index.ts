import {
  createPost,
  createUser,
  type User,
  type Post,
  type UserType,
} from "../model";

export async function fetchUser(userId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/`
  );
  if (!response.ok) {
    throw Error("Data fetch failed");
  }
  const user: User = await response.json();
  return createUser(user);
}

export async function fetchPosts(user: UserType) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) {
    throw Error("Data fetch failed");
  }
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter(function (post) {
    return post.userId === user.id;
  });
  return filteredPosts.map(createPost);
}
