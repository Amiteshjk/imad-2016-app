var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
 title:'article-one | Amitesh',
    heading: 'article one',
    content:` 
    <p>
    <img src="http://i.dailymail.co.uk/i/pix/2013/01/01/article-2255743-16B7C024000005DC-691_634x424.jpg"/>
    </p>
    <p>
            Hi this is Sourav Ganguly,the best captain of all time!
        </p>`
},
'article-two':{
title:'article two | Amitesh',
heading:'article two',
content:`
<p>
        <img src="http://i.ndtvimg.com/i/2016-02/joey_640x480_71454592517.jpg"/>
        </p>
        <p>
        <h4>
        <font size="7">
        How you doin?
        </font>
        </h4>
    </p>`

           },
'article-three':{
title: 'article-three | Amitesh',
heading:'article three',
content:`
     <p>
Yeah its so obvious and everyone knows it
     </p> `
 }
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">

    <div>
        <a href="/">Home</a>
        <a href="/article-one">article one</a>
        <a href="/article-two">article two</a>
        <a href="/article-three">article three</a>
      <h3>
      ${heading}
    </div>
    <div>
        ${content}
    </div>
</body>
</html>


`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
