/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["assets.aceternity.com", 'images.unsplash.com', "certesto.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
