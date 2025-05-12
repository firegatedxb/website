import Sector from "@/models/Sector";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import Project from "@/models/Project";

export async function GET() {
    try {
        await connectDB();
        const sector = await Sector.find();
        if(sector){
            return NextResponse.json({ success: true, data: sector }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error fetching sector" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching sector" }, { status: 500 });
    }
}

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const { name } = await req.json();
        const sector = await Sector.create({ name });
        if(sector){
            return NextResponse.json({ message: "Sector added successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error adding sector" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error adding sector" }, { status: 500 });
    }
}

export async function PATCH(req:NextRequest) {
    const session = await mongoose.startSession();
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        session.startTransaction();
        const { name,oldName } = await req.json();
        const projects = await Project.find({sector: oldName});
        projects.map(async (project) => {
            if(project.sector === oldName){
                await Project.findByIdAndUpdate(project._id, { sector: name }, { new: true });
            }
        });
        const sector = await Sector.findByIdAndUpdate(id, { name,oldName }, { new: true });
        if(sector){
            await session.commitTransaction();
            return NextResponse.json({ message: "Sector updated successfully" }, { status: 200 });
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error updating sector" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error updating sector" }, { status: 500 });
    }finally{
        await session.endSession();
    }
}

export async function DELETE(req:NextRequest) {
    const session = await mongoose.startSession();
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        session.startTransaction();
        const deletedSector = await Sector.findById(id);
        if(deletedSector){
            const projects = await Project.find();
            projects.map(async (project) => {
                if(project.sector === deletedSector.name){
                    await Project.findByIdAndUpdate(project._id, { sector: "" }, { new: true });
                }
            });
        }
        const sector = await Sector.findByIdAndDelete(id);
        if(sector){
            await session.commitTransaction();
            return NextResponse.json({ message: "Sector deleted successfully" }, { status: 200 });
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error deleted industry" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error deleted industry" }, { status: 500 });
    }finally{
        await session.endSession();
    }
}
