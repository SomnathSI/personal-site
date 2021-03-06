import 'dotenv/config';

import fs from 'fs';
import path from 'path';

import express from 'express';
import ReactGA from 'react-ga';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../../webpack/webpack.config.babel';
import GOOGLE_ANALYTICS_TOKEN from "../../../.secrets";

const env = process.env.NODE_ENV || 'development';
ReactGA.initialize(GOOGLE_ANALYTICS_TOKEN);

const routes = (app) => {
  if (env === 'development') { // eslint-disable-line eqeqeq
    const compiler = webpack(config);

    compiler.plugin('done', () => {
      console.info('Webpack finished compiling.');
    });

    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
      },
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('/*', (req, res) => {
      const content = middleware.fileSystem.readFileSync(path.join(__dirname, '../../../build/index.html'));
      res.set('Content-Type', 'text/html');
      res.send(content);
    });
  } else {
    app.use('/dist', express.static(path.join(__dirname, '../../../build')));
    const content = fs.readFileSync(path.join(__dirname, '../../../build/index.html'), 'utf8');

    app.get('/*', (req, res) => {
      res.set('Content-Type', 'text/html');
      res.send(content);
    });
  }
};

export default routes;
