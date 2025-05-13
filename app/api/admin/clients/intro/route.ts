import Client from "@/models/Clients";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const body = await req.json();
        const { title, description } = body;
        const client = await Client.findOne({});
        if (!client) {
            return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
        }
        client.title = title;
        client.description = description;
        await client.save();
        return NextResponse.json({ success: true, message: "Client updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
    }
}
    