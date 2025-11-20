/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function DashboardLayout({
  user,
  admin,
  driver
}: Readonly<{
  admin: React.ReactNode;
  driver: React.ReactNode;
  user: React.ReactNode;
}>) {
    const  currentRole : any = 'driver'
  return (
    <div>
        {currentRole === "user" && driver}
        {currentRole === "driver" && user}
        {currentRole === "admin" && admin}
    </div>
  );
}
