"use client";

import React from "react";

export default function RouteGroupsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-orange-400 p-4">
      <h2 className="font-bold text-orange-400">Route Groups Template</h2>
      <div className="mb-4">
        This tempalte always re-render. See the Datenow: {Date.now()} here and
        at layout
      </div>
      <h3 className="font-bold mb-2 text-orange-400">Template Content</h3>
      <div className="border border-orange-400 border-dashed p-4">
        {children}
      </div>
    </div>
  );
}
