import Link from "next/link";
import React from "react";

export default function Route1() {
  return (
    <div>
      Route 1
      <div>
        <Link
          className="text-blue-600 underline"
          href="/intercept-route/route-2"
        >
          Route 2
        </Link>
      </div>
    </div>
  );
}
