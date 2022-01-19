'use strict';
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const fs = require('fs-extra');

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

// Copy new locales
  const newLocaleFilePath = path.join(__dirname, 'translations');

  if (fs.existsSync(newLocaleFilePath)) {
    fs.copy(newLocaleFilePath, path.resolve(__dirname, '../../.cache', 'admin', 'src', 'translations'));
  }
  const indexFilePath = path.join(__dirname, 'index.js');

  if (fs.existsSync(indexFilePath)) {
    fs.copy(indexFilePath, path.resolve(__dirname, '../../.cache', 'admin', 'src', 'index.js'));
  }

  return config;
};
