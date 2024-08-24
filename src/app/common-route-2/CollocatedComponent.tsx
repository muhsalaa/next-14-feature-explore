import React from "react";

export function CollocatedComponent() {
  return (
    <div className="border m-2 p-4">
      <h2 className="font-bold mb-1">Collocated Component</h2>
      <p>
        Inside route folder, only file named `page.tsx` will be rendered * so we
        can collocate a component like this
      </p>
    </div>
  );
}
