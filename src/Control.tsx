import { setSelectedUser } from "./App";

export default function () {
  return (
    <>
      <button onClick={() => setSelectedUser(1)}>1</button>
      <button onClick={() => setSelectedUser(2)}>2</button>
      <button onClick={() => setSelectedUser(3)}>3</button>
    </>
  );
}
