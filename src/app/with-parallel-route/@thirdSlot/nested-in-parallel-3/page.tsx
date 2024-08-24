import Link from "next/link";
import React from "react";

export default function ThirdSlotNestedRoute() {
  return (
    <div>
      Third Slot Nested Route
      <div>
        <Link className="text-blue-600 underline" href="/with-parallel-route">
          Default
        </Link>
      </div>
    </div>
  );
}
