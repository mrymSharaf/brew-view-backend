const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

function multerSetup() {

    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: async (req, file) => {
            return {
                folder: 'products-images',
                allowed_formats: ['jpg', 'jpeg', 'png'],
                transformation: [{ width: 500, height: 500, crop: 'limit' }],
                public_id: file.originalname.split('.')[0] + '-' + Date.now()
            }
        }
    })
    return multer({ storage })
}


console.log("Cloudinary configured for cloud:", cloudinary.config().cloud_name)

module.exports = { cloudinary, multerSetup }