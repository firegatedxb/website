import Systems from "@/models/Systems";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        await connectDB();
        if(id){
            const systems = await Systems.findOne({});
            const systemsData = systems.systems.find((system: { _id: string }) => system._id == id);
            return NextResponse.json({ success: true, data: systemsData }, { status: 200 });
        }
        const systems = await Systems.find({});
        return NextResponse.json({ success: true, data: systems }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching systems" }, { status: 500 });
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
        const { title,description,logo,logoAlt,image,imageAlt } = body;
        const systems = await Systems.findOne({});
        if (!systems) {
            return NextResponse.json({ success: false, message: "Error adding systems" }, { status: 500 });
        }
        systems.systems.push({title,description,logo,logoAlt,image,imageAlt});
        await systems.save();
        return NextResponse.json({ success: true, message: "Systems added successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error adding systems" }, { status: 500 });
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
        const {title,description,logo,logoAlt, image,imageAlt} = body;
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const systems = await Systems.findOne({});
        if (!systems) {
            return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
        }
        const systemsData = systems.systems.find((system: { _id: string }) => system._id == id);
        if (!systemsData) {
            return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
        }
        systemsData.title = title;
        systemsData.description = description;
        systemsData.logo = logo;
        systemsData.logoAlt = logoAlt;
        systemsData.image = image;
        systemsData.imageAlt = imageAlt;
        await systems.save();
        return NextResponse.json({ success: true, message: "Systems updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
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

        const systems = await Systems.findOne({});
        if (!systems) {
            return NextResponse.json({ success: false, message: "Error deleting systems" }, { status: 500 });
        }
        const systemsData = systems.systems.find((system: { _id: string }) => system._id == id);
        if (!systemsData) {
            return NextResponse.json({ success: false, message: "Error deleting systems" }, { status: 500 });
        }
        systems.systems = systems.systems.filter((system: { _id: string }) => system._id != id);
        await systems.save();
        return NextResponse.json({ success: true, message: "Systems deleted successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error deleting systems" }, { status: 500 });
    }
}



    