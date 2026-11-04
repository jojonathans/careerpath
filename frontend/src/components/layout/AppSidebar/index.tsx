
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "My Profile", href: "/profile", icon: "👤" },
  { name: "My CV", href: "/my-career/cv", icon: "📄" },
  { name: "My Skills", href: "/my-career/skills", icon: "✦" },
  { name: "Job Search", href: "/job-intelligence/jobs", icon: "⌕" },
  { name: "Job Matching", href: "/job-intelligence/matching", icon: "◎" },
  { name: "Skill Gap", href: "/skill-development/skill-gap", icon: "◈" },
  { name: "Learning Roadmap", href: "/skill-development/roadmap", icon: "⌁" },
  { name: "My Applications", href: "/applications", icon: "▣" },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold text-blue-600">
          CareerPath
        </h1>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase text-gray-400">
          Main Menu
        </p>

        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                active
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{menu.icon}</span>
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
