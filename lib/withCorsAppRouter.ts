// lib/withCorsAppRouter.ts
import { NextRequest, NextResponse } from "next/server";

export function withCors(handler: (req: NextRequest) => Promise<NextResponse>) {
    console.log("WRODKDDKDK")
  return async function wrappedHandler(req: NextRequest) {
    const res = await handler(req);

    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return res;
  };
}
