import React from "react";
import { CollocatedComponent } from "./CollocatedComponent";

// https://nextjs.org/docs/app/building-your-application/routing/pages

export default function Page() {
  return (
    <div>
      Common route 2
      <div>
        <CollocatedComponent />
      </div>
    </div>
  );
}
