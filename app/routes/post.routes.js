module.exports = function (app) {
    const multer = require('multer');
    const posts = require('../controllers/post.controller.js');
    const router = require('express').Router();
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage })

    router.get('/', posts.findAll);
    router.post('/', upload.array('images', 5),posts.create);
    router.get('/:id', posts.findOne);
    router.put('/:id', posts.update);
    router.delete('/:id', posts.delete);

    app.use('/api/posts', router);
}