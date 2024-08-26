import ky from "ky";
import { headers, cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function GET() {
  const comments = await ky(
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10"
  ).json<Comments>();

  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const requestHeaders = headers();
  const data = await request.json();

  // set cookies
  cookies().set("test2", "hahahaha" + Date.now());

  // get search params
  console.log(request.nextUrl.searchParams.get("test"));
  // get headers
  console.log(requestHeaders.get("authorization"));
  // get cookies
  console.log(request.cookies.get("test"));
  console.log(request.cookies.get("test2"));

  const comments = await ky(
    "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2"
  ).json<Comments[]>();

  comments.push({
    postId: Date.now(),
    id: Date.now(),
    name: data.name,
    email: data.email,
    body: data.body,
  });

  return NextResponse.json(comments, {
    status: 201,
    // set cookies
    headers: {
      "Set-Cookie": "test=heheheheh" + Date.now(),
    },
  });
}
