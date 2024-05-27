import Link from "next/link";

export default function HomePage() {
  return (
    <section className=" w-screen h-screen flex flex-col">
      <section className="header flex flex-row justify-between items-center h-16 px-8 bg-gray-200 border-blue-400 rounded-md border">
        <section>logo</section>
        <section>login</section>
      </section>
      <section className="content flex flex-row h-full overflow-auto">
        <aside className="aside w-48 bg-gray-50 p-8">
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
        <main className="main flex-1 bg-gray-200 p-8">
          <section className="mb-5">
            <h1>玄幻榜</h1>
            <ul className="flex flex-row space-x-1">
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
            </ul>
          </section>
          <section>
            <h1>科幻榜</h1>
            <ul className="flex flex-row space-x-1">
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
              <li>小说xxxx</li>
            </ul>
          </section>
        </main>
      </section>
      <section className="footer flex h-16 px-8 text-center items-center justify-center rounded-md border border-blue-400">
        &copy; copyright content;
      </section>
    </section>
  );
}
