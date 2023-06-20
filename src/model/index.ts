export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface UserSpec {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface PostSpec {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// instead of class lets use a crock style "class"
// as model templates

export type UserType = ReturnType<typeof createUser>;
export type PostType = ReturnType<typeof createPost>;

export function createUser(spec: UserSpec) {
  const { username } = spec;
  function first_name() {
    return username;
  }
  return Object.freeze({
    ...spec,
    first_name,
  });
}

export function createPost(spec: PostSpec) {
  return Object.freeze({
    ...spec,
  });
}
