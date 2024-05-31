import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = withPWA({
    dest: "public",
    reloadOnOnline: true,
    aggressiveFrontEndNavCaching: true,
    fallbacks: {
        // Failed page requests fallback to this.
        document: "/offline"
    }
});

// Export the combined configuration for Next.js with PWA support
export default pwaConfig({});