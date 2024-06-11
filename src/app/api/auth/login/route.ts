import { postServer } from "@/libs/fetch-server";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.formData();
  const username = body.get("username");
  const password = body.get("password");
  const nextUrl = request.nextUrl.clone();
  try {
    await postServer("/auth/login", { username, password });
    nextUrl.pathname = "/";
    return NextResponse.redirect(nextUrl, {
      status: 302,
    });
  } catch (e) {
    nextUrl.pathname = `/auth/login`;
    nextUrl.search = `?username=${username}&password=${password}`;
    return NextResponse.redirect(nextUrl);
  }
}
