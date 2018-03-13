module.exports = {
    "globDirectory": "./build/",
    "globPatterns": [
        "**/*.html",
        "**/*.js",
        "**/*.css"
    ],
    "swDest": "build/service-worker.js",
    "clientsClaim": true,
    "skipWaiting": true,
    "runtimeCaching":  [
        {
            "urlPattern": new RegExp('http://calendar.ecam.be'),
            "handler": "staleWhileRevalidate"
        },
        {
            "urlPattern": new RegExp('https://fonts.googleapis.com'),
            "handler": "staleWhileRevalidate"
        }
      ]
};