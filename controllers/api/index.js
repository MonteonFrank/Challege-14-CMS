const router = require('express').Router();

const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');


router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
