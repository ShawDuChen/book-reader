import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const protocol = req.headers.get("x-forwarded-proto") || "http";
  const host = req.headers.get("host");
  url.protocol = protocol;
  url.host = host || "localhost:3000";

  const response = NextResponse.next();
  response.headers.set(
    "x-next-url",
    url.toString().replace(`${protocol}://${host}`, ""),
  );
  return response;
}
