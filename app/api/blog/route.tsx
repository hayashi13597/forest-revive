import connectMongoDB from "@/services/database/conectMongoose";
import BlogModel from "../../../services/models/blogModel";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  try {
    await connectMongoDB();
    if (id) {
      const blog = (await BlogModel.find({ _id: id })) || [];
      return NextResponse.json(blog);
    } else {
      const blog = (await BlogModel.find({})) || [];
      return NextResponse.json(blog);
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}
// tạo sẵn phương thức thêm
export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongoDB();
    await BlogModel.create(data);
    return NextResponse.json(data);
  } catch {}
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    await connectMongoDB();
    const updatedData = await BlogModel.findOneAndUpdate(
      { _id: data._id },
      data
    );
    return NextResponse.json(updatedData);
  } catch {}
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  try {
    await connectMongoDB();
    await BlogModel.deleteOne({ _id: id });
    return NextResponse.json("Delete successfully");
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
