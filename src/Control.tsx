import { setSelectedUser } from "./store";

export default function () {
  return (
    <nav>
      <button onClick={() => setSelectedUser(1)}>1</button>
      <button onClick={() => setSelectedUser(2)}>2</button>
      <button onClick={() => setSelectedUser(3)}>3</button>
    </nav>
  );
}
