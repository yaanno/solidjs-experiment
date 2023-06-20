import { UserType } from "../model";

export default function ({ user }: { user: UserType }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        <li>{user.first_name()}</li>
        <li>{user.email}</li>
        <li>{user.website}</li>
      </ul>
    </div>
  );
}
