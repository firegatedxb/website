import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Systems from "@/models/Systems";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
try {
    const isAdmin = await verifyAdmin(req);
    if (!isAdmin) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const {slug,banner,bannerAlt,pageTitle,componentTitle,componentDescription,components,metaTitle,metaDescription} = body;
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
    systemsData.slug = slug;
    systemsData.bannerImage = banner;
    systemsData.bannerAlt = bannerAlt;
    systemsData.pageTitle = pageTitle;
    systemsData.componentTitle = componentTitle;
    systemsData.componentDescription = componentDescription;
    systemsData.components = components;
    systemsData.metaTitle = metaTitle;
    systemsData.metaDescription = metaDescription;
    await systems.save();
    return NextResponse.json({ success: true, message: "Systems updated successfully" }, { status: 201 });
} catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "Error updating systems" }, { status: 500 });
}
}