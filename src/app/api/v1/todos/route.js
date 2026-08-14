import { NextResponse } from "next/server";



export function GET(){


    return NextResponse.json({
        todo: "hello world"
    })
}


export function POST(){

    return NextResponse.json({
        msg: "post request recieved on /todos route"
    })
}