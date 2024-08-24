"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  function recover() {
    // https://stackoverflow.com/questions/77017612/nextjs-13-4-error-tsx-the-reset-not-working-for-fetch
    // https://www.youtube.com/watch?v=idEL0dv2V1A
    router.refresh();
    startTransition(() => {
      reset();
    });
  }

  return (
    <div>
      <p>error in nested dynamic route, message: {error.message}</p>
      <p>
        Because error happened in server component, use router.refresh instead
        of reset
      </p>
      <div className="mt-4">
        <button className="p-4 bg-blue-300 rounded" onClick={recover}>
          reset
        </button>
      </div>
    </div>
  );
}
