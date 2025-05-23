import {v2 as cloudinary} from 'cloudinary';
import albumModel from '../models/album.model.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

        const albumData = {
            name,
            desc,
            image: imageUpload.secure_url,
            bgColor
        }
        
        const album = albumModel(albumData);
        await album.save();
        
        res.json({success:true, message:"Album added"})
    } catch (error) {
        res.json({success:false, message:error})
    }
}

const listAlbum = async (req, res) => {
    try {
        const allAlbums = await albumModel.find({});
        res.json({success:true, albums:allAlbums})
    } catch (error) {
        res.json({success:false, message:error})
    }
}

const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Album removed" });
    } catch (error) {
        res.json({success:false, message:`cannot able to remove album: ${error}`})
    }
}

export {addAlbum, listAlbum, removeAlbum};