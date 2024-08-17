/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: "mongodb://localhost:27017/firecallers",
        DISCORD_CLIENT_ID: "1274142794067476542",
        DISCORD_CLIENT_SECRET: "ZdeNR7ohfyMJF9TJj3MEdpmLTyF8xffY",
        NEXTAUTH_SECRET: 'UPeg+usBEweoJJfRu6CyBK10TMqPshpMPNVZ8wq159A='
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ]
    }
};

export default nextConfig;
