import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Service from "@/models/Service";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const service = await Service.findOne({});
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:service,message:"Service fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const service = await Service.findOneAndUpdate({}, body);
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:service,message:"Service updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}