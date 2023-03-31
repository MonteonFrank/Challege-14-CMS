const { Blog } = require('../models');


const blogdata = [
  {
    blog_title: 'Blog Test 1',
    blog_content: 'Lorem ipsum dolor sit amet, ad dicant scaevola quaestio per, quem petentium te mel, mel graece semper qualisque id. Ne populo dolorum liberavisse usu, mel justo inani deseruisse in, per et alia recteque persecuti. Ea pri idque civibus ponderum. Ne ipsum conceptam persequeris vis, ei usu ridens commune. Augue instructior ius eu, possim fabulas appareat ne sed.',
    blog_author: 'Frank',

  },
  {
    blog_title: 'Blog Test 2',
    blog_content: 'Lorem ipsum dolor sit amet, ad dicant scaevola quaestio per, quem petentium te mel, mel graece semper qualisque id. Ne populo dolorum liberavisse usu, mel justo inani deseruisse in, per et alia recteque persecuti. Ea pri idque civibus ponderum. Ne ipsum conceptam persequeris vis, ei usu ridens commune. Augue instructior ius eu, possim fabulas appareat ne sed.',
    blog_author: 'Adriana',
  },
  {
    blog_title: 'Blog Test 3',
    blog_content: 'Lorem ipsum dolor sit amet, ad dicant scaevola quaestio per, quem petentium te mel, mel graece semper qualisque id. Ne populo dolorum liberavisse usu, mel justo inani deseruisse in, per et alia recteque persecuti. Ea pri idque civibus ponderum. Ne ipsum conceptam persequeris vis, ei usu ridens commune. Augue instructior ius eu, possim fabulas appareat ne sed.',
    blog_author: 'Francisco',
  },
  {
    blog_title: 'Blog Test 4',
    blog_content: 'Lorem ipsum dolor sit amet, ad dicant scaevola quaestio per, quem petentium te mel, mel graece semper qualisque id. Ne populo dolorum liberavisse usu, mel justo inani deseruisse in, per et alia recteque persecuti. Ea pri idque civibus ponderum. Ne ipsum conceptam persequeris vis, ei usu ridens commune. Augue instructior ius eu, possim fabulas appareat ne sed.',
    blog_author: 'Kassandra',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
