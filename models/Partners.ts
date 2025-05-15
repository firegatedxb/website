import mongoose from "mongoose";

const PartnersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    partners:[
        {
            name:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            logo:{
                type:String,
                required:true
            },
            logoAlt:{
                type:String,
            },
            image: {
                type: String,
                required: true,
            },
            imageAlt: {
                type: String,
            },
            website:{
                type:String,
            }
        }
    ],
    accredit:[
        {
            accreditImage: {
                type: String,
                required: true,
            },
            accreditImageAlt: {
                type: String,
            },
        }
    ]
});

export default mongoose.models.Partners || mongoose.model("Partners", PartnersSchema);