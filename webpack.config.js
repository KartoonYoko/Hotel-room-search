const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [ 'pug-loader?pretty=true' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pug/pages/index.pug',
        })
    ]
    
}