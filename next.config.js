/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: "/.ts$/",
            use: "ts-loader",
        })

        return config
    },
}

module.exports = nextConfig
