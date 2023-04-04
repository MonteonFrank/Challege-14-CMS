const router = require('express').Router();
const { Blog } = require('../models')
const { Comments } = require('../models');
const withAuth = require('../utils/auth')


// Route to the home page where all the blogs are shown
router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll();
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      const username = req.session.username;
      res.render('home', { blogs, username, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
});


// Route to a specific blog and if the user is not logged in, redirects them to the login page
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    // Find one blog by id with associated comments and author
    let dbBlogData = await Blog.findByPk(req.params.id);
    let dbCommentData = await Comments.findAll({
      where: { blog_id: req.params.id }
    });

    
    if (!dbBlogData || !dbCommentData) {
      res.status(404).json({ message: "No blog nor comments found with this id" });
      return;
}

    const blogData = dbBlogData.get({ plain: true });
    const commentData = dbCommentData.map(comment => comment.get({ plain: true }));
    const username = req.session.username;
    // Render the "blog-comments" template with the blog data
    res.render("blog-comments", { blogData, username, commentData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render the dashboard and show only the blogs specific to the user who is logged in 
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const username = req.session.username;

    // Find all blogs submitted by the logged-in user
    const dbBlogData = await Blog.findAll({
      where: { blog_author: username }
    });

    res.render("dashboard", {
      blogs: dbBlogData.map(blog => blog.get({ plain: true })),
      username,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Route to edit a specific blog
router.get('/editblog/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);

    res.render('editblog', { 
      logged_in: req.session.logged_in, 
      blog_title: blog.blog_title, 
      blog_content: blog.blog_content, 
      blog_id: blog.id 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Route to the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {logged_in: req.session.logged_in});
});





module.exports = router;

