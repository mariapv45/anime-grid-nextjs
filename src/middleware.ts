import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user-info")?.value;
  const isLandingPage = request.nextUrl.pathname === "/";

  // If the user cookie is not set and we're not on landing page
  // redirect to the home page
  if (!userCookie && !isLandingPage) {
    return NextResponse.redirect(new URL("/", request.url));
  } 
  
  if (isLandingPage && userCookie) {
    // If user has already set their information and tries to access the landing page,
    // redirect to the information page
    return NextResponse.redirect(new URL("/information", request.url));
  }

  // If the user cookie is set, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}