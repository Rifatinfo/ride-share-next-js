import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
export async function proxy(req: NextRequest) {

    const accessToken = req.cookies.get("accessToken")?.value;

    if (accessToken) {
        try {
            const decode = jwt.verify(
                accessToken,
                process.env.JWT_ACCESS_SECRET!
            ) as JwtPayload;
            console.log(decode);
        } catch (error) {
            console.log(error);
        }
    }
}