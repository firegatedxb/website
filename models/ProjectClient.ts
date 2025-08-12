import mongoose from "mongoose";

const ProjectClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export default mongoose.models.ProjectClient || mongoose.model("ProjectClient", ProjectClientSchema);
