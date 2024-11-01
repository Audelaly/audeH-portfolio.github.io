// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const withCompression = require('next-compression');

module.exports = withBundleAnalyzer(
    withCompression({
        images: {
            domains: ['example.com'], // Add your image domains here
        },
        compress: true,
        webpack(config, { isServer }) {
            if (!isServer) {
                config.resolve.alias['@sentry/node'] = '@sentry/browser';
            }
            return config;
        },
    })
);