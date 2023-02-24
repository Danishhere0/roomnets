/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA({
  reactStrictMode: false,
  i18n,
  env: {
    API_URL: "http://localhost:3002/api/v1",
    GOOGLE_API_KEY: "AIzaSyBSMC-WsolV5o7q_HyQaNWKw-d-75JIW7g",
    PAYSTACK_KEY: "sk_test_82fde3c8244fda92873ad6c1b12287389badd38f",
    JWTKEY: "coolUser",
  },
 // webpack5: true,
  plugins: [
    new Dotenv()
  ],
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

