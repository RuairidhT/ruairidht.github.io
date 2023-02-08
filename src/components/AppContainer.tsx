import { ReactElement } from "react";
import Sidebar from "./navigation/Sidebar";
import Topbar from "./navigation/Topbar";

export default function AppContainer({ children }: { children: ReactElement }) {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-zinc-800 w-full">{children}</div>
      </div>
    </>
  );
}
