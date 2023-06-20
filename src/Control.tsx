import { useStore } from "./store";

export default function () {
  // @ts-ignore
  const [_, { setUser }] = useStore();

  return (
    <>
      <button onClick={() => setUser(1)}>1</button>
      <button onClick={() => setUser(2)}>2</button>
    </>
  );
}
