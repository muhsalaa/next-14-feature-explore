import Link from "next/link";
import React from "react";

export default function FirstSlot() {
  return (
    <div>
      First Slot
      <div>
        <Link
          className="text-blue-600 underline"
          href="/with-parallel-route/nested-in-parallel-1"
        >
          Nested in Parallel
        </Link>
      </div>
    </div>
  );
}
