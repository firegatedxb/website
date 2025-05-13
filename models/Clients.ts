import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    clients:[
        {
            image: {
                type: String,
                required: true,
            },
            imageAlt: {
                type: String,
                required: true,
            },
        }
    ]
});

export default mongoose.models.Client || mongoose.model("Client", ClientSchema);
