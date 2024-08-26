import ky from "ky";
import { NextRequest, NextResponse } from "next/server";

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const comments = await ky(
    "https://jsonplaceholder.typicode.com/comments/" + params.id
  ).json<Comments>();

  return NextResponse.json(comments);
}
