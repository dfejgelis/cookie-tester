const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const tracking = (req, res) => {
  // Set cookie
  res.cookie('foo1', 'cookieValue', {
    expires: new Date('Mon, 13 Mar 2017 21:37:13 GMT'),
    path: '/',
  });

  res.cookie('foo2', 'cookieValue', {
    expires: new Date('Mon, 13 Mar 2017 21:37:13 GMT'),
    path: '/',
  });
  res.send(req.cookies);
  console.log('Setting Cookies...');
};

const convert = (req, res) => {
  res.send(req.cookies);
  console.log('Receiving Cookies: ', JSON.stringify(req.cookies, null, 2));
};


app.get('/', (req, res) => {
  res.send(req.cookies);
  // console.log('Cookies: ', req.cookies);
});

app.get('/tracking', tracking);
app.get('/convert', convert);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
