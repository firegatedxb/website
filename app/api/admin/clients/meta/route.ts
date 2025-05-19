import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Clients from "@/models/Clients";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const body = await req.json();
        const { metaTitle, metaDescription } = body;
        const clients = await Clients.findOne({});
        if (!clients) {
            return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
        }
        clients.metaTitle = metaTitle;
        clients.metaDescription = metaDescription;

        await clients.save();
        return NextResponse.json({ success: true, message: "Client updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
    }
}