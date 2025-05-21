import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug:{
        type:String,
        required:true
    },
    client: {
        type: String,
        required: true,
    },
    sector: {
        type: String,
        required: true,
    },
    consultant: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        default: "",
    },
    thumbnailAlt: {
        type: String,
        default: "",
    },
    coverPhoto: {
        type: String,
        default: "",
    },
    coverPhotoAlt: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    },
    featuredProject:{
        type:Boolean,
        default:false
    },
    status:{
        type:Boolean,
        default:true
    }
});


export default mongoose.models.Project || mongoose.model("Project", projectSchema);
