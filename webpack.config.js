// bundle all code into single bundle file

const path = require('path')


// properties that represent the configuration of webpack
module.exports = {
    mode: 'development',
    // specifying entry path for webpack to look 
    entry: './src/index.js',
    // outputs an object
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}