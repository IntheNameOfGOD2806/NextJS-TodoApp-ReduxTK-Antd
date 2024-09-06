import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const payload = await request.json();

    // console.log("rawParams:", rawParams);
    try {
        if (payload) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            return res
        }
    } catch (error: unknown) {
        console.log(error);
    }
}