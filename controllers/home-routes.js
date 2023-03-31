const router = require('express').Router();
const { Blog } = require('../models')
const { Comments } = require('../models');
const withAuth = require('../utils/auth')

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

    // Get the plain object for the blog data
    const blogData = dbBlogData.get({ plain: true });
    const commentData = dbCommentData.map(comment => comment.get({ plain: true }));
    const username = req.session.username;
    // Render the "blog-comments" template with the blog data
    res.render("blog-comments", { blogData, username, commentData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const username = req.session.username;

    // Find all blogs submitted by the logged-in user
    const dbBlogData = await Blog.findAll({
      where: { blog_author: username }
    });

    console.log(dbBlogData); // <-- Added this line to check the data being retrieved

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



// router.get("/dashboard", withAuth, async (req, res) => {
//   try {

//     const username = req.session.username;
//     // Find all blogs submitted by the logged-in user
//     let dbBlogData = await Blog.findAll({
//       where: { blog_author: username }
//     });

//     console.log(dbBlogData)
    
//     res.render("dashboard", {
//       blogs: dbBlogData,username,
//       logged_in: req.session.logged_in,
//       dbBlogData: dbBlogData
//     });

//   //   res.render("dashboard", { blogs: dbBlogData, username, logged_in: req.session.logged_in });
//   // } catch (err) {
//   //   console.log(err);
//   //   res.status(500).json(err);
//   // }
//   });



router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {logged_in: req.session.logged_in});
});



module.exports = router;

