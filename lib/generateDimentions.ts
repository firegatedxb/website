const dimentions = {
    home:{
        banner:"1920x980",
        about:"830x930",
        partners:"240x80",
        services:"820x718",
        systems:"400x380",
        certifications:"150x42",
        projects:"780x540",
    },
    about:{
        banner:"1920x700",
        intro:"790x760",
        mission:"60x60",
        vision:"60x60",   
        values:"60x60",  
        chairman:"410x460", 
        ceo:"410x460", 
        certifications:"300x280",
    },
    services:{
        banner:"1920x700",
        itemImage:"770x365",
        itemLogo:"30X30",
    },
    systems:{
        banner:"1920x700",
        itemImage:"785x650",
        itemLogo:"30X30",
    },
    fire_fighting:{
        banner:"1920x700",
        itemImage:"520x290",
    },
    emergency_exit_lighting:{
        banner:"1920x700",
        itemImage:"520x290",
    },
    projects:{
        itemImage:"790x600",
    },
    project_details:{
        cover:"1170x780",
    },
    clients:{
        banner:"1920x700",
        itemImage:"160x120",
    },
    partners:{
        banner:"1920x700",
        itemImage:"800x430",
        itemLogo:"180x90",
        accreditation:"220x220",
    },
    commitment:{
        banner:"1920x700",
        cover:"880x980",
        logo:"30x30",
        investingCards:"500x290",
    },
    contact:{
        cover:"685x800",
    }
}

type Dimensions = typeof dimentions;
type Pages = keyof Dimensions;
type SectionTypes<T extends Pages> = keyof Dimensions[T];

export const generateDimentions = <P extends Pages, T extends SectionTypes<P>>(page:P,type:T) => {
    return "Recommended dimentions : "+dimentions[page][type] + " | Size : < 5MB";
}
