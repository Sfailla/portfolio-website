const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

/*
  This function runs when the cache is initially created.
  So to optimize a new image, first delete the cache then build
*/

;(async () => {
  await imagemin(['src/img/*.{jpeg,jpg,png}'], {
    destination: './src/img',
    plugins: [imageminWebp({ quality: 50 })]
  })

  console.log('Images optimized')
})()
