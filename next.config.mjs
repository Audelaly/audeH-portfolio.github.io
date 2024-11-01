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
};
export default nextConfig;