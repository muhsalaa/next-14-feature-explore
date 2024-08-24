"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const params = useParams();
  return <div>Dynamic route id {params.dynamicRoute}</div>;
}
