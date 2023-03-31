const { Comments } = require('../models');

const commentdata = [
  {
    comment: 'Test Comment 1',
    comment_author: 'Test author 1',
    blog_id: 1,
  },
  {
    comment: 'Test Comment 2',
    comment_author: 'Test author 2',
    blog_id: 2,
  },
  {
    comment: 'Test Comment 3',
    comment_author: 'Test author 3',
    blog_id: 3,
  },
  {
    comment: 'Test Comment 4',
    comment_author: 'Test author 4',
    blog_id: 4,
  },
  {
    comment: 'Test Comment 5',
    comment_author: 'Test author 5',
    blog_id: 4,
  },
];

const seedBlog = () => Comments.bulkCreate(commentdata);

module.exports = seedBlog;