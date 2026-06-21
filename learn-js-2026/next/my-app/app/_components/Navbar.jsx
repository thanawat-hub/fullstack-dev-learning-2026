import Image from "next/image";
import UserProfile from "../components/UserProfile";

const routes = [
  { name: "Home", href: "/" },
  { name: "Users", href: "/users" },
  { name: "Products", href: "/products" },
  { name: "Artists", href: "/artists"},
  { name: "Songs", href: "/songs"}
];


function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M3 20c4-8 11-8 15 0s11 8 15 0"
        stroke="#818cf8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12c4-8 11-8 15 0s11 8 15 0"
        stroke="#6366f1"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-slate-300 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Logo />
        <ul className="flex items-center gap-1">
          {routes.map((route) => (
            <li key={route.href}>
              <a
                href={route.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:text-white"
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {/* UserProfile: แสดง avatar + ชื่อจาก GitHub (ถ้า login แล้ว) */}
        <UserProfile />
      </div>
    </nav>
  );
}