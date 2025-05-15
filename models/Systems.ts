import mongoose from "mongoose";

const systemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    bannerAlt: {
        type: String,
    },
    systems:[
        {
            image: {
                type: String,
                required: true,
            },
            imageAlt: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            logo: {
                type: String,
                required: true,
            },
            logoAlt: {
                type: String,
                required: true,
            },
            bannerImage: {
                type: String,
                required: true,
            },
            bannerAlt: {
                type: String,
            },
            componentTitle: {
                type: String,
                required: true,
            },
            componentDescription: {
                type: String,
            },
            components: {
                type: Array,
            },
            slug: {
                type: String,
                required: true,
            },
            metaTitle: {
                type: String,
            },
            metaDescription: {
                type: String,
            },
        }
    ]
});

export default mongoose.models.System || mongoose.model("System", systemSchema);