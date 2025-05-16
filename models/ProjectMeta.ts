import mongoose from "mongoose";

const projectMetaSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
});

export default mongoose.models.ProjectMeta || mongoose.model("ProjectMeta", projectMetaSchema);
