const sharp = require('sharp');


//ceditar una imagen
sharp('original.png')
    .resize(80)
    .greyscale()
    .toFile('redimencionada.png')