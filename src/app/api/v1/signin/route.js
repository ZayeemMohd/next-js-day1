import { UserModel } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, password } = body;

    // check input using zod

    // check if user already exists
    const exitstingUser = await UserModel.findOne({ email: email });
    console.log(exitstingUser);

    if (!exitstingUser) {
      return NextResponse.json(
        {
          msg: "Go first register on signup",
        },
        {
          status: 400,
        },
      );
    }

    console.log("User milgaya while login:: ", exitstingUser);

    const isPasswordMatch = await bcrypt.compare(
      password,
      exitstingUser.password,
    );

    if (!isPasswordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    

    return NextResponse.json(
      {
        msg: "User Registered successfully",
        feedback,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
