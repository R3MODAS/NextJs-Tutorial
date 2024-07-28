import { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-10">
      <h1 className="mb-5 text-4xl font-semibold text-center">List of Users</h1>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
