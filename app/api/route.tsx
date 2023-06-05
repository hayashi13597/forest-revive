import { NextResponse } from "next/server";
import connectMongoDB from "../../services/database/conectMongoose";
import userSchema from "../../services/models/userModel";
export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const listDonations = await userSchema.find({}).sort({ updatedAt: -1 });
    console.log(listDonations);
    return NextResponse.json(listDonations);
  } catch {}
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectMongoDB();
    const result = await userSchema.create(data);
    console.log(result);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
