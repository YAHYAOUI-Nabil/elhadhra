const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController')


router.post('/', videoController.createVideo)
router.get('/:id', videoController.getVideoByIdea)
router.get('/', videoController.getVideos)
router.put('/:id', videoController.editVideo)
router.delete('/:id', videoController.deleteVideo)

module.exports = router