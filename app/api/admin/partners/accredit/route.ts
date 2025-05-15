import Partners from "@/models/Partners";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
    try {
        await connectDB();
        const clients = await Partners.find({});
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
        const { accreditImage,accreditImageAlt } = body;
        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error adding accredit" }, { status: 500 });
        }
        partner.accredit.push({accreditImage,accreditImageAlt });
        await partner.save();
        return NextResponse.json({ success: true, message: "Accredit added successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error adding accredit" }, { status: 500 });
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
        const {accreditImage,accreditImageAlt } = body;
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");

        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error updating accredit" }, { status: 500 });
        }
        const partnerData = partner.accredit.find((partner: { _id: string }) => partner._id == id);
        if (!partnerData) {
            return NextResponse.json({ success: false, message: "Error updating accredit" }, { status: 500 });
        }
        partnerData.accreditImage = accreditImage;
        partnerData.accreditImageAlt = accreditImageAlt;
        await partner.save();
        return NextResponse.json({ success: true, message: "Accredit updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating accredit" }, { status: 500 });
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
            return NextResponse.json({ success: false, message: "Error deleting accredit" }, { status: 500 });
        }
        const partnerData = partner.accredit.find((partner: { _id: string }) => partner._id == id);
        if (!partnerData) {
            return NextResponse.json({ success: false, message: "Error deleting accredit" }, { status: 500 });
        }
        partner.accredit = partner.accredit.filter((partner: { _id: string }) => partner._id != id);
        await partner.save();
        return NextResponse.json({ success: true, message: "Accredit deleted successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error deleting accredit" }, { status: 500 });
    }
}



    