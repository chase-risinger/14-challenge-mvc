const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog, User, Comment, Vote } = require('../models');

// get all blogs for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Blog.findAll({
    attributes: [
      'id',
      'title',
      'blog_content',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE blog.id = vote.blog_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBlogData => {
      const blogs = dbBlogData.map(blog => blog.get({ plain: true }));

      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single blog
router.get('/blog/:id', (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'blog_content',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE blog.id = vote.blog_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBlogData => {
      if (!dbBlogData) {
        res.status(404).json({ message: 'No blog found with this id' });
        return;
      }

      const blog = dbBlogData.get({ plain: true });

      res.render('single-blog', {
        blog,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
