"use client";
import Image from "next/image";
import Link from "next/link";
import { type ComponentType, useEffect, useRef, useState } from "react";

type MenuItem = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
};

const IconHome = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 10.5L12 4l9 6.5" />
    <path d="M5 9.8V20a1 1 0 0 0 1 1h4.5v-5h3V21H18a1 1 0 0 0 1-1V9.8" />
  </svg>
);

const IconPencil = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 20l4.5-1 9.8-9.8-3.5-3.5L5 15.5 4 20z" />
    <path d="M13.8 5.7l3.5 3.5" />
  </svg>
);

const IconFile = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M13 3v6h6" />
  </svg>
);

const IconUser = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c1.7-3.5 11.3-3.5 14 0" />
  </svg>
);

const menuItems: MenuItem[] = [
  { label: "Home", href: "/", Icon: IconHome },
  { label: "Projects", href: "/projects", Icon: IconPencil },
  { label: "About", href: "/about", Icon: IconUser },
];

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);
  return (
    <div className="p-3 z-100 px-10 backdrop-blur-md flex justify-between bg-white/60 sticky top-0">
      <div className="flex gap-3 items-center">
        <div className="border-2 w-12 h-12 overflow-hidden border-white shadow-md rounded-xl ">
          <Image
            width={20}
            height={20}
            alt=""
            className="w-full h-full"
            src={"/portrait.png"}
          />
        </div>
        <p className="font-medium">Emmanuel John</p>
      </div>

      <div ref={menuRef} className="relative">
        <button
          type="button"
          className="bg-black hover:btn p-1 cursor-pointer items-center rounded-lg h-12 w-30 text-white flex"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="header-menu"
        >
          <p className="relative h-6 border-red-500 flex-1 overflow-hidden">
            <span
              className={`flex text-md *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
            >
              <span>Menu</span>
              <span>Menu</span>
            </span>
          </p>
          <span
            className={`w-10 max-md:hidden  flex items-center justify-center rounded-lg text-2xl duration-500 text-gray-400 ${hovered && "text-4xl bg-gray-300/40"} ${menuOpen && "text-4xl bg-gray-300/40"} h-full`}
          >
            <span className={`${menuOpen && "rotate-45"} duration-300`}>+</span>
          </span>
        </button>

        <div
          id="header-menu"
          role="dialog"
          aria-hidden={!menuOpen}
          className={`absolute right-0 top-14 w-56 rounded-md border border-gray-200 bg-white p-2 shadow-xl transition duration-200 origin-top-right ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "pointer-events-none opacity-0 -translate-y-2 scale-95"
          }`}
        >
          <ul className="mt-1 flex flex-col gap-2 pt-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex w-full items-center gap-3 px-2 text-left text-gray-700 transition hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-500">
                    <item.Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
