import Partners from "@/models/Partners";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { accreditTitle, accreditDescription } = body;
        const response = await Partners.updateOne(
            {},
            {
                $set: {
                    accreditTitle,
                    accreditDescription,
                },
            }
        );
        if (response.modifiedCount > 0) {
            return NextResponse.json({
                message: "Accredit info updated successfully",
            });
        } else {
            return NextResponse.json({
                message: "Accredit info not updated",
            });
        }
    } catch (error) {
        console.log("Error updating accredit info", error);
        return NextResponse.json({
            message: "Error updating accredit info",
        });
    }
}