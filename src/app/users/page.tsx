import { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-semibold text-center">List of Users</h1>
      <Link href={"/users/new"} className="btn my-5">
        New User
      </Link>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
