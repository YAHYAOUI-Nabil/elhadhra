const Video = require('../models/videoModel');


exports.createVideo = (req,res) => {
    const newVideo = new Video({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        videoUrl: req.body.videoUrl
    })

    newVideo.save()
            .then((video) => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(video);
            })
            .catch((error) => {
                console.log(`Error occured on saving article: ${error}`)
            })
}

exports.getVideoByIdea = (req,res) => {}

exports.getVideos = (req,res) => {
    Video.find({})
         .then((videos) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({videos});
         })
         .catch((error) => {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.json({message: error.message});
         })
}

exports.editVideo = (req,res) => {}

exports.deleteVideo = (req,res) => {}