import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="header z-[9999999] mb-8 sticky top-0 p-2 bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-500">
        <div className="flex gap-1 items-center">
          <Link href="/" className="item-menu px-2 py-1 cursor-pointer">
            <span className="text-xs text-white">Pengalaman</span>
          </Link>
          <Link href="project" className="item-menu px-2 py-1 cursor-pointer">
            <span className="text-xs text-white">Project</span>
          </Link>
          <Link href="kontak" className="item-menu px-2 py-1 cursor-pointer">
            <span className="text-xs text-white">Kontak</span>
          </Link>
        </div>
      </div>
    </>
  );
}
