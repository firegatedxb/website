import { NextRequest, NextResponse } from "next/server";
import Commitment from "@/models/Commitment";
import connectDB from "@/lib/mongodb";

export async function GET() {
    try {
        await connectDB();
        const commitment = await Commitment.findOne();
        if (!commitment) {
            return NextResponse.json({ message: "Commitment not found" }, { status: 404 });
        }
        return NextResponse.json({data:commitment});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        await connectDB();
        const body = await request.json();
        const { banner, bannerAlt,pageTitle, firstSection, secondSection, thirdSection, firstSectionItems, secondSectionItems, thirdSectionItems,metaTitle,metaDescription } = body;
        console.log(body)
        const commitment = await Commitment.findOne({});
        if (!commitment) {
            return NextResponse.json({ message: "Commitment not found" }, { status: 404 });
        }

        commitment.banner = banner;
        commitment.bannerAlt = bannerAlt;
        commitment.pageTitle = pageTitle;
        commitment.firstSection.items = firstSectionItems;
        commitment.secondSection.items = secondSectionItems;
        commitment.thirdSection.items = thirdSectionItems;
        commitment.firstSection.title = firstSection.title;
        commitment.firstSection.description = firstSection.description;
        commitment.secondSection.title = secondSection.title;
        commitment.secondSection.description = secondSection.description;
        commitment.thirdSection.title = thirdSection.title;
        commitment.thirdSection.description = thirdSection.description;
        commitment.metaTitle = metaTitle;
        commitment.metaDescription = metaDescription;
        await commitment.save();
        return NextResponse.json({message:"Commitment updated successfully"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
