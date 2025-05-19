import Partners from "@/models/Partners";
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
        const { title, description, banner, bannerAlt, pageTitle } = body;
        const partner = await Partners.findOne({});
        if (!partner) {
            return NextResponse.json({ success: false, message: "Error updating partner" }, { status: 500 });
        }
        partner.title = title;
        partner.description = description;
        partner.banner = banner;
        partner.bannerAlt = bannerAlt;
        partner.pageTitle = pageTitle;
        await partner.save();
        return NextResponse.json({ success: true, message: "Partner updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating partner" }, { status: 500 });
    }
}
    