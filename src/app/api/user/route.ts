import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


import client from "../../../../db"



export async  function GET(req: NextRequest) { 
     
    const user = await client.user.findFirst() ;

    return NextResponse.json({
        email: user?.email,
        name: "satyajit",
    })
}




export async function POST(req: NextRequest) {
    const body = await req.json();
    try {

        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })

        return NextResponse.json({
            body
        })

    } catch (error) {
        return NextResponse.json({
            message: "Error while signing up"
        }, {
            status: 411
        })
    }


}