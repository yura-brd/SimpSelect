const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Копия сборки для GitHub Pages (docs/index.html подключает ./lib/*): Pages отдаёт только папку docs
class CopyToDocsPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('CopyToDocsPlugin', () => {
      const dir = path.resolve(__dirname, 'docs/lib');
      fs.mkdirSync(dir, { recursive: true });
      ['simpleSelect.js', 'style.css'].forEach((file) => {
        fs.copyFileSync(path.resolve(__dirname, 'dist', file), path.join(dir, file));
      });
    });
  }
}

module.exports = ({ development }) => ({
  entry: ['./src/simpleSelect.ts'],
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  output: {
    filename: 'simpleSelect.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SimpleSelect',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self === \'undefined\' ? this : self',
  },
  resolve: {
    extensions: ['.ts', '.css']
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/polyfill.js',
          to: 'polyfill.js',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/demo/index.html',
      filename: './demo/index.html',
      scriptLoading: "blocking",
      inject: 'head',
    }),
    ...(development ? [] : [new CopyToDocsPlugin()]),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {},
                  ],
                ],
              },
            },
          },
        ],
      }
    ],
  },


  optimization: {
    minimize: !development,
    minimizer: !development ? [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ] : [],
  },
});
