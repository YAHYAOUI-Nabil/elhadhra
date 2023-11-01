const Article = require('../models/articleModel');


exports.createArticle = (req, res) => {

    const newArticle = new Article({
        title: req.body.title,
        summary: req.body.summary,
        imageUrl: req.body.imageUrl,
        imageDescription: req.body.imageDescription,
        description: req.body.description,
        category: req.body.category,
        author: req.body.author,
        authorAvatar: req.body.authorAvatar,
        publishDate: req.body.publishDate,
        updateDate: req.body.updateDate,
        contents: req.body.contents,
        likes: req.body.likes,
        unlikes: req.body.unlikes,
        comments: req.body.comments,
    })

    newArticle.save()
              .then((article) => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(article);
              })
              .catch((error) => {
                console.log(`Error occured on saving article: ${error}`)
              })
}



exports.getArticles = (req, res) => {
    Article.find({})
           .then((articles) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({articles});
           })
           .catch((error) => {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({message: error.message});
           })
}

exports.getArticlesByCategory = (req, res) => {
    const {category} = req.query;
    Article.find({category})
           .then((articles) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({articles});
           })
           .catch((error) => {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({message: error.message});
           })
}

exports.getArticle = (req, res) => {
    const id = req.params.id;

    Article.findById(id)
           .then((article) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({article});
           })
           .catch((error) => {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({message: error.message});
            })
}

exports.editArticle = (req, res) => {}
exports.deleteArticle = (req, res) => {}