import connectMongoDB from "@/services/database/conectMongoose";
import BlogModel from "../../../services/models/blogModel";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    await connectMongoDB();

    const blog = (await BlogModel.find({})) || [];
    return NextResponse.json(blog);
  } catch (err) {}
}
// tạo sẵn phương thức thêm
export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongoDB();
  } catch {}
}
