const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    env.goal ?? console.log('Goal: ', env.goal);
    env.mode ?? console.log('Mode: ', env.mode);

    return {
        entry: './src/index.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.tsx?%/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Bismuth",
            }),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: "bismuth.js",
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
    }
};
