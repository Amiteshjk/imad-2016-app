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
     <meta name="viewport" content="width=device-width,initial-scale=1" />
    <p>
    <body>
    </p>
    <p>
    <font size="10">
    <font color="green">
          
        </font>
        </font>
        </body>
        </p>`
        
},
'article-two':{
title:'article two | Amitesh',
heading:'article two',
content:`
 <meta name="viewport" content="width=device-width,initial-scale=1" />
<p>
       
        </p>
        <p>
        <h4>
        <font size="7">
        <align="center">
       
        </font>
        </h4>
    </p>`

           },
'article-three':{
title: 'article-three | Amitesh',
heading:'article three',
content:`
 <meta name="viewport" content="width=device-width,initial-scale=1" />
     <p>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/IhuI759LDco" frameborder="0" allowfullscreen></iframe>
     </p>
     <p>
     <h4>
     <font size="7">
     <marquee>Harry Potter best scene </marquee>
     </h4>
     </font>
     </p> `
 }
};
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>

    <div>
        <div class="lusu">
        <a href="/">Home</a>
        <a href="/article-one">article one</a>
        <a href="/article-two">article two</a>
        <a href="/article-three">article three</a>
        </font>
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

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
    
});

var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/https://i.kinja-img.com/gawker-media/image/upload/kx6jiylirhu8a4swvmmi.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'https://i.kinja-img.com/gawker-media/image/upload/kx6jiylirhu8a4swvmmi.jpg'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
