import mongoose from "mongoose";

const systemSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    pageTitle: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    banner: {
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
            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            logo: {
                type: String,
            },
            logoAlt: {
                type: String,
            },
            banner: {
                type: String,
                
            },
            bannerAlt: {
                type: String,
            },
            componentTitle: {
                type: String,
            },
            componentDescription: {
                type: String,
            },
            components: {
                type: Array,
            },
            slug: {
                type: String,
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