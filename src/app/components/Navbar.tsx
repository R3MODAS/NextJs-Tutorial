import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar p-5 flex items-center gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/admin"}>Admin</Link>
    </header>
  );
};

export default Navbar;
