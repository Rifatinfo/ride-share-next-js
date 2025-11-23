import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const publicRoutes = ["/login", "/sign-up", "/"];

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const accessToken = req.cookies.get("accessToken")?.value;
    let userRole: string | null = null;

    if (accessToken) {
        try {
            const decode = jwt.verify(
                accessToken,
                process.env.JWT_ACCESS_SECRET!
            ) as JwtPayload;
            userRole = decode.role as string;
            console.log(decode);
        } catch (error) {
            console.log(error);
            const res = NextResponse.redirect(new URL("/login", req.url));
            res.cookies.delete("accessToken");
            res.cookies.delete("refreshToken");
            return res;
        }
    }

    const isPublic = publicRoutes.some((r) => pathname.startsWith(r));
    if(!isPublic && !accessToken){
       return NextResponse.redirect(new URL("/", req.url));
    }

    if (accessToken && ["/login", "/sign-up"].includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    const roleGroup : Record<string, string[]> = {
        admin: ["/admin-dashboard"],
        driver: ["/driver-dashboard"],
        user: ["/dashboard"],
    }

    for(const role in roleGroup){
       if(roleGroup[role].some((p) => pathname.startsWith(p))){
          if(userRole !== role){
            const target = getDashboard(userRole);
            if(pathname !== target){
              return NextResponse.redirect(new URL(target, req.url));
            }
          }
       }
    }
    return NextResponse.next();
}

function getDashboard(role: string | null) {
  if (role === "admin") return "/admin-dashboard";
  if (role === "driver") return "/driver-dashboard";
  return "/dashboard";
}