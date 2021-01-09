const express = require('express');
const path = require('path');

const app = express();

const SOURCE_DIR = path.join(__dirname, 'src');
const PORT = process.env.PORT || 3000;

app.use(express.static(SOURCE_DIR));

if (process.env.NODE_ENV === 'production') {
  //Serving the files on the SOURCE folder
  app.use((req, res, next) => {
    // if not an https server, the site will be redirected to https
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

app.get('*', (req, res) => {
  res.sendFile(path.join(SOURCE_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
