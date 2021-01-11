const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/img/*.{jpeg,jpg,png}'], {
    destination: './src/img',
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log('Images optimized');
})();

// module.exports = {
//   gifsicle: { optimizationLevel: 2, interlaced: false, colors: 10 },
//   mozjpeg: { progressive: true, quality: 10 },
//   pngquant: { quality: [0.25, 0.5] },
//   webp: { quality: 10 },
// };
