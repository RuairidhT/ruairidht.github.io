import Image from "next/image";

export default function Topbar() {
  return (
    <>
      <div className="bg-zinc-600" style={{ height: "30px" }}>
        <div className="ml-4 flex">
          <Image
            src="/../public/me.png"
            alt="Picture of me"
            width={20}
            height={20}
          />
          <div></div>
        </div>
      </div>
    </>
  );
}
