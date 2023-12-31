const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './js/scripts.js',
  output: {
    filename: 'scriptswebpack.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv({
        path: './.env', // Caminho para o arquivo .env
        systemvars: true, // Permite que as variáveis de ambiente existentes sejam usadas
        safe: true, // Carrega apenas as variáveis de ambiente definidas no arquivo .env
      }),
    new webpack.DefinePlugin({
      'process.env.UNSPLASH_API_KEY': JSON.stringify(process.env.UNSPLASH_API_KEY),
      'process.env.WEATHER_API_KEY': JSON.stringify(process.env.WEATHER_API_KEY),

    }),
  ],
};