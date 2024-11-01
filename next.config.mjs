const {TerserPlugin} = require("next/dist/build/webpack/plugins/terser-webpack-plugin/src");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        optimizeServerReact: true,
        optimisticClientCache: true,
        serverMinification: true,
        scrollRestoration: true,
        serverSourceMaps: false,
        workerThreads: true,
        useLightningcss: true,
    },
    compiler: {
        styledComponents: true,
        reactRemoveProperties: true,
        removeConsole: true,
    },
    typescript: { ignoreBuildErrors: true },
    eslint: { ignoreDuringBuilds: true },
    compress: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
    swcMinify: true,
    reactStrictMode: true,
    webpack(config, { isServer, dev }) {
        if (!isServer) {
            config.optimization.splitChunks = {};
        }

        if (config.cache && !dev) {
            config.cache = Object.freeze({
                type: 'memory',
            });
        }

        config.optimization = {
            ...config.optimization,
            minimize: true,
            checkWasmTypes: false,
            concatenateModules: true,
            removeEmptyChunks: true,
            mergeDuplicateChunks: true,
            flagIncludedChunks: true,
            sideEffects: true,
            providedExports: true,
            splitChunks: {
                minSize: 17000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: "_",
                enforceSizeThreshold: 30000,
                chunks: 'async',
            },
        };

        config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];

        return config;
    },
};

module.exports = withBundleAnalyzer(nextConfig);