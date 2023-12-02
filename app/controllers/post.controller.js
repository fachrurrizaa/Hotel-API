const db = require("../models");
const Post = db.posts;
const imagekit = require("../../config/imagekit");

exports.findAll = (req, res) => {
    Post.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        });
}

exports.create = async (req, res) => {
    try {
      const { name, description, facility, location, price, link } = req.body;
      const uploadedImages = [];
  
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded.' });
      }
  
      // Upload gambar ke ImageKit dan simpan URL gambar
      for (const file of req.files) {
        if (!file.buffer) {
          return res.status(400).json({ error: 'Invalid file format.' });
        }
  
        const uploadResponse = await imagekit.upload({
          file: file.buffer,
          fileName: file.originalname,
        });
  
        uploadedImages.push(uploadResponse.url);
      }
  
      // Simpan data post ke MongoDB dengan URL gambar
      const newPost = new Post({
        name,
        description,
        facility,
        location,
        price,
        images: uploadedImages,
        link,
      });
  
      await newPost.save();
  
      res.json({ post: newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).send({
          message: `Post not found with id ${id}`
        });
      }

      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error retrieving post with id=" + id
      });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;

    try {
      const updatedPost = await Post.findByIdAndUpdate(id, req.body);

      if (!updatedPost) {
        return res.status(404).send({
          message: `Cannot update post with id=${id}. Maybe post was not found!`
        });
      }

      res.send({ message: "Post was updated successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Error updating post with id=" + id
      });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return res.status(404).send({
          message: `Cannot delete post with id=${id}. Maybe post was not found!`
        });
      }

      res.send({ message: "Post was deleted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Could not delete post with id=" + id
      });
    }
}
