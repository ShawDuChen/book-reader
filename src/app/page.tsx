import Header from "@/components/header/header";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className=" w-screen h-screen flex flex-col">
      <Header />
      <section className="content flex flex-row h-full overflow-auto">
        <aside className="aside w-48 p-8">
          <ul className="space-y-1">
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/1"}>1</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/2"}>2</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/3"}>3</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/4"}>4</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/5"}>5</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/6"}>6</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/7"}>7</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/8"}>9</Link>
            </li>
            <li className=" text-blue-500 hover:underline cursor-pointer">
              <Link href={"/category/9"}>9</Link>
            </li>
          </ul>
        </aside>
        <main className="main flex-1 p-8"></main>
      </section>
      <section className="footer flex h-16 px-8 text-center items-center justify-center">
        &copy; copyright content;
      </section>
    </section>
  );
}
