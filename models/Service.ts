import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    },
    banner:{
        type:String
    },
    bannerAlt:{
        type:String
    },
    pageTitle:{
        type:String
    },
    services:{
        title:{
            type:String
        },
        description:{
            type:String
        },
        items:[{
            title:{
                type:String
            },
            logo:{
                type:String
            },
            logoAlt:{
                type:String
            },
            description:{
                type:String
            },
            image:{
                type:String
            },
            imageAlt:{
                type:String
            }
        }]
    }
})

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);