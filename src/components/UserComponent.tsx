import { JSX, children } from "solid-js";

interface Props {
  children: JSX.Element;
}

export default function (props: Props) {
  const resolved = children(() => props.children);
  return <div>{resolved()}</div>;
}
