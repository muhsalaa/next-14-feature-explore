"use client";

import { notFound } from "next/navigation";
import React from "react";

// server side params can parse props
export default function Page({
  params,
}: {
  params: { catchAllSegments: string[] };
}) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber > 50) {
    throw new Error(
      "Error Loading Catch all Segments, number is " + randomNumber
    );
  }

  if (+params.catchAllSegments[0] > 500) {
    notFound();
  }

  return (
    <div>
      Catch all Segments (routes) <br />
      segment 1: {params.catchAllSegments[0]} <br />
      segment 2: {params.catchAllSegments[1]} <br />
      segment rest: {params.catchAllSegments.slice(2).join(" ")}
      <br />
      random number: {randomNumber}
    </div>
  );
}
