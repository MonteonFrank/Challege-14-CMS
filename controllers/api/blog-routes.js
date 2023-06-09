const router = require("express").Router();
const { Blog, Comments } = require("../../models");

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const dbblogdata = await Blog.findAll();

    res.status(200).json(dbblogdata, {message: "These are all the blogs"});
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET one blog
// Used the custom middleware before allowing the user to access the blog
router.get("/:id", async (req, res) => {
  try {
    // find one blog by id with associated products
    let dbblogdata = await Blog.findByPk(req.params.id, 
      {
        include: [Comments]

      });

    if (!dbblogdata) {
      res.status(404).json({ message: "No blog found with this id" });
      return;
    }

    res.status(200).json(dbblogdata, {message:"This is the blog you are looking for"});
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST Method to create a new blog
router.post("/", async (req, res) => {
  try {
    const { blog_title, blog_content, blog_author } = req.body;
    const newblog = await Blog.create({
      blog_title,
      blog_content,
      blog_author,
    });
    res.status(201).json({ message: "Blog created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Blog" });
  }
});


// Delete method to destroy a specific blog
router.delete('/:id', async (req, res) =>{
  try{

    const blog = await Blog.findByPk(req.params.id);

    if(!blog){
      res.status(404).json({message: 'No blog found with this id'});
      return;
    }

    await blog.destroy();

    res.status(200).json({message: 'Blog deleted successfully'});
  } catch(err){
    res.status(500).json(err);
  }

});

// PUT method to modify a specific blog
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);

    await blog.update({
      blog_title: req.body.blog_title,
      blog_content: req.body.blog_content
    }, {message: "Blog updated successfully!"});

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({message: "Failed to update blog!"});
  }
});


module.exports = router;
