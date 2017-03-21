let express = require('express');
let path = require('path');

let app = express();
let env = app.get('env');
let port = proceas.env.PORT;
app.set('port', port);

// production
if (env === "production") {
  app.use(express.static('dist'));

  app.listen(port, () => {
    console.log("app listening at http://localhost:%d mode:%s", port, env)
  });
}

// development
if (env === "development") {
  let index = require('./routes/index');
  app.use('/', index);

  app.set('views', path.join(__dirname, 'src', 'pug'));
  app.set('view engine', 'pug')
  
  app.listen(port, () => {
    console.log("app listening at http://localhost:%d mode:%s", port, env)
  });
}
