"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      error in catch all segment, message: {error.message}
      <div className="mt-4">
        <button className="p-4 bg-blue-300 rounded" onClick={() => reset()}>
          reset
        </button>
      </div>
    </div>
  );
}
