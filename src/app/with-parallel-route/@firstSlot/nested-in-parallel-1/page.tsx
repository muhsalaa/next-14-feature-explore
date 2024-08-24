import Link from "next/link";
import React from "react";

export default function FirstSlotNestedRoute() {
  return (
    <div>
      First Slot Nested Route
      <div>
        <Link className="text-blue-600 underline" href="/with-parallel-route">
          Default
        </Link>
      </div>
    </div>
  );
}
