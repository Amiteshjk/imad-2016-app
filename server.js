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
            My name is Amitesh. I have a sister. 
        </p>`
},
'article-two':{
title:'article two | Amitesh',
heading:'article two',
content:`
<p>
        Amitesh is better than Lakshna
        </p>
        <p>
            
        Amitesh is stronger than Lakshna
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
