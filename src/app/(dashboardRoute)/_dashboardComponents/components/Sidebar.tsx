/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default function Sidebar({ role, items }: any) {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <h2 className="text-xl font-semibold mb-4 capitalize">
        {role} Panel
      </h2>

      <nav className="flex flex-col gap-2">
        {items.map((item: any) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 text-sm font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
