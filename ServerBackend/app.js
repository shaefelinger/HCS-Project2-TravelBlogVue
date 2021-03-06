const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser. urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3000;

mongoose.connect('mongodb://localhost:27017/travelblogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const articleSchema = mongoose.Schema({
//   title: String,
//   content: String,
// });

const blogpostSchema = mongoose.Schema({
  name: String,
  longName: String,
  coords: { lat: Number, lng: Number },
  title: String,
  description: String,
  rating: String,
  month: String,
  year: String,
  image1URL: String,
  image2URL: String,
  wiki: String,
  utc_offset: Number,
  authorID: String
});

// const Article = mongoose.model('Article', articleSchema);
const Blogpost = mongoose.model('Blogpost', blogpostSchema);



app
  .route('/blogposts')
  .get((req, res) => {
    Blogpost.find((err, foundBlogposts) => {
      if (!err) {
        res.send(foundBlogposts);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const newBlogpost = new Blogpost({
      name: req.body.name,
      longName: req.body.longName,
      title: req.body.title,
      description: req.body.description,
    });
    console.log(req.body);  
    newBlogpost.save((err) => {
      if (!err) {
        res.send('Succesfully added a new post: ' + newBlogpost );
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Blogpost.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted ALL blogposts.');
      } else {
        res.send(err);
      }
    });
  });

  // app
//   .route('/articles')
//   .get((req, res) => {
//     Article.find((err, foundArticles) => {
//       if (!err) {
//         res.send(foundArticles);
//       } else {
//         res.send(err);
//       }
//     });
//   })
//   .post((req, res) => {
//     const newArticle = new Article({
//       title: req.body.title,
//       content: req.body.content,
//     });
//     newArticle.save((err) => {
//       if (!err) {
//         res.send('Succesfully added a new article');
//       } else {
//         res.send(err);
//       }
//     });
//   })
//   .delete((req, res) => {
//     Article.deleteMany((err) => {
//       if (!err) {
//         res.send('Successfully deleted ALL articles.');
//       } else {
//         res.send(err);
//       }
//     });
//   });



///////////////////// request for a specific blogpost
app.route('/articles/:articleTitle')
  .get((req, res) => {
    Article.findOne(
      {title: req.params.articleTitle}, (err, foundArticle) => {
        if(foundArticle) {  
          res.send(foundArticle);
        } else {
          res.send("No Article found");
        }
      }
    )
    // console.log(`du bist bei ${req.params.articleTitle} `);
    // res.send('immerhin');
  })

  .put((req, res) => {
    Article.update(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      (err, results) => {
        if(!err) {
          res.send(results);
        } else {
          res.send(err)
        }
      }
    )
  })

  .patch((req,res) => {
    Article.update(
      {title: req.params.articleTitle},
      {$set: req.body},
      (err, results) => {
        if(!err) {
          res.send(results);
        } else {
          res.send(err)
        }
      }
    )
  })
  .delete((req, res) => {
    Article.deleteOne(
      {title: req.params.articleTitle},
      (err) => {
        if(!err) {
          res.send("🚫successfully deleted");
        } else {
          res.send(err)
        }
      })
  });

app.listen(port, () => {
  console.log('👍 Server started on port' + port);
});
