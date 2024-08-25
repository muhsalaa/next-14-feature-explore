import Link from "next/link";
import React from "react";

export default function LoginSlot() {
  return (
    <div>
      Login to see 3rd Slot
      <Link className="text-blue-600 underline" href="/login">
        Login
      </Link>
    </div>
  );
}
