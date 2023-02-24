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
    WEB_URL: "http://localhost:3000/",
    API_URL: "http://localhost:3002/api/v1",
    GOOGLE_API_KEY: "AIzaSyBSMC-WsolV5o7q_HyQaNWKw-d-75JIW7g",
    PAYSTACK_KEY: "sk_test_82fde3c8244fda92873ad6c1b12287389badd38f",
    REACT_APP_FLUTTERWAVE_PUBLIC_KEY:"FLWPUBK_TEST-e96ca53411ac8244d05c06677fca3509-X",
    REACT_APP_GOOGLE_API_KEY:"AIzaSyBSMC-WsolV5o7q_HyQaNWKw-d-75JIW7g",
    REACT_APP_PAYPAL_CLIENT:"ActcPggq8XVCKbQJz4uUKK8p5UVY7ZjTIajGWwQrI4UqcBs0NQoKcCFzPD0TgSwfDVq0a1cwC-jPlj7I",
    REACT_APP_GOOGLE:"AIzaSyBSMC-WsolV5o7q_HyQaNWKw-d-75JIW7g",
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

