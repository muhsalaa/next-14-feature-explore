"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div>
          Huge error happened, message: {error.message}{" "}
          <div>
            <button
              className="p-4 bg-green-300 rounded"
              onClick={() => reset()}
            >
              reset
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
