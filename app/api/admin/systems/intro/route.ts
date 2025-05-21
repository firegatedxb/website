import Systems from "@/models/Systems";
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
        console.log(body)
        const { title, description, banner, bannerAlt,pageTitle } = body;
        const systems = await Systems.findOne({});
        if (!systems) {
            return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
        }
        systems.title = title;
        systems.description = description;
        systems.banner = banner;
        systems.bannerAlt = bannerAlt;
        systems.pageTitle = pageTitle;

        await systems.save();
        return NextResponse.json({ success: true, message: "Systems updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
    }
}
    