import { NextResponse } from "next/server";
import connectMongoDB from "../../services/database/conectMongoose";
import userSchema from "../../services/models/userModel";

export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const listDonations = await userSchema.find({}).sort({ updatedAt: -1 });
    return NextResponse.json(listDonations);
  } catch {}
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongoDB();
    await userSchema.create(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";
  try {
    await connectMongoDB();
    await userSchema.deleteOne({ _id: id });
    return NextResponse.json("Delete successfully");
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
