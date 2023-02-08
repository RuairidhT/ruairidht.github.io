import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

export default function Sidebar() {
  return (
    <div
      className="flex flex-col bg-zinc-700 text-zinc-400 shadow items-center"
      style={{ height: "calc(100vh - 30px)" }}
    >
      <ul>
        <li className="hover:text-zinc-50">
          <Link
            href="/"
            className="h-16 px-3 flex justify-center items-center w-full"
          >
            <AiOutlineHome size={25} />
          </Link>
        </li>

        <li className="hover:text-zinc-50">
          <Link
            href="/about"
            className="h-16 px-3 flex justify-center items-center w-full"
          >
            <RxPerson size={25} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
