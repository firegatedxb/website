import Partners from "@/models/Partners";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
    try {
        await connectDB();
        const clients = await Partners.findOne({});
        return NextResponse.json({ success: true, data: clients }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching partners" }, { status: 500 });
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
        const { name,description,logo,logoAlt,image,imageAlt,website } = body;
        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error adding partner" }, { status: 500 });
        }
        partner.partners.push({name,description,logo,logoAlt, image,imageAlt,website });
        await partner.save();
        return NextResponse.json({ success: true, message: "Partner added successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error adding partner" }, { status: 500 });
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
        const {name,description,logo,logoAlt, image,imageAlt,website } = body;
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error updating partner" }, { status: 500 });
        }
        const partnerData = partner.partners.find((partner: { _id: string }) => partner._id == id);
        if (!partnerData) {
            return NextResponse.json({ success: false, message: "Error updating partner" }, { status: 500 });
        }
        partnerData.name = name;
        partnerData.description = description;
        partnerData.logo = logo;
        partnerData.logoAlt = logoAlt;
        partnerData.image = image;
        partnerData.imageAlt = imageAlt;
        partnerData.website = website;
        await partner.save();
        return NextResponse.json({ success: true, message: "Partner updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating partner" }, { status: 500 });
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

        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error deleting partner" }, { status: 500 });
        }
        const partnerData = partner.partners.find((partner: { _id: string }) => partner._id == id);
        if (!partnerData) {
            return NextResponse.json({ success: false, message: "Error deleting partner" }, { status: 500 });
        }
        partner.partners = partner.partners.filter((partner: { _id: string }) => partner._id != id);
        await partner.save();
        return NextResponse.json({ success: true, message: "Partner deleted successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error deleting partner" }, { status: 500 });
    }
}



    