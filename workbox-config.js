module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**/*.{png,svg,html,css,js,json}'
    ],
    swDest: 'public/service-worker.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    runtimeCaching: [
        {
            urlPattern: /\.(?:eot|ttf|woff|woff2|otf)$/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'font-cache',
                expiration: {
                    maxEntries: 20,
                    maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for a year
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            urlPattern: /\.html$/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'page-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for a month
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
};