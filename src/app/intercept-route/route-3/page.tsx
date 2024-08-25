import Link from "next/link";
import React from "react";

export default function Route3() {
  return (
    <div>
      Route 3
      <div>
        <Link
          className="text-blue-600 underline"
          href="/intercept-route/route-3/route-4"
        >
          Route 4
        </Link>
      </div>
    </div>
  );
}
