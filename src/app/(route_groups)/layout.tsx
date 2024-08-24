import { Metadata } from "next";
import React from "react";

// Layout metadata
export const metadata: Metadata = {
  title: "Auth Upper Layout metadata",
};

export default function RouteGroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-cyan-400 p-4">
      <h2 className="font-bold text-cyan-400">Route Groups Layout</h2>
      <div className="mb-4">
        This layout is inside (route_groups) folder Datenow: {Date.now()}
      </div>
      <h3 className="font-bold mb-2 text-cyan-400">Content</h3>
      <div className="border border-cyan-400 border-dashed p-4">{children}</div>
    </div>
  );
}
