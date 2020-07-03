const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/', (req, res) => {
  let post = new Post(req.body);
  post
    .save()
    .then(() => {
      res.status(200).json({ post: 'Post added successfully' });
    })
    .catch(() => res.status(400).send({ error: 'Post failed.' }));
});

module.exports = router;
