import React from "react";

export default function SlottedLayout({
  children,
  firstSlot,
  secondSlot,
  thirdSlot,
  login,
}: {
  children: React.ReactNode;
  firstSlot: React.ReactNode;
  secondSlot: React.ReactNode;
  thirdSlot: React.ReactNode;
  login: React.ReactNode;
}) {
  let isLoggedIn = false;

  return (
    <div className="border border-emerald-400 p-4">
      <h2 className="font-bold text-emerald-400">Nested Layout with Slot</h2>
      <div className="mb-4">
        This layout is inside path folder, and has slots (parallel routing)
      </div>
      <h3 className="font-bold mb-2 text-emerald-400">Content</h3>
      <div className="border border-emerald-400 border-dashed p-4 grid grid-cols-2 gap-4">
        <div className="p-4 border border-yellow-400">{firstSlot}</div>
        <div className="p-4 border border-purple-400">{secondSlot}</div>

        {isLoggedIn ? (
          <div className="p-4 border border-cyan-400">{thirdSlot}</div>
        ) : (
          <div className="p-4 border border-cyan-400">{login}</div>
        )}
        <div className="p-4 border border-gray-400">{children}</div>
      </div>
    </div>
  );
}
