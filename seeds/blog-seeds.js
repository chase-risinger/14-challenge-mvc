const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_content: 'https://nasa.gov/donec.json'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    blog_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx'
  },
  {
    title: 'Nunc purus.',
    blog_content: 'http://desdev.cn/enim/blandit/mi.jpg'
  },
  {
    title: 'Pellentesque eget nunc.',
    blog_content: 'http://google.ca/nam/nulla/integer.aspx'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    blog_content: 'https://stanford.edu/consequat.png'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    blog_content: 'http://edublogs.org/non/ligula/pellentesque.js'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_content: 'http://ucla.edu/consequat/nulla.html'
  },
  {
    title: 'Duis ac nibh.',
    blog_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
