const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    'style-loader',

                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    'css-loader',

                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer()],
                        },
                    },

                    // Loads a SASS/SCSS file and compiles it to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
