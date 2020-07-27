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
    devServer: {
        port: 4200
    },
    module: {
        rules: [ 
            {
                test: /\.pug$/,
                use: [ 'pug-loader?pretty=true' ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './pug/pages/index.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'UI kit/form elements.html',
            template: './pug/UI kit/form elements.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'UI kit/colors.html',
            template: './pug/UI kit/colors.pug',
        })
    ]
    
}