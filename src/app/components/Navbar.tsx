import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-purple-500 text-white p-5 flex items-center gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/products"}>Products</Link>
    </header>
  );
};

export default Navbar;
