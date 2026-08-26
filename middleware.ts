import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const visitorId = request.cookies.get("visitorId");

    if (!visitorId) {
        response.cookies.set("visitorId", crypto.randomUUID(), {
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return response;
}