const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
            },
        ],
    },
    resolve: { extensions: ['.jsx', '.js'] },
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets'),
        //             to: path.resolve(__dirname, 'dist'),
        //         },
        //     ],
        // }),
        ...getHtmlPlugins(['index']),
    ],
    entry: {
        index: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        filename: '[name].js',
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlPlugin({
                title: 'Product management',
                filename: `${chunk}.html`,
                chunks: [chunk],
            }),
    );
}
