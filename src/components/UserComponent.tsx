import { JSX, children } from "solid-js";
import { UserType } from "../model";

interface Props {
  user: UserType;
  children?: JSX.Element;
}

export default function (props: Props) {
  const user = () => props.user;
  const resolved = children(() => props.children);
  return (
    <div>
      <h1>{user().name}</h1>
      <ul>
        <li>{user().username}</li>
        <li>{user().email}</li>
        <li>{user().website}</li>
      </ul>
      {resolved()}
    </div>
  );
}
