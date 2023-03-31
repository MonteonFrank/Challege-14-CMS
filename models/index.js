const Blog = require('./Blog');
const Comments = require('./Comments');
const User = require('./User');


Blog.hasMany(Comments, {
  foreignKey: 'blog_id'
}),

Comments.belongsTo(Blog, {
    foreignKey: 'blog_id'
}),


module.exports = { Blog, Comments, User };
