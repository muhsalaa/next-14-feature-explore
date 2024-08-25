import Login from "@/app/(route_groups)/login/page";
import React from "react";

export default function InterceptedLogin() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-neutral-500/80">
      <div className="p-8 rounded-xl bg-neutral-800">
        <p className="mb-4 font-bold text-lg">(..) Intercepted Login</p>
        <Login />
      </div>
    </div>
  );
}
