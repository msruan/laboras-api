import { NextResponse } from "next/server";

import { connectToDb } from "@/lib/utils";
import { IPost, Post } from "@/models/posts";
import { NextApiRequest } from "next";

export const GET = async (request: NextApiRequest, { params }: any) => {
  try {
    await connectToDb();
    const { id } = params;

    const post = await Post.findById(id);
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};

export const DELETE = async (request: NextApiRequest, { params }: any) => {
  try {
    await connectToDb();
    const { id } = params;

    const post = await Post.findByIdAndDelete(id);
    if (post) return NextResponse.json({ sucess: true });
    else return NextResponse.json({ sucess: false });
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};

export const PATCH = async (request: any, { params }: any) => {
  try {
    await connectToDb();
    const { id } = params;
    const postAtualizado: IPost = await request.json();
    console.log(postAtualizado);

    const post = await Post.findByIdAndUpdate(id, postAtualizado);
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};
