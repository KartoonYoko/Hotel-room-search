const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        //path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [ 'pug-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pug/pages/index.pug',
            inject   : true
        })
    ]
    
}