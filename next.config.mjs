const {TerserPlugin} = require("next/dist/build/webpack/plugins/terser-webpack-plugin/src");

const nextConfig = {
    experimental: {
        optimizeServerReact: true,
        optimisticClientCache: true,
        serverMinification: true,
        scrollRestoration: true,
        serverSourceMaps: false,
        workerThreads: true,
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
            minimizer: [
                new TerserPlugin({
                    parallel: 4,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ['console.log'],
                            passes: 2,
                            toplevel: true,
                        },
                        mangle: true,
                        format: {
                            comments: false,
                        },
                    },
                }),
            ],
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
export default nextConfig;