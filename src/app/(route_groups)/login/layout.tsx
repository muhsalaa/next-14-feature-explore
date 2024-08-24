import { Metadata } from "next";
import React from "react";

// Layout metadata
// thsi will override the root metadata template
// since it cannot templating on layout, only pages
export const metadata: Metadata = {
  title: "Login metadata",
};

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-emerald-400 p-4">
      <h2 className="font-bold text-emerald-400">Nested/Sub Layout</h2>
      <div className="mb-4">This layout is inside path folder</div>
      <h3 className="font-bold mb-2 text-emerald-400">Content</h3>
      <div className="border border-emerald-400 border-dashed p-4">
        {children}
      </div>
    </div>
  );
}
