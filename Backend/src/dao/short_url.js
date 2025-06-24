
import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async(shorturl,url,userId)=>{
 
    try {
        const newUrl = new urlSchema({
        full_url:url,
        short_url:shorturl
    })
     if(userId)
    {
        newUrl.user = userId;
    }
    await newUrl.save() 
   
    } catch (error) {
        if(error.code == 11000)
        {
             throw new ConflictError("Short url already exists");
        }
         throw new Error(error);
    }
   
    
}
export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}});
}
export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short_url:slug});
}