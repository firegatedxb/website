import connectDB from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find({featuredProject:true});
        return NextResponse.json({ success: true, data: projects }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching projects" }, { status: 500 });
    }
}