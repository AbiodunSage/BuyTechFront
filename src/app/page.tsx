import Image from "next/image";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import Products from "./ProductsPage/page";
import Cart from "./Cart/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid">
        <SideBar />
        <SearchBar />
      </div>

      {/* <Products />

      <Cart /> */}
    </main>
  );
}
