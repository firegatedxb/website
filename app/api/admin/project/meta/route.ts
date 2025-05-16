import ProjectMeta from "@/models/ProjectMeta";
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
        const { metaTitle, metaDescription } = body;
        const projectMeta = await ProjectMeta.findOne({});
        if (!projectMeta) {
                return NextResponse.json({ success: false, message: "Error updating project" }, { status: 500 });
        }

        projectMeta.metaTitle = metaTitle;
        projectMeta.metaDescription = metaDescription;

        await projectMeta.save();
        return NextResponse.json({ success: true, message: "Project updated successfully" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error updating project" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const projectMeta = await ProjectMeta.findOne({});
        if (!projectMeta) {
            return NextResponse.json({ success: false, message: "Error fetching project" }, { status: 500 });
        }
        return NextResponse.json({ success: true, data: projectMeta }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching project" }, { status: 500 });
    }
}
