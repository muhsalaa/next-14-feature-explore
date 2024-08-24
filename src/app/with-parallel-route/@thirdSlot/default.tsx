import Link from "next/link";
import React from "react";

export default function ThirdSlotDefault() {
  return (
    <div>
      Third Slot <b className="text-red-500">default</b>
      <div>
        <Link
          className="text-blue-600 underline"
          href="/with-parallel-route/nested-in-parallel-3"
        >
          Nested in Parallel 3
        </Link>
      </div>
    </div>
  );
}
