import Link from "next/link";
import React from "react";

export default function SecondSlot() {
  return (
    <div>
      Second Slot
      <div>
        <Link
          className="text-blue-600 underline"
          href="/with-parallel-route/nested-in-parallel-2"
        >
          Nested in Parallel 2
        </Link>
      </div>
    </div>
  );
}
