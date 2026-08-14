import { UserModel } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, username, password } = body;

    // check input using zod

    // check if user already exists
    const exitstingUser = await UserModel.findOne({ email: email });
    console.log(exitstingUser)
    if (exitstingUser) {
      return NextResponse.json(
        {
          msg: "user already exists",
        },
        {
          status: 400,
        },
      );
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const feedback = await UserModel.create({
      email: email,
      username: username,
      password: hashedPassword,
    });

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
