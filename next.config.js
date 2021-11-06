/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    //disable: process.env.NODE_ENV === 'development',
  },
  env: {
    apiUrl: 'http://localhost:5000',
    nextUrl: 'http://localhost:3000',
  },
  reactStrictMode: true,
});