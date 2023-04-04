const router = require('express').Router();
const { Blog, Comments } = require('../../models');


// GET all comments for homepage
router.get('/', async (req, res) => {
  try {
    const dbcommentdata = await Comments.findAll({
    });

    res.status(200).json(dbcommentdata);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET one comment
// Use the custom middleware before allowing the user to access the blog
router.get('/:id', async (req, res) => {
  try {
    // find one blog by id with associated products
    const dbcommentdata = await Comments.findByPk(req.params.id);

    if (!dbcommentdata) {
      res.status(404).json({ message: 'No comments found with this id' });
      return;
    }

    res.status(200).json(dbcommentdata);
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST method to create a comment specific to a blog
router.post('/', async (req, res) => {
  try {
    const { author, comment, blogID } = req.body;
    const newcomment = await Comments.create({
      comment: comment,
      comment_author: author,
      blog_id: blogID,
    });
    res.status(201).json({ message: "Comment created successfully"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create Comment' });
  }
});

module.exports = router;

// find all the comments specific to a blog
router.get('/:id/comments/', async (req, res) => {
  try {
    
    const dbcommentdata = await Comments.findAll({
      where: { blog_id: req.params.id }
  });

    console.log(dbcommentdata);

    if (!dbcommentdata) {
      res.status(404).json({ message: 'No comments found with this id' });
      return;
    }

    res.status(200).json(dbcommentdata);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;