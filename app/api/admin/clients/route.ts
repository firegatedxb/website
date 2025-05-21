import Client from "@/models/Clients";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
    try {
        await connectDB();
        const clients = await Client.findOne({});
        return NextResponse.json({ success: true, data: clients }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching clients" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const body = await req.json();
        const { image,imageAlt } = body;
        const client = await Client.findOne({});
        if (!client) {
            return NextResponse.json({ success: false, message: "Error adding client" }, { status: 500 });
        }
        client.clients.push({ image,imageAlt });
        await client.save();
        return NextResponse.json({ success: true, message: "Client added successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error adding client" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const body = await req.json();
        const { image,imageAlt } = body;
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const client = await Client.findOne({});
        if (!client) {
            return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
        }
        const clientData = client.clients.find((client: { _id: string }) => client._id == id);
        if (!clientData) {
            return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
        }
        clientData.image = image;
        clientData.imageAlt = imageAlt;
        await client.save();
        return NextResponse.json({ success: true, message: "Client updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating client" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const client = await Client.findOne({});
        if (!client) {
            return NextResponse.json({ success: false, message: "Error deleting client" }, { status: 500 });
        }
        const clientData = client.clients.find((client: { _id: string }) => client._id == id);
        if (!clientData) {
            return NextResponse.json({ success: false, message: "Error deleting client" }, { status: 500 });
        }
        client.clients = client.clients.filter((client: { _id: string }) => client._id != id);
        await client.save();
        return NextResponse.json({ success: true, message: "Client deleted successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error deleting client" }, { status: 500 });
    }
}



    