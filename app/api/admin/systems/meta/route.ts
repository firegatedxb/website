import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import System from "@/models/Systems";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const systemMeta = await System.findOne({});
        if (!systemMeta) {
            return NextResponse.json({ message: "System Meta not found" }, { status: 404 });
        }
        systemMeta.metaTitle = body.metaTitle;
        systemMeta.metaDescription = body.metaDescription;
        await systemMeta.save();
        return NextResponse.json({data:systemMeta,message:"System Meta updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}