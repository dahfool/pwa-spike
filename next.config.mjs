import withSerwistInit from "@serwist/next";

const nextConfig = {};

const withSerwist = withSerwistInit({
    swSrc: "src/sw.ts", // add the path where you create sw.ts
    swDest: "public/sw.js",
    reloadOnOnline: true,
    disable: process.env.NODE_ENV === "development", // to disable pwa in development
    // ... other options
});

export default withSerwist(nextConfig);
