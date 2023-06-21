import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { PostType } from "../model";

export const [selectedUser, setSelectedUser] = createSignal<
  number | undefined
>();

export const [userPosts, setUserPosts] = createStore<PostType[]>([]);
