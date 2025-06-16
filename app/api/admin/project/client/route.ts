import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import Project from "@/models/Project";
import ProjectClient from "@/models/ProjectClient";

export async function GET() {
    try {
        await connectDB();
        const client = await ProjectClient.find();
        if(client){
            return NextResponse.json({ success: true, data: client }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error fetching client" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "Error fetching client" }, { status: 500 });
    }
}

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const { name } = await req.json();
        const client = await ProjectClient.create({ name });
        if(client){
            return NextResponse.json({ message: "Client added successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error adding client" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error adding client" }, { status: 500 });
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
        const projects = await Project.find({client: oldName});
        projects.map(async (project) => {
            if(project.client === oldName){
                await Project.findByIdAndUpdate(project._id, { client: name }, { new: true });
            }
        });
        const client = await ProjectClient.findByIdAndUpdate(id, { name,oldName }, { new: true });
        if(client){
            await session.commitTransaction();
            return NextResponse.json({ message: "Client updated successfully" }, { status: 200 });
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error updating client" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error updating client" }, { status: 500 });
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
        const deletedClient = await ProjectClient.findById(id);
        if(deletedClient){
            const projects = await Project.find();
            projects.map(async (project) => {
                if(project.client === deletedClient.name){
                    await Project.findByIdAndUpdate(project._id, { client: "" }, { new: true });
                }
            });
        }
        const client = await ProjectClient.findByIdAndDelete(id);
        if(client){
            await session.commitTransaction();
            return NextResponse.json({ message: "Client deleted successfully" }, { status: 200 });
        }else{
            await session.abortTransaction();
            return NextResponse.json({ message: "Error deleted client" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();
        return NextResponse.json({ message: "Error deleted client" }, { status: 500 });
    }finally{
        await session.endSession();
    }
}
