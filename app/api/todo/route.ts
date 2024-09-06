import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    const rawParams: string = request.nextUrl.searchParams.get("id")?.trim() as string;
    console.log("rawParams:", rawParams);
    try {
        if (rawParams) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos/${rawParams}`);

            return res
        }
    } catch (error: unknown) {
        console.log(error);
    }
}