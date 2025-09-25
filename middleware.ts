import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;

  // ✅ Add global CORS headers
  response.headers.set("Access-Control-Allow-Origin", "https://docs-rho-wine.vercel.app");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // 🔐 Handle protected routes
  const isProtectedRoute = path.startsWith("/admin") && !path.includes("/admin/login");

  if (isProtectedRoute) {
    const token = request.cookies.get("adminToken")?.value || "";

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");
      await jose.jwtVerify(token, secret);
      return response;
    } catch (error) {
      console.log("JWT error:", error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }else if(path.startsWith("/admin/login")){
    const token = request.cookies.get("adminToken")?.value || "";
    if(token){
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return response;
}

// 👇 Apply middleware to both API and admin routes
export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
};
