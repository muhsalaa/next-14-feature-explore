import { Metadata } from "next";
import React, { Suspense } from "react";

// export const dynamic = "force-dynamic";

// Page dynamic metadata, fetch from API
export const generateMetadata = async (): Promise<Metadata> => {
  const title = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
    .then((res) => res.json())
    .then((json) => json.title);
  return {
    title,
  };
};

async function DataDisplay() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // if (randomNumber > 50) {
  //   throw new Error("Some artificial error happened: " + randomNumber);
  // }

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomNumber}`
  ).then((res) => res.json());

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default async function Page({
  params,
}: {
  params: { dynamicRoute: string; nestedDynamicRoute: string };
}) {
  return (
    <div>
      Nested Dynamic route <br />
      dynamicRoute: {params.dynamicRoute} <br />
      nestedDynamicRoute: {params.nestedDynamicRoute}
      <Suspense fallback={<div>Loading 1...</div>}>
        <DataDisplay />
      </Suspense>
      <Suspense fallback={<div>Loading 2...</div>}>
        <DataDisplay />
      </Suspense>
      <Suspense fallback={<div>Loading 3...</div>}>
        <DataDisplay />
      </Suspense>
    </div>
  );
}
