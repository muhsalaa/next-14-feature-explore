"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function LocalNotFound() {
  // Not Found dont have params, so need to convert to client component
  //   {
  //   params,
  // }: {
  //   params: { catchAllSegments: string[] };
  // }
  const params = useParams();
  return (
    <div>
      LocalNotFound: will show when segment 1 is more than 500 <br />
      current value {params.catchAllSegments[0]}
    </div>
  );
}
