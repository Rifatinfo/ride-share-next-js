/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { sidebarMenus } from "./_dashboardComponents/config/sidebarMene";
import { roleComponentMap } from "./_dashboardComponents/config/roleMap";
import Sidebar from "./_dashboardComponents/components/Sidebar";

export default function DashboardLayout({
  user,
  admin,
  driver
}: Readonly<{
  admin: React.ReactNode;
  driver: React.ReactNode;
  user: React.ReactNode;
}>) {
  const sidebarItems = sidebarMenus["user"];
  const ActiveComponent = roleComponentMap["user"]?.({
    user,
    admin,
    driver
  })
  return (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar role="user" items={sidebarItems} />

    <main className="flex-1 p-6">
      <div className="mt-6">
        {ActiveComponent}
      </div>
    </main>
  </div>
);

}
