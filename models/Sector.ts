import mongoose from "mongoose";

const SectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Sector || mongoose.model("Sector", SectorSchema);
