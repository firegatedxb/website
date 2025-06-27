import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";


export async function GET() {
    try {
        await connectDB();
        const enquiry = await Enquiry.find({});
        if (!enquiry) {
            return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
        }
        return NextResponse.json({data:enquiry,message:"Enquiry fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        await connectDB();
        const enquiry = await Enquiry.create(body);
        if (!enquiry) {
            return NextResponse.json({ message: "Something went wrong, please try again later" }, { status: 404 });
        }
        return NextResponse.json({data:enquiry,message:"Thank you, we will get back to you soon"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const enquiry = await Enquiry.findByIdAndDelete(id);
        if (!enquiry) {
            return NextResponse.json({ message: "Something went wrong, please try again later" }, { status: 404 });
        }
        return NextResponse.json({data:enquiry,message:"Enquiry deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
