import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
   

    // console.log("rawParams:", rawParams);
    try {
        if (true) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/`,{
                cache: "no-store"
            });

            return NextResponse.json(await res.json())
        }
    } catch (error: unknown) {
        console.log(error);
    }
}