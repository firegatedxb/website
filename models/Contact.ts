import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    },
    image:{
        type:String
    },
    imageAlt:{
        type:String
    },
    pageTitle:{
        type:String
    },
    contacts:[{
        title:{
            type:String
        },
        address:{
            type:String
        },
        phone:{
            type:String
        },
        email:{
            type:String
        }
    }],
    socials:[{
        title:{
            type:String
        },
        link:{
            type:String
        }
    }]
})

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);