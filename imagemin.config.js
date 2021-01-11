const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/img/*.{jpeg,jpg,png}'], {
    destination: './src/img',
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log('Images optimized');
})();
