/* eslint-disable */
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  pageExtensions: ['page.tsx'],
  i18n,
}

module.exports = nextConfig
