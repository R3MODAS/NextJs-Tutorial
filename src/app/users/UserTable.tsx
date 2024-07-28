import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "name" ? (user) => user.name : (user) => user.email
  );

  return (
    <>
      <table className="table table-bordered w-1/2 mx-auto">
        <thead>
          <tr>
            <th className="text-base">
              <Link href={"/users?sortOrder=name"}>Name</Link>
            </th>
            <th className="text-base">
              <Link href={"/users?sortOrder=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortOrder ? (
            <>
              {sortedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>

      <div className="flex items-center justify-center my-5">
        <Link href={"/users"} className="bg-blue-500 px-4 py-3 rounded-md">
          Reset Sort
        </Link>
      </div>
    </>
  );
};

export default UserTable;
