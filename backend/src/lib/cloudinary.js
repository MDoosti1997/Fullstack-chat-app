import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';

// لود کردن متغیرهای محیطی
config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // نام کلود را از متغیر محیطی دریافت کنید
    api_key: process.env.CLOUDINARY_API_KEY,         // کلید API کلودیناری
    api_secret: process.env.CLOUDINARY_API_SECRET    // کلید محرمانه
});

export default cloudinary;
