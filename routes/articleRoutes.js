const express = require('express')
const router = express.Router()

const articleController = require('../controllers/articleController')


router.post('/', articleController.createArticle);
router.get('/article/:id', articleController.getArticle);
router.get('/', articleController.getArticles);
router.get('/category', articleController.getArticlesByCategory);
router.put('/:id');
router.delete('/:id');

module.exports = router