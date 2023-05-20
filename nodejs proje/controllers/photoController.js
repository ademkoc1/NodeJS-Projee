import Photo from '../models/photoModels.js'
import { v2 as cloudinary } from 'cloudinary';

const createPhoto =async (req,res)=>{


    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: 'lenslight_tr',
        }
      );

    try {
        await Photo.create({
            name:req.body.name,
            description:req.body.description,
            user:res.locals.user._id,
            url: result.secure_url,
        });
        res.status(201).redirect('/users/dashboard')
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        })
    }
   
}

const getAllPhotos = async (req, res) => {
    try {
      const photos = res.locals.user
        ? await Photo.find({ user: { $ne: res.locals.user._id } })
        : await Photo.find({});
      res.status(200).render('photos', {
        photos,
       
      });
    } catch (error) {
      res.status(500).json({
        succeded: false,
        error,
      });
    }
  };

const getAPhotos =async (req,res)=>{

    try {
        const photos =await Photo.findById({_id:req.params.id}).populate('user')
        res.status(200).render('photo',{
            photo,
        })
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        })
    }
   
}


export {createPhoto,getAllPhotos,getAPhotos};